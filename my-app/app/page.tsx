import Link from "next/link";


export default function Home() {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">
        Welcome to My App!
      </h1>
      <Link href="/about" className="text-blue-500 hover:underline">
        Go to About Page
      </Link>
    </main>
  );
}
