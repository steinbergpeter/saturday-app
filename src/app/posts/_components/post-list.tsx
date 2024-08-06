"use client";

import { useGetPosts } from "@/server/query-hooks";
import { PostSlat } from "@/components/post-slat";

const PostsList = () => {
  const { data: posts, isLoading, isError, error } = useGetPosts();
  console.log("🤡 users from UserList: ", posts);

  if (isError || !posts) {
    return <div>Error: {error?.message ?? "Cannot get posts"}</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (posts.length < 1) {
    return <h3>No users</h3>;
  }

  return (
    <div className="flex flex-col w-full">
      <ul className="grid grid-cols-3 gap-4">
        {posts?.map((post) => (
          <PostSlat key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
};

export default PostsList;
