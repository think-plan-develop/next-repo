import Link from "next/link";

export default function SignupPage() {
  return (
    <main className="mx-auto w-full max-w-md px-6 py-12">
      <h1 className="mb-6 text-2xl font-semibold">Signup</h1>
      <div className="flex flex-wrap gap-4">
        <Link href="/login" className="underline">Login</Link>
        <Link href="/dashboard" className="underline">Dashboard</Link>
      </div>
    </main>
  );
}
