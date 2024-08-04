import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getUsers, getUserWithPosts } from "./queries";
import type { UserArray, UserWithPosts } from "@/lib/validators";

const useGetUsers = (): UseQueryResult<UserArray, Error> =>
  useQuery<UserArray, Error>({
    queryKey: ["users"],
    queryFn: () => getUsers(),
  });

const useGetUserWithPosts = (
  id: string
): UseQueryResult<UserWithPosts, Error> =>
  useQuery<UserWithPosts, Error>({
    queryKey: ["user", id],
    queryFn: () => getUserWithPosts(id),
  });

export { useGetUsers, useGetUserWithPosts };
