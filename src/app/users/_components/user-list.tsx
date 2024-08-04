"use client";

import { useGetUsers } from "@/server/query-hooks";
import { UserSlat } from "./user-slat";

const UserList = () => {
  const { data: users, isLoading, isError, error } = useGetUsers();

  if (isError || !users) {
    return <div>Error: {error?.message ?? "Cannot get users"}</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col justify-start gap-4 items-center">
      <h1 className="text-xl font-semibold mb-6">User List</h1>
      <ul className="flex flex-col items-center gap-4">
        {users?.map((user) => (
          <UserSlat key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
};

export default UserList;
