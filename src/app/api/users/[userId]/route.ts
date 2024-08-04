import prisma from "@/lib/db";
import { userWithPostsSchema } from "@/lib/validators";
import { NextRequest, NextResponse } from "next/server";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

async function GET(req: NextRequest) {
  try {
    const userId = req.nextUrl.pathname.split("/").pop();
    if (!userId) throw new Error("User ID is required");
    const rawData: unknown = await prisma.user.findUnique({
      where: { id: userId },
      include: { posts: true },
    });
    const user = userWithPostsSchema.parse(rawData);
    return NextResponse.json(user, { status: 200, headers: corsHeaders });
  } catch (error) {
    console.error(error);
    return NextResponse.json(error, { status: 400, headers: corsHeaders });
  }
}

async function DELETE(req: NextRequest) {
  try {
    const userId = req.nextUrl.pathname.split("/").pop();
    if (!userId) throw new Error("User ID is required");
    console.log("/api/users/[userId]/route.ts/DELETE called id: ", userId);
    const deletedUser = await prisma.user.delete({ where: { id: userId } });
    return NextResponse.json(deletedUser, {
      status: 200,
      headers: corsHeaders,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(error, { status: 400, headers: corsHeaders });
  }
}

export { GET, DELETE };
