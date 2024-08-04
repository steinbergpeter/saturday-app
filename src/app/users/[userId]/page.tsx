"use client";

import { useGetUserWithPosts } from "@/server/query-hooks";
import React from "react";

type Props = {
  params: {
    userId: string;
  };
};

const UserWithPostsPage = ({ params }: Props) => {
  const {
    data: user,
    isLoading,
    isError,
    error,
  } = useGetUserWithPosts(params.userId);

  return (
    <section>
      {isError || !user ? (
        <div>Error: {error?.message ?? "Cannot get user"}</div>
      ) : isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h1 className="text-xl font-semibold mb-6">User: {user.name}</h1>
          <h2 className="text-lg font-semibold mb-4">Email: {user.email}</h2>
          <h2 className="text-lg font-semibold mb-4">Posts</h2>
          <ul className="flex flex-col items-center gap-4">
            {user.posts.map((post) => (
              <div key={post.id}>
                <h3 className="text-lg font-semibold">{post.title}</h3>
                <p>{post.content}</p>
              </div>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default UserWithPostsPage;
