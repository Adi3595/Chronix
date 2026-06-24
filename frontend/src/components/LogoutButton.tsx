"use client";

import { useAuth } from "@/components/AuthProvider";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = async (e: React.MouseEvent) => {
    e.preventDefault();
    await logout();
    router.push("/");
  };

  return (
    <button
      onClick={handleLogout}
      className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-on-surface-variant font-mono-label text-[13px] hover:bg-surface-container transition-colors duration-200"
    >
      <span className="material-symbols-outlined">logout</span>
      Logout
    </button>
  );
}
