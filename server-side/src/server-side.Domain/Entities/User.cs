using server_side.Domain.ValueObjects;

namespace server_side.Domain.Entities;

public sealed class User
{
    public Guid Id { get; private set; }
    public Email Email { get; private set; } = default!;
    public string PasswordHash { get; private set; } = default!;
    public string FullName { get; private set; } = default!;
    public DateTime CreatedAtUtc { get; private set; }

    private User() { }

    private User(Guid id, Email email, string passwordHash, string fullName)
    {
        Id = id;
        Email = email;
        PasswordHash = passwordHash;
        FullName = fullName;
        CreatedAtUtc = DateTime.UtcNow;
    }

    public static User Register(string email, string passwordHash, string fullName)
    {
        if (string.IsNullOrWhiteSpace(passwordHash))
            throw new ArgumentException("Password hash is required.");

        if (string.IsNullOrWhiteSpace(fullName))
            throw new ArgumentException("Full name is required.");

        return new User(
            Guid.NewGuid(),
            Email.Create(email),
            passwordHash,
            fullName.Trim());
    }
}
