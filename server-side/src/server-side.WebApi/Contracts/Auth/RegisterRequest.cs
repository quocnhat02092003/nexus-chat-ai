namespace server_side.WebApi.Contracts.Auth;

public sealed record RegisterRequest(
    string FullName,
    string Email,
    string Password,
    string ConfirmPassword
);