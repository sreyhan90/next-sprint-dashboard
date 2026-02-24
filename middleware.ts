import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const SESSION_COOKIE = "session";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const session = req.cookies.get(SESSION_COOKIE)?.value ?? null;

  const isDashboard = pathname.startsWith("/dashboard");
  const isLogin = pathname.startsWith("/login");

  // 1) Dashboard koruması
  if (isDashboard && !session) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    // login sonrası geri dönebilmek için callback (bonus)
    url.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(url);
  }

  // 2) Login sayfası: session varsa dashboard'a yönlendir
  if (isLogin && session) {
    const url = req.nextUrl.clone();
    url.pathname = "/dashboard";
    url.search = "";
    return NextResponse.redirect(url);
  }
  const isLogout = pathname.startsWith("/logout");
  if (isLogout) return NextResponse.next();

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/login", "/logout"],
};
