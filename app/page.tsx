import Link from "next/link";

const pages = [
  { href: "/login", label: "Login" },
  { href: "/signup", label: "Signup" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/products", label: "Products" },
  { href: "/orders", label: "Orders" },
  { href: "/profile", label: "Profile" },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-6 py-12 text-zinc-900">
      <div className="w-full max-w-3xl rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
        <h1 className="mb-8 text-3xl font-semibold">Pages</h1>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-center font-medium transition hover:border-zinc-300 hover:bg-zinc-100"
            >
              {page.label}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
