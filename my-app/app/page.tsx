import Link from "next/link";


export default function Home() {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">
        Welcome to our HomePage!
      </h1>
      <Link href="/about" className="text-blue-500 hover:underline">
        Go to About Page
      </Link>
      <Link href="/posts/1" className="text-blue-500 hover:underline ml-4">
        View Post 1
      </Link>
      <Link href="/posts/2" className="text-blue-500 hover:underline ml-4">
        View Post 2
      </Link>
    </main>
  );
}
