import type { ReactNode } from "react";
import Link from "next/link";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="border-b border-zinc-200 px-6 py-4 dark:border-zinc-800">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-6">
          <span className="font-semibold">My Header</span>
          <nav aria-label="Main navigation" className="flex flex-wrap gap-4">
            <Link href="/dashboard" className="hover:underline">Dashboard</Link>
            <Link href="/products" className="hover:underline">Products</Link>
            <Link href="/orders" className="hover:underline">Orders</Link>
            <Link href="/profile" className="hover:underline">Profile</Link>
            <Link href="/login" className="hover:underline">Login</Link>
            <Link href="/signup" className="hover:underline">Signup</Link>
          </nav>
        </div>
      </header>
      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-8">{children}</main>
      <footer className="border-t border-zinc-200 px-6 py-4 dark:border-zinc-800">
        <div className="mx-auto max-w-5xl">My Footer</div>
      </footer>
    </>
  );
}
