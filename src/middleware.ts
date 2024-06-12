import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export default function authMiddleware(request: NextRequest) {
  const token = cookies().get("authjs.session-token");

  if (!token && request.url.includes("/app")) {
    return NextResponse.redirect(new URL("/auth", request.url));
  }

  if (token && request.url.includes("/auth")) {
    return NextResponse.redirect(new URL("/app", request.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
