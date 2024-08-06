import CreateUser from "./_components/create-user";
import UserList from "./_components/user-list";

function UserPage() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-start gap-12 p-24">
      <h1 className="text-2xl font-semibold">Users Page</h1>
      <CreateUser />
      <UserList />
    </main>
  );
}

export default UserPage;
