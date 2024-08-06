import prisma from "@/lib/db";
import { userWithPostsSchema, userSchema } from "@/lib/validators";
import { NextRequest, NextResponse } from "next/server";

type Props = {
  req: NextRequest;
  params: {
    userId: string;
  };
};

async function GET(_req: NextRequest, { params: { userId } }: Props) {
  try {
    const rawData: unknown = await prisma.user.findUnique({
      where: { id: userId },
      include: { posts: { orderBy: { createdAt: "desc" } } },
    });
    const user = userWithPostsSchema.parse(rawData);
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(error, { status: 400 });
  }
}

async function DELETE(_req: NextRequest, { params: { userId } }: Props) {
  try {
    const rawDeletedUser: unknown = await prisma.user.delete({
      where: { id: userId },
    });
    const deletedUser = userSchema.parse(rawDeletedUser);
    return NextResponse.json(deletedUser, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(error, { status: 400 });
  }
}

export { GET, DELETE };
