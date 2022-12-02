import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const nextAuthCookieToken = request.cookies.get(
    "next-auth.session-token"
  )?.value;

  if (nextAuthCookieToken) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(`${process.env.ABSOLUTE_PATH_ROOT}auth`);
  }
}

export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/api/letters/create", "/new-letter"],
};
