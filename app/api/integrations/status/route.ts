import { NextResponse } from "next/server";
import { db } from "@/src/server/db";
import { gmailConnections, calendarConnections } from "@/src/server/db/schema";

export async function GET() {
  const gmail = await db.select().from(gmailConnections);
  const calendar = await db.select().from(calendarConnections);

  return NextResponse.json({
    gmailConnected: gmail.length > 0,
    calendarConnected: calendar.length > 0,
  });
}
