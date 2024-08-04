import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
import { newUserSchema, userArraySchema } from "@/lib/validators";

async function GET() {
  try {
    const rawData: unknown = await prisma.user.findMany();
    const users = userArraySchema.parse(rawData);
    return NextResponse.json({ users }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error }, { status: 400 });
  }
}

async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = newUserSchema.parse({
      email: body.email,
      name: body.name,
    });
    const newUser = await prisma.user.create({ data });
    return NextResponse.json({ newUser }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error }, { status: 400 });
  }
}

export { GET, POST };
