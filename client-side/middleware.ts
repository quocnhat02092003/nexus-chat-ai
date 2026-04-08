import { NextResponse, type NextRequest } from "next/server";

const AUTH_COOKIE_NAME = "nexus_session";

export function middleware(request: NextRequest) {
  const hasSession = Boolean(request.cookies.get(AUTH_COOKIE_NAME)?.value);

  if (!hasSession) {
    return NextResponse.next();
  }

  const redirectUrl = new URL("/auth-required", request.url);
  redirectUrl.searchParams.set(
    "next",
    `${request.nextUrl.pathname}${request.nextUrl.search}`,
  );

  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: ["/chat/:path*", "/settings/:path*", "/workspace/:path*"],
};
