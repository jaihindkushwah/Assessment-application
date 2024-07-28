// pages/_middleware.js
import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();

  // Check if the request is for a static file or API route, skip the middleware
  if (url.pathname.startsWith("/api") || url.pathname.includes(".")) {
    return NextResponse.next();
  }

  // If the route is not matched, return a custom 404 response
  return new Response("Page Not Found", { status: 404 });
}
