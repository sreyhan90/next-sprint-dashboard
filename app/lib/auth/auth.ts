import "server-only";
import { cookies } from "next/headers";

export const SESSION_COOKIE = "session";

export async function getSession() {
  const cookieStore = await cookies();

  return cookieStore.get(SESSION_COOKIE)?.value ?? null;
}
