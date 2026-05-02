namespace server_side.Application.Features.Auth.Register;

public sealed record RegisterUserResponse(
    string Id,
    string FullName,
    string Email
);