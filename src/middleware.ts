import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
import { NextRequest } from "next/server";

export default withAuth(
  async function middleware(request: NextRequest) {
    // Your middleware logic here
    console.log("request", request);
  }, {
  isReturnToCurrentPage: true,
}
);

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     * - images (image files)
     * - login (login page)
     * - "" (root page)
     * - auth (auth routes)
     * - anything else that starts with a slash
     */
    '/((?!api|_next/static|_next/image|auth|favicon.ico|sitemap.xml|robots.txt|images|login|$).*)',
  ],
}