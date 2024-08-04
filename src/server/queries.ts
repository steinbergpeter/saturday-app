const baseURL = "http://localhost:3000/api";

async function getUsers() {
  try {
    const response = await fetch(`${baseURL}/users`);
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
    const response = await fetch(`${baseURL}/users/${id}`);
    if (response.status !== 200) throw new Error(response.statusText);
    const user = await response.json();
    if (!user || typeof user === "undefined") throw new Error("user undefined");
    return user;
  } catch (error) {
    console.error(error);
    return error;
  }
}

export { getUsers, getUserWithPosts };
