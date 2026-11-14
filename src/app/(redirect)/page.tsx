import Link from "next/link";

export default function RootPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <meta httpEquiv="refresh" content="0; url=/it/" />
      <p className="text-sm text-zinc-400">
        <Link className="text-white underline" href="/it/">
          Portfolio · Italiano
        </Link>{" "}
        ·{" "}
        <Link className="text-white underline" href="/en/">
          English
        </Link>
      </p>
    </main>
  );
}
