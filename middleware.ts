// pages/_middleware.js
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // console.log(request.nextUrl.pathname);
  // handle refresh page
  // const token = request.cookies.get("token");
  // if (request.nextUrl.pathname.startsWith("/auth/login")) {
  //   if (token) {
  //     return NextResponse.redirect(new URL("/pages/protected/dashboard", request.url));
  //   }
  // }
  // if (!token) {
  //   return NextResponse.redirect(new URL("/auth/login", request.url));
  // }
  // if (request.nextUrl.pathname.startsWith("/pages/protected")) {
  // }
  // return NextResponse.redirect(new URL("/auth/login", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/:path*",
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
