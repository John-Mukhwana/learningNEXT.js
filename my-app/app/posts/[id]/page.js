
export default function PostPage({ params }) {
  const { id } = params;

  return (
    <main>
      <h1 className="text-3xl font-bold underline">
        Post {id}
      </h1>
      <p className="mt-4">
        This is the detail page for post {id}.
      </p>
    </main>
  );
}

