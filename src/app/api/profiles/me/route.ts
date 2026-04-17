import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import { auth } from "@/lib/auth";
import { Profile } from "@/models/Profile";

export async function POST(req: Request) {
  const session = await auth.api.getSession({ headers: req.headers });

  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();

  await connectDB();

  const profile = await Profile.findOneAndUpdate(
    { authUserId: session.user.id },
    {
      authUserId: session.user.id,
      name: body.name ?? session.user.name ?? "",
      email: body.email ?? session.user.email ?? "",
      plan: body.plan ?? "free",
    },
    { upsert: true, new: true, runValidators: true },
  );

  return NextResponse.json(profile, { status: 200 });
}

export async function GET(req: Request) {
  const session = await auth.api.getSession({ headers: req.headers });

  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await connectDB();

  const profile = await Profile.findOne({ authUserId: session.user.id });

  if (!profile) {
    return NextResponse.json({ error: "Profile not found" }, { status: 404 });
  }

  return NextResponse.json(profile, { status: 200 });
}
