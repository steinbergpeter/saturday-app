import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getPosts, getUsers, getUserWithPosts } from "./queries";
import type { PostArray, UserArray, UserWithPosts } from "@/lib/validators";

const useGetUsers = (): UseQueryResult<UserArray, Error> => {
  console.log("♥︎ useGetUsers called");
  return useQuery<UserArray, Error>({
    queryKey: ["users"],
    queryFn: () => getUsers(),
  });
};

const useGetPosts = (): UseQueryResult<PostArray, Error> => {
  console.log("♥︎ useGetPosts called");
  return useQuery<PostArray, Error>({
    queryKey: ["posts"],
    queryFn: () => getPosts(),
  });
};

const useGetUserWithPosts = (
  id: string
): UseQueryResult<UserWithPosts, Error> =>
  useQuery<UserWithPosts, Error>({
    queryKey: ["user", id],
    queryFn: () => getUserWithPosts(id),
  });

export { useGetUsers, useGetUserWithPosts, useGetPosts };
