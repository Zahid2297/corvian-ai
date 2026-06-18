import { NextResponse } from "next/server";
import { db } from "@/src/server/db";
import { calendarConnections } from "@/src/server/db/schema";

export async function GET() {
  const connections = await db.select().from(calendarConnections);

  return NextResponse.json({
    connected: connections.length > 0,
  });
}
