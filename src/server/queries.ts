const baseURL = "http://localhost:3000/api";

async function getUsers() {
  console.log("♥︎ getUsers called");
  try {
    const response = await fetch(`${baseURL}/users`);
    if (response.status !== 200) throw new Error(response.statusText);
    console.log("♥︎ response.status: ", response.status);
    const { users } = await response.json();
    console.log("♥︎ users from getUsers: ", users);

    if (!users) throw new Error("user undefined");
    return users;
  } catch (error) {
    console.error("error from getUsers", error);
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

async function getPosts() {
  console.log("♥︎ getPosts called");
  try {
    const response = await fetch(`${baseURL}/posts`);
    if (response.status !== 200) throw new Error(response.statusText);
    console.log("♥︎ response.status: ", response.status);
    const { posts } = await response.json();
    console.log("♥︎ users from getPosts: ", posts);

    if (!posts) throw new Error("posts undefined");
    return posts;
  } catch (error) {
    console.error("error from getPosts", error);
    return error;
  }
}

export { getUsers, getUserWithPosts, getPosts };
