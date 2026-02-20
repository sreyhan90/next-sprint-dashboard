"use server";

import { redirect } from "next/navigation";
import { z } from "zod";
import { setSession } from "../lib/auth";

const loginSchema = z.object({
  username: z.string().min(3),
  password: z.string().min(6),
});

export type LoginActionState = { ok: true } | { ok: false; message: string };

export async function loginAction(
  _prevState: LoginActionState,
  formData: FormData,
): Promise<LoginActionState> {
  const username = String(formData.get("username") ?? "");
  const password = String(formData.get("password") ?? "");

  const parsed = loginSchema.safeParse({ username, password });
  if (!parsed.success) {
    return { ok: false, message: "Geçersiz giriş bilgileri (validation)." };
  }

  // Demo credentials
  if (username !== "demo" || password !== "demo123") {
    return { ok: false, message: "Kullanıcı adı veya şifre hatalı." };
  }

  setSession("demo-token");
  redirect("/dashboard");
}
