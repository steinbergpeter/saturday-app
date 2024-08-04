"use client";

import { useGetUserWithPosts } from "@/server/query-hooks";
import { DeleteUserBtn } from "./_components/delete-user-btn";
import { PostSlat } from "./post-slat";

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
    <section className="px-12">
      {isError || !user ? (
        <div>Error: {error?.message ?? "Cannot get user"}</div>
      ) : isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="flex flex-col justify-start items-start gap-2">
          <h1 className="text-xl font-semibold mb-6 mt-20">
            User: {user.name}
          </h1>
          <h2 className="text-lg font-semibold mb-4">Email: {user.email}</h2>
          <DeleteUserBtn userId={user.id} />
          <h2 className="text-lg font-semibold mb-4">Posts</h2>
          <ul className="flex flex-col items-start gap-6">
            {user.posts.length > 0 ? (
              user.posts.map((post) => <PostSlat key={post.id} post={post} />)
            ) : (
              <h3>No posts found</h3>
            )}
          </ul>
        </div>
      )}
    </section>
  );
};

export default UserWithPostsPage;
