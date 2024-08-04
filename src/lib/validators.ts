import { z } from "zod";

const postSchema = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
  published: z.boolean(),
  authorId: z.string(),
  createdAt: z.date(),
});

const userSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  name: z.string(),
  createdAt: z.date(),
});
const userWithPostsSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  name: z.string(),
  createdAt: z.date(),
  posts: z.array(postSchema),
});
const newUserSchema = userSchema.omit({ id: true, createdAt: true });
const userArraySchema = z.array(userSchema);

type User = z.infer<typeof userSchema>;
type UserWithPosts = z.infer<typeof userWithPostsSchema>;
type NewUser = z.infer<typeof newUserSchema>;
type UserArray = z.infer<typeof userArraySchema>;

export {
  userSchema,
  userWithPostsSchema,
  newUserSchema,
  userArraySchema,
  type User,
  type UserWithPosts,
  type NewUser,
  type UserArray,
};
