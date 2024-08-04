import { newUserSchema } from "@/lib/validators";

async function getUsers() {
  try {
    const response = await fetch("http://localhost:3000/api/users");
    if (response.status !== 200) throw new Error(response.statusText);
    const { users } = await response.json();
    if (!users) throw new Error("user undefined");
    return users;
  } catch (error) {
    console.error(error);
    return error;
  }
}

async function getUserWithPosts(id: string) {
  try {
    const response = await fetch(`http://localhost:3000/api/users/${id}`);
    if (response.status !== 200) throw new Error(response.statusText);
    const user = await response.json();
    if (!user || typeof user === "undefined") throw new Error("user undefined");
    return user;
  } catch (error) {
    console.error(error);
    return error;
  }
}

async function deleteUser(id: string) {
  console.log("deleteUser called with id: ", id);
  try {
    const response = await fetch(`http://localhost:3000/api/users/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status !== 200) throw new Error(response.statusText);
    const deletedUser = await response.json();
    if (!deletedUser || typeof deletedUser === "undefined")
      throw new Error("user undefined");
    return deletedUser;
  } catch (error) {
    console.error(error);
    return error;
  }
}

async function createUser(data: unknown) {
  try {
    const validData = newUserSchema.parse(data);
    const res = await fetch("http://localhost:3000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(validData),
    });
    if (res.status !== 201) throw new Error(res.statusText);
    const newUser = await res.json();
    return newUser;
  } catch (error) {
    console.error(error);
  }
}

export { getUsers, createUser, getUserWithPosts, deleteUser };
