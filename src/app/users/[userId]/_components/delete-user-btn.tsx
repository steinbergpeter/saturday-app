"use client";

import { useDeleteUser } from "@/server/query-hooks";
import { useRouter } from "next/navigation";

type Props = {
  id: string;
};

const DeleteUserBtn = ({ id }: Props) => {
  const router = useRouter();
  const { mutate: deleteUser, isPending } = useDeleteUser(id);
  const handleDelete = () => {
    deleteUser(id);
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
