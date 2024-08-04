import CreateUser from "@/components/create-user";
import UserList from "@/components/user-list";

function UserPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-12 p-24">
      <h1 className="text-2xl font-semibold">Users Page</h1>
      <CreateUser />
      <UserList />
    </main>
  );
}

export default UserPage;
