"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const loginSchema = z.object({
  username: z.string().min(3, "Username en az 3 karakter olmalı"),
  password: z.string().min(6, "Password en az 6 karakter olmalı"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { username: "", password: "" },
  });

  const [message, setMessage] = useState<string | null>(null);

  async function onSubmit(values: LoginFormValues) {
    setMessage(null);
    await new Promise((r) => setTimeout(r, 600));
    setMessage(`Demo submit OK: ${values.username}`);
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="w-full max-w-md rounded-2xl bg-white/5 border border-white/10 backdrop-blur p-8 shadow-2xl">
        {message && (
          <div className="mb-4 rounded-md border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-sm text-emerald-200">
            {message}
          </div>
        )}
        <h1 className="mb-2 text-2xl font-semibold">Login</h1>
        <p className="mb-6 text-sm opacity-70">
          Demo credentials (NX-04’te gerçek session): <br />
          <span className="opacity-90">username:</span> demo{" "}
          <span className="opacity-90">password:</span> demo123
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm opacity-80">Username</label>
            <input
              {...register("username")}
              placeholder="demo"
              className="w-full rounded-md border border-white/10 bg-transparent px-3 py-2 outline-none focus:border-[var(--color-primary)]"
            />
            {errors.username && (
              <p className="mt-1 text-xs text-red-300">
                {errors.username.message}
              </p>
            )}
          </div>

          <div>
            <label className="mb-1 block text-sm opacity-80">Password</label>
            <input
              type="password"
              {...register("password")}
              placeholder="demo123"
              className="w-full rounded-md border border-white/10 bg-transparent px-3 py-2 outline-none focus:border-[var(--color-primary)]"
            />
            {errors.password && (
              <p className="mt-1 text-xs text-red-300">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-md bg-[var(--color-primary)] py-2 text-sm font-medium hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Signing in..." : "Login"}
          </button>
        </form>
      </div>
    </main>
  );
}
