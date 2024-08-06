import React from "react";
import Link from "next/link";
import { Post } from "@/lib/validators";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Props = {
  post: Post;
};

const PostSlat = ({ post }: Props) => {
  return (
    <Link href={`/posts/${post.id}`}>
      <Card className="w-[350px] bg-secondary text-secondary-foreground border-4 border-secondary hover:border-accent">
        <CardHeader className="pt-5 pb-0">
          <CardTitle className="text-xl">{post.title}</CardTitle>
          <CardContent>
            <span className="line-clamp-2">{post.content}</span>
          </CardContent>
        </CardHeader>
        <CardFooter>
          <CardDescription className="italic w-full">
            <div className="inline-flex justify-between items-center w-full">
              <p>{post.published ? "published" : "unpublished"}</p>
              <p>{new Date(post.createdAt).toLocaleDateString()}</p>
            </div>
          </CardDescription>
        </CardFooter>
      </Card>
    </Link>
  );
};

export { PostSlat };
