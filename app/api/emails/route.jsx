import { NextResponse } from "next/server";
import { db } from "@/src/server/db";
import { emails } from "@/src/server/db/schema";

export async function GET() {
  const data = await db.select().from(emails);

  return NextResponse.json(data);
}
