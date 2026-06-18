import { NextResponse } from "next/server";
import { db } from "@/src/server/db";
import { events } from "@/src/server/db/schema";

export async function GET() {
  const data = await db.select().from(events);

  return NextResponse.json(data);
}
