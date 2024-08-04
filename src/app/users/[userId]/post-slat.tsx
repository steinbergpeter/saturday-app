import React from "react";
import Link from "next/link";
import { Post } from "@/lib/validators";

type Props = {
  post: Post;
};

const PostSlat = ({ post }: Props) => {
  return (
    <Link
      href={`/users/${post.id}`}
      className="bg-accent text-accent-foreground px-3 py-1 rounded"
    >
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </Link>
  );
};

export { PostSlat };
