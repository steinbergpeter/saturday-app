import { newUserSchema, userSchema } from "@/lib/validators";

const baseURL = "http://localhost:3000/api/";
const usersURL = `${baseURL}users/`;

async function deleteUser(id: string) {
  try {
    const response = await fetch(`${usersURL}${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status !== 200) throw new Error(response.statusText);
    return await response.json();
  } catch (error) {
    console.error(error);
    return error;
  }
}

async function createUser(data: unknown) {
  try {
    const validData = newUserSchema.parse(data);
    const res = await fetch(usersURL, {
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

export { createUser, deleteUser };
