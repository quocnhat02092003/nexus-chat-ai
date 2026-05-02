namespace server_side.Domain.ValueObjects;

public sealed class Email
{
    public string Value { get; }

    private Email(string value)
    {
        Value = value;
    }

    public static Email Create(string value)
    {
        if (string.IsNullOrWhiteSpace(value))
            throw new ArgumentException("Email is required.");

        var normalized = value.Trim().ToLowerInvariant();

        if (!normalized.Contains("@"))
            throw new ArgumentException("Email is invalid.");

        return new Email(normalized);
    }

    public override bool Equals(object? obj)
    {
        if (obj is not Email email)
            return false;

        return Value == email.Value;
    }

    public override int GetHashCode()
    {
        return Value.GetHashCode();
    }
}
