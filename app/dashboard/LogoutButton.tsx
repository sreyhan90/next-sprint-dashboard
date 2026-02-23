"use client";

import { logoutAction } from "./actions";

export default function LogoutButton() {
  return (
    <form action={logoutAction}>
      <button
        type="submit"
        className="rounded-md border border-white/15 px-3 py-2 text-sm hover:bg-white/5"
      >
        Logout
      </button>
    </form>
  );
}
