import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { createUser, deleteUser } from "./mutations";
import type { NewUser, User } from "@/lib/validators";

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

export { useCreateUser, useDeleteUser };
