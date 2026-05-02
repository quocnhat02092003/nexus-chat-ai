using Moq;
using server_side.Application.Abstractions.Persistence;
using server_side.Application.Abstractions.Security;
using server_side.Application.Features.Auth.Register;
using server_side.Domain.Entities;
using server_side.Domain.ValueObjects;

namespace server_side.UnitTests;

public class RegisterUserCommandHandlerTests
{
    private readonly Mock<IUserRepository> _userRepositoryMock;
    private readonly Mock<IPasswordHasher> _passwordHasherMock;
    private readonly Mock<IUnitOfWork> _unitOfWorkMock;
    private readonly RegisterUserCommandHandler _handler;

    public RegisterUserCommandHandlerTests()
    {
        _userRepositoryMock = new Mock<IUserRepository>();
        _passwordHasherMock = new Mock<IPasswordHasher>();
        _unitOfWorkMock = new Mock<IUnitOfWork>();

        _handler = new RegisterUserCommandHandler(
            _userRepositoryMock.Object,
            _passwordHasherMock.Object,
            _unitOfWorkMock.Object);
    }

    #region Success Cases

    [Fact]
    public async Task Handle_WithValidData_ShouldRegisterUserSuccessfully()
    {
        // Arrange
        var command = new RegisterUserCommand(
            "Nguyễn Văn An",
            "nguyenan@example.com",
            "SecurePass123!",
            "SecurePass123!");

        const string hashedPassword = "$2a$11$hashedPassword";
        const int saveChangesResult = 1;

        _userRepositoryMock
            .Setup(x => x.GetByEmailAsync(command.Email, It.IsAny<CancellationToken>()))
            .ReturnsAsync((User?)null);

        _passwordHasherMock
            .Setup(x => x.Hash(command.Password))
            .Returns(hashedPassword);

        _unitOfWorkMock
            .Setup(x => x.SaveChangesAsync(It.IsAny<CancellationToken>()))
            .ReturnsAsync(saveChangesResult);

        // Act
        var result = await _handler.Handle(command, CancellationToken.None);

        // Assert
        Assert.NotNull(result);
        Assert.Equal(command.FullName, result.FullName);
        Assert.Equal(command.Email, result.Email);
        Assert.NotNull(result.Id);
        Assert.NotEmpty(result.Id);

        _userRepositoryMock.Verify(
            x => x.GetByEmailAsync(command.Email, It.IsAny<CancellationToken>()),
            Times.Once);

        _passwordHasherMock.Verify(
            x => x.Hash(command.Password),
            Times.Once);

        _userRepositoryMock.Verify(
            x => x.AddAsync(It.IsAny<User>(), It.IsAny<CancellationToken>()),
            Times.Once);

        _unitOfWorkMock.Verify(
            x => x.SaveChangesAsync(It.IsAny<CancellationToken>()),
            Times.Once);
    }

    [Fact]
    public async Task Handle_WithDifferentValidEmails_ShouldRegisterMultipleUsers()
    {
        // Arrange
        var emailsToTest = new[]
        {
            "user1@example.com",
            "user2@example.com",
            "user3@example.com"
        };

        const string hashedPassword = "$2a$11$hashedPassword";
        const int saveChangesResult = 1;

        _userRepositoryMock
            .Setup(x => x.GetByEmailAsync(It.IsAny<string>(), It.IsAny<CancellationToken>()))
            .ReturnsAsync((User?)null);

        _passwordHasherMock
            .Setup(x => x.Hash(It.IsAny<string>()))
            .Returns(hashedPassword);

        _unitOfWorkMock
            .Setup(x => x.SaveChangesAsync(It.IsAny<CancellationToken>()))
            .ReturnsAsync(saveChangesResult);

        // Act & Assert
        foreach (var email in emailsToTest)
        {
            var command = new RegisterUserCommand(
                "Test User",
                email,
                "ValidPassword123",
                "ValidPassword123");

            var result = await _handler.Handle(command, CancellationToken.None);

            Assert.NotNull(result);
            Assert.Equal(email, result.Email);
        }
    }

    #endregion

    #region Failure Cases

    [Fact]
    public async Task Handle_WithExistingEmail_ShouldThrowInvalidOperationException()
    {
        // Arrange
        var existingUser = User.Register(
            "existing@example.com",
            "$2a$11$hashedPassword",
            "Existing User");

        var command = new RegisterUserCommand(
            "New User",
            "existing@example.com",
            "SecurePass123!",
            "SecurePass123!");

        _userRepositoryMock
            .Setup(x => x.GetByEmailAsync(command.Email, It.IsAny<CancellationToken>()))
            .ReturnsAsync(existingUser);

        // Act & Assert
        var exception = await Assert.ThrowsAsync<InvalidOperationException>(
            () => _handler.Handle(command, CancellationToken.None));

        Assert.Equal("Email already exists.", exception.Message);

        _userRepositoryMock.Verify(
            x => x.GetByEmailAsync(command.Email, It.IsAny<CancellationToken>()),
            Times.Once);

        _userRepositoryMock.Verify(
            x => x.AddAsync(It.IsAny<User>(), It.IsAny<CancellationToken>()),
            Times.Never);

        _unitOfWorkMock.Verify(
            x => x.SaveChangesAsync(It.IsAny<CancellationToken>()),
            Times.Never);
    }

    [Fact]
    public async Task Handle_WithPasswordMismatch_ShouldThrowArgumentException()
    {
        // Arrange
        var command = new RegisterUserCommand(
            "Mismatch User",
            "mismatch@example.com",
            "PasswordOne",
            "PasswordTwo");

        // Act & Assert
        var exception = await Assert.ThrowsAsync<ArgumentException>(
            () => _handler.Handle(command, CancellationToken.None));

        Assert.Equal("Passwords do not match.", exception.Message);

        _userRepositoryMock.Verify(
            x => x.GetByEmailAsync(It.IsAny<string>(), It.IsAny<CancellationToken>()),
            Times.Never);
    }

    [Fact]
    public async Task Handle_WithMultipleEmailsInSequence_ShouldHandleCorrectly()
    {
        // Arrange
        const string hashedPassword = "$2a$11$hashedPassword";
        const int saveChangesResult = 1;

        var firstEmail = "first@example.com";
        var secondEmail = "second@example.com";

        // Setup for first call
        _userRepositoryMock
            .Setup(x => x.GetByEmailAsync(firstEmail, It.IsAny<CancellationToken>()))
            .ReturnsAsync((User?)null);

        // Setup for second call - email already exists
        var existingUser = User.Register(
            secondEmail,
            hashedPassword,
            "Existing User");

        _userRepositoryMock
            .Setup(x => x.GetByEmailAsync(secondEmail, It.IsAny<CancellationToken>()))
            .ReturnsAsync(existingUser);

        _passwordHasherMock
            .Setup(x => x.Hash(It.IsAny<string>()))
            .Returns(hashedPassword);

        _unitOfWorkMock
            .Setup(x => x.SaveChangesAsync(It.IsAny<CancellationToken>()))
            .ReturnsAsync(saveChangesResult);

        // Act & Assert
        // First registration should succeed
        var firstCommand = new RegisterUserCommand(
            "First User",
            firstEmail,
            "ValidPassword123",
            "ValidPassword123");

        var firstResult = await _handler.Handle(firstCommand, CancellationToken.None);
        Assert.NotNull(firstResult);

        // Second registration should fail
        var secondCommand = new RegisterUserCommand(
            "Second User",
            secondEmail,
            "ValidPassword123",
            "ValidPassword123");

        var exception = await Assert.ThrowsAsync<InvalidOperationException>(
            () => _handler.Handle(secondCommand, CancellationToken.None));

        Assert.Equal("Email already exists.", exception.Message);
    }

    #endregion

    #region Edge Cases

    [Fact]
    public async Task Handle_WithCancellationToken_ShouldRespectCancellation()
    {
        // Arrange
        var command = new RegisterUserCommand(
            "Test User",
            "test@example.com",
            "ValidPassword123",
            "ValidPassword123");

        var cancellationTokenSource = new CancellationTokenSource();
        cancellationTokenSource.Cancel();

        _userRepositoryMock
            .Setup(x => x.GetByEmailAsync(It.IsAny<string>(), It.IsAny<CancellationToken>()))
            .ThrowsAsync(new OperationCanceledException());

        // Act & Assert
        await Assert.ThrowsAsync<OperationCanceledException>(
            () => _handler.Handle(command, cancellationTokenSource.Token));
    }

    [Fact]
    public async Task Handle_WithDatabaseException_ShouldPropagateException()
    {
        // Arrange
        var command = new RegisterUserCommand(
            "Test User",
            "test@example.com",
            "ValidPassword123",
            "ValidPassword123");

        _userRepositoryMock
            .Setup(x => x.GetByEmailAsync(command.Email, It.IsAny<CancellationToken>()))
            .ReturnsAsync((User?)null);

        _passwordHasherMock
            .Setup(x => x.Hash(command.Password))
            .Returns("hashedPassword");

        _unitOfWorkMock
            .Setup(x => x.SaveChangesAsync(It.IsAny<CancellationToken>()))
            .ThrowsAsync(new InvalidOperationException("Database error"));

        // Act & Assert
        var exception = await Assert.ThrowsAsync<InvalidOperationException>(
            () => _handler.Handle(command, CancellationToken.None));

        Assert.Equal("Database error", exception.Message);
    }

    [Fact]
    public async Task Handle_WithSpecialCharactersInFullName_ShouldRegisterSuccessfully()
    {
        // Arrange
        var command = new RegisterUserCommand(
            "Nguyễn Văn Ân-Đức",
            "special@example.com",
            "SecurePass123!",
            "SecurePass123!");

        const string hashedPassword = "$2a$11$hashedPassword";
        const int saveChangesResult = 1;

        _userRepositoryMock
            .Setup(x => x.GetByEmailAsync(command.Email, It.IsAny<CancellationToken>()))
            .ReturnsAsync((User?)null);

        _passwordHasherMock
            .Setup(x => x.Hash(command.Password))
            .Returns(hashedPassword);

        _unitOfWorkMock
            .Setup(x => x.SaveChangesAsync(It.IsAny<CancellationToken>()))
            .ReturnsAsync(saveChangesResult);

        // Act
        var result = await _handler.Handle(command, CancellationToken.None);

        // Assert
        Assert.NotNull(result);
        Assert.Equal(command.FullName, result.FullName);
    }

    #endregion
}
