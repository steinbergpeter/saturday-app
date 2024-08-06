"use client";

import { Button } from "@/components/ui/button";
import { useCreatePost } from "@/server/mutation-hooks";
import { useRef, type FormEvent } from "react";

type Props = {
  authorId: string;
};
const CreatePost = ({ authorId }: Props) => {
  const {
    mutate: createPost,
    isError: isPostError,
    isPending: isPostPending,
    error: postError,
  } = useCreatePost();

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newPost = {
      title: formData.get("title") as string,
      content: formData.get("content") as string,
      published: false,
      authorId: authorId,
    };
    console.log("🤡 new post from handleSubmit: ", newPost);
    createPost(newPost);
    formRef.current?.reset();
    formRef.current?.querySelector("input")?.focus();
  };

  return (
    <form
      className="w-1/2 flex flex-col justify-start items-center gap-2 bg-secondary text-secondary-foreground p-2 rounded"
      ref={formRef}
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="authorId" value={authorId} />
      <input type="hidden" name="published" value="false" />
      <div className="flex gap-2 items-center w-full">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          className="p-1 rounded w-full"
        />
      </div>
      <div className="flex gap-2 items-center w-full">
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          name="content"
          className="p-1 rounded w-full"
          rows={5}
        />
      </div>
      <Button
        type="submit"
        className="bg-primary text-primary-foreground px-3 py-1 rounded w-full mt-2"
      >
        {isPostPending ? "Adding post..." : "Add Post"}
      </Button>
    </form>
  );
};

export default CreatePost;
