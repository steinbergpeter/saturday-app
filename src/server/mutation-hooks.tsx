import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { createPost, createUser, deleteUser } from "./mutations";
import type { NewPost, NewUser, Post, User } from "@/lib/validators";

const useCreateUser = (): UseMutationResult<User, Error, NewUser> => {
  const queryClient = useQueryClient();
  return useMutation<User, Error, NewUser>({
    mutationFn: async (newUser) => createUser(newUser),
    onError: (error) => console.error(error),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["users"] }),
  });
};

const useCreatePost = (): UseMutationResult<Post, Error, NewPost> => {
  const queryClient = useQueryClient();
  return useMutation<Post, Error, NewPost>({
    mutationFn: async (newPost) => createPost(newPost),
    onError: (error) => console.error(error),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["user", data.authorId] });
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
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

export { useCreateUser, useDeleteUser, useCreatePost };
