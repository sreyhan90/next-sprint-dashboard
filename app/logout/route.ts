import { NextRequest, NextResponse } from "next/server";
import { clearSession } from "../lib/auth/authActions";

export async function POST(req: NextRequest) {
  await clearSession();
  const url = req.nextUrl.clone();
  url.pathname = "/login";
  url.search = "";
  return NextResponse.redirect(url);
}
