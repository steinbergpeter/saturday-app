"use client";

import { useGetUserWithPosts } from "@/server/query-hooks";
import { DeleteUserBtn } from "./_components/delete-user-btn";
import { PostSlat } from "../../../components/post-slat";
import CreatePost from "./create-post";

type Props = {
  params: {
    userId: string;
  };
};

const UserWithPostsPage = ({ params }: Props) => {
  const {
    data: user,
    isLoading: isUserLoading,
    isError: isUserError,
    error: userError,
  } = useGetUserWithPosts(params.userId);

  return (
    <section className="px-12 w-full">
      {isUserError || !user ? (
        <div>Error: {userError?.message ?? "Cannot get user"}</div>
      ) : isUserLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="flex flex-col justify-start items-start gap-2">
          <h1 className="text-xl font-semibold mb-6 mt-20">
            User: {user.name}
          </h1>
          <h2 className="text-lg font-semibold mb-4">Email: {user.email}</h2>
          <br />
          <h2 className="text-lg font-semibold mb-4">
            Posts<span className="ml-2">{`(${user.posts.length})`}</span>
          </h2>
          <ul className="flex flex-col items-start gap-6 w-full mb-4">
            {user.posts.length > 0 ? (
              user.posts.map((post) => <PostSlat key={post.id} post={post} />)
            ) : (
              <h3>No posts found</h3>
            )}
          </ul>
          <CreatePost authorId={user.id} />
          <br />
          <DeleteUserBtn userId={user.id} />
        </div>
      )}
    </section>
  );
};

export default UserWithPostsPage;
