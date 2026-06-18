import { NextResponse } from "next/server";
import { db } from "@/src/server/db";
import { gmailConnections } from "@/src/server/db/schema";

export async function GET() {
  const connections = await db.select().from(gmailConnections);

  return NextResponse.json({
    connected: connections.length > 0,
  });
}
