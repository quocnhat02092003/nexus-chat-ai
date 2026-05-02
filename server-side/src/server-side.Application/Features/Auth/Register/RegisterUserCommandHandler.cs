using MediatR;
using server_side.Application.Abstractions.Persistence;
using server_side.Application.Abstractions.Security;
using server_side.Domain.Entities;

namespace server_side.Application.Features.Auth.Register;

public sealed class RegisterUserCommandHandler
    : IRequestHandler<RegisterUserCommand, RegisterUserResponse>
{
    private readonly IUserRepository _userRepository;
    private readonly IPasswordHasher _passwordHasher;
    private readonly IUnitOfWork _unitOfWork;

    public RegisterUserCommandHandler(
        IUserRepository userRepository,
        IPasswordHasher passwordHasher,
        IUnitOfWork unitOfWork)
    {
        _userRepository = userRepository;
        _passwordHasher = passwordHasher;
        _unitOfWork = unitOfWork;
    }

    public async Task<RegisterUserResponse> Handle(
        RegisterUserCommand request,
        CancellationToken cancellationToken)
    {
        if (request.Password != request.ConfirmPassword)
        {
            throw new ArgumentException("Passwords do not match.");
        }

        var existingUser = await _userRepository.GetByEmailAsync(
            request.Email,
            cancellationToken);

        if (existingUser is not null)
        {
            throw new InvalidOperationException("Email already exists.");
        }

        var passwordHash = _passwordHasher.Hash(request.Password);

        var user = User.Register(
            request.Email,
            passwordHash,
            request.FullName);

        await _userRepository.AddAsync(user, cancellationToken);
        await _unitOfWork.SaveChangesAsync(cancellationToken);

        return new RegisterUserResponse(
            user.Id.ToString(),
            user.FullName,
            user.Email.Value);
    }
}
