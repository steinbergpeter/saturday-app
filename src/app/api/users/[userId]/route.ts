import prisma from "@/lib/db";
import { userWithPostsSchema } from "@/lib/validators";
import { NextRequest, NextResponse } from "next/server";

async function GET(req: NextRequest) {
  try {
    const userId = req.nextUrl.pathname.split("/").pop();
    if (!userId) throw new Error("User ID is required");
    const rawData: unknown = await prisma.user.findUnique({
      where: { id: userId },
      include: { posts: true },
    });
    const user = userWithPostsSchema.parse(rawData);
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(error, { status: 400 });
  }
}

async function DELETE(req: NextRequest) {
  try {
    const userId = req.nextUrl.pathname.split("/").pop();
    if (!userId) throw new Error("User ID is required");
    const deletedUser = prisma.user.delete({ where: { id: userId } });
    return NextResponse.json(deletedUser, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(error, { status: 400 });
  }
}

export { GET, DELETE };
