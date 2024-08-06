import PostsList from "./_components/post-list";

function PostsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-12 p-24">
      <h1 className="text-2xl font-semibold">Posts Page</h1>
      <PostsList />
    </main>
  );
}

export default PostsPage;
