using MediatR;

namespace server_side.Application.Features.Auth.Register;

public sealed record RegisterUserCommand(
    string FullName,
    string Email,
    string Password,
    string ConfirmPassword
) : IRequest<RegisterUserResponse>;