import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
import { newPostSchema, postArraySchema } from "@/lib/validators";

async function GET() {
  console.log("🤡 get posts api called");
  try {
    const rawData: unknown = await prisma.post.findMany({
      orderBy: { createdAt: "desc" },
    });
    const posts = postArraySchema.parse(rawData);
    console.log("🤡 posts from GET route: ", posts);

    return NextResponse.json({ posts }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error }, { status: 400 });
  }
}

async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = newPostSchema.parse({
      title: body.title,
      content: body.content,
      published: body.published,
      authorId: body.authorId,
    });
    const newPost = await prisma.post.create({ data });
    return NextResponse.json({ newPost }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error }, { status: 400 });
  }
}

export { GET, POST };
