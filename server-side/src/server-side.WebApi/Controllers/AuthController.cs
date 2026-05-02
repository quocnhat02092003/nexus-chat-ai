using MediatR;
using Microsoft.AspNetCore.Mvc;
using server_side.Application.Features.Auth.Register;
using server_side.WebApi.Contracts.Auth;

namespace server_side.WebApi.Controllers;

[ApiController]
[Route("api/auth")]
public class AuthController : ControllerBase
{
    private readonly ISender _sender;

    public AuthController(ISender sender)
    {
        _sender = sender;
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register(RegisterRequest request, CancellationToken cancellationToken)
    {
        var command = new RegisterUserCommand(
            request.FullName,
            request.Email,
            request.Password,
            request.ConfirmPassword
        );
        var result = await _sender.Send(command, cancellationToken);
        return Ok(result);
    }
}