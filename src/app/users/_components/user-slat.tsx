import React from "react";
import Link from "next/link";

interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
}

type Props = {
  user: User;
};

const UserSlat = ({ user }: Props) => {
  return (
    <Link
      href={`/users/${user.id}`}
      className="bg-accent text-accent-foreground px-3 py-1 rounded"
    >
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </Link>
  );
};

export { UserSlat };
