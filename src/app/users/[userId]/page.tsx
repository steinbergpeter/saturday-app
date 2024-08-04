"use client";

import { useGetUserWithPosts } from "@/server/query-hooks";
import { DeleteUserBtn } from "./_components/delete-user-btn";

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
        <div className="flex flex-col justify-start items-start gap-2">
          <h1 className="text-xl font-semibold mb-6">User: {user.name}</h1>
          <h2 className="text-lg font-semibold mb-4">Email: {user.email}</h2>
          <DeleteUserBtn id={user.id} />
          <h2 className="text-lg font-semibold mb-4">Posts</h2>
          <ul className="flex flex-col items-center gap-4">
            {user.posts.map((post) => (
              <div
                key={post.id}
                className="flex flex-col justify-start gap-2 items-start"
              >
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
