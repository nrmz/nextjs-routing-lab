import Link from "next/link";

export default function Home() {
  return (
    <main className="container">
      <h1>Next.js Routing Lab</h1>

      <p>
        A small project to learn Next.js App Router.
      </p>

      <Link href="/products" className="button">
        View Products
      </Link>
    </main>
  );
}