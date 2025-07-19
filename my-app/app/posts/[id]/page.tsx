

import {posts} from "@/app/data/posts";

interface PostPageProps {
  params: { id: string };
  
}

export default function PostPage({ params }: PostPageProps) {
  const { id } = params;  

  interface Post {
    id: string;
    title: string;
    content: string;
  }

  const post: Post | undefined = posts.find((post: Post) => post.id === id);

  if (!post) {
    return (
      <main>
        <h1 className="text-3xl font-bold underline">
          Post Not Found
        </h1>
        <p className="mt-4">
          The post you are looking for does not exist.
        </p>
      </main>
    );
  }

  return (
    <main>
      <h1 className="text-3xl font-bold underline">
        {post.title}
      </h1>
      <p className="mt-4">
        {post.content}
      </p>
    </main>
  );
}

