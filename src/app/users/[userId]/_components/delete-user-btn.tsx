"use client";

import { Button } from "@/components/ui/button";
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
    <Button
      onClick={handleDelete}
      variant="destructive"
      size="default"
      className="px-2 py-1 rounded"
    >
      {isPending ? "Deleting..." : "Delete User"}
    </Button>
  );
};

export { DeleteUserBtn };
