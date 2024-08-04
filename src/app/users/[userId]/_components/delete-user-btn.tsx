"use client";

import { useDeleteUser } from "@/server/mutation-hooks";
import { useRouter } from "next/navigation";

type Props = {
  userId: string;
};

const DeleteUserBtn = ({ userId }: Props) => {
  const router = useRouter();
  const { mutate: deleteUser, isPending } = useDeleteUser(userId);
  const handleDelete = () => {
    deleteUser(userId);
    router.push("/users");
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-destructive text-destructive-foreground px-2 py-1 rounded"
    >
      {isPending ? "Deleting..." : "Delete"}
    </button>
  );
};

export { DeleteUserBtn };
