import {
  useQuery,
  useMutation,
  UseMutationResult,
  UseQueryResult,
  useQueryClient,
} from "@tanstack/react-query";
import { getUsers, createUser, getUserWithPosts, deleteUser } from "./getters";
import type { NewUser, User, UserArray, UserWithPosts } from "@/lib/validators";

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

const useCreateUser = (): UseMutationResult<User, Error, NewUser> => {
  const queryClient = useQueryClient();
  return useMutation<User, Error, NewUser>({
    mutationFn: async (newUser) => createUser(newUser),
    onError: (error) => console.error(error),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["users"] }),
  });
};

const useDeleteUser = (id: string): UseMutationResult<User, Error, string> => {
  const queryClient = useQueryClient();
  return useMutation<User, Error, string>({
    mutationFn: async () => {
      console.log("deleteUser hook Mutation called with id: ", id);
      return deleteUser(id);
    },
    onError: (error) => console.error(error),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user", id] });
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};

export { useGetUsers, useCreateUser, useGetUserWithPosts, useDeleteUser };
