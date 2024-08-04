"use client";

import { useCreateUser } from "@/server/query-hooks";
import { useRef, type FormEvent } from "react";

const CreateUser = () => {
  const { mutate: createUser, isError, isPending, error } = useCreateUser();
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    createUser({
      name: formData.get("name") as string,
      email: formData.get("email") as string,
    });
    formRef.current?.reset();
    formRef.current?.querySelector("input")?.focus();
  };

  return (
    <form
      className="flex flex-col justify-start items-center gap-2 bg-secondary text-secondary-foreground p-2 rounded"
      ref={formRef}
      onSubmit={handleSubmit}
    >
      <div className="flex gap-2 items-center">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" className="p-1 rounded" />
      </div>
      <div className="flex gap-2 items-center">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className="
          p-1
          rounded
        "
        />
      </div>
      <button
        type="submit"
        className="bg-primary text-primary-foreground px-3 py-1 rounded w-full mt-2"
      >
        {isPending ? "Creating..." : "Create User"}
      </button>
    </form>
  );
};

export default CreateUser;
