"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormState } from "react-dom";
import { loginAction, type LoginActionState } from "./actions";

const loginSchema = z.object({
  username: z.string().min(3, "Username en az 3 karakter olmalı"),
  password: z.string().min(6, "Password en az 6 karakter olmalı"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const initialState: LoginActionState = { ok: false, message: "" };

export default function LoginPage() {
  const [state, formAction] = useFormState(loginAction, initialState);

  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { username: "", password: "" },
  });

  // RHF submit yerine server action kullanacağız,
  // ama RHF validation'ı korumak için handleSubmit'i köprü olarak kullanıyoruz.
  function onValidSubmit(values: LoginFormValues) {
    const fd = new FormData();
    fd.set("username", values.username);
    fd.set("password", values.password);
    formAction(fd);
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="w-full max-w-md rounded-2xl bg-white/5 border border-white/10 backdrop-blur p-8 shadow-2xl">
        <h1 className="mb-2 text-2xl font-semibold">Login</h1>
        <p className="mb-6 text-sm opacity-70">
          Demo credentials: <span className="opacity-90">demo</span> /{" "}
          <span className="opacity-90">demo123</span>
        </p>

        {state.ok === false && state.message ? (
          <div className="mb-4 rounded-md border border-red-400/20 bg-red-400/10 px-3 py-2 text-sm text-red-200">
            {state.message}
          </div>
        ) : null}

        <form
          action={(fd) => {
            // action attribute'u kullanıyoruz, ama önce RHF validation:
            // formData'dan values çekmek yerine RHF submit ile ilerliyoruz.
            // Bu yüzden form submit’i engelleyip handleSubmit kullanacağız.
          }}
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(onValidSubmit)();
          }}
          className="space-y-4"
        >
          <div>
            <label className="mb-1 block text-sm opacity-80">Username</label>
            <input
              {...register("username")}
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
