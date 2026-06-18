import { db } from "@/src/server/db";
import {
  emails,
  events,
  gmailConnections,
  calendarConnections,
} from "@/src/server/db/schema";

export default async function DashboardPage() {
  const inboxItems = await db.select().from(emails);

  const calendarItems = await db.select().from(events);

  const gmail = await db.select().from(gmailConnections);

  const calendar = await db.select().from(calendarConnections);

  const gmailConnected = gmail.length > 0;
  const calendarConnected = calendar.length > 0;

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="h-screen flex items-center justify-center">
        <div className="w-[500px]">
          <input
            placeholder="Ask Corvian..."
            className="w-full bg-transparent border-b border-gray-500 p-3 outline-none"
          />
        </div>
      </section>

      {!gmailConnected || !calendarConnected ? (
        <section className="grid md:grid-cols-2 gap-6 p-10">
          <div className="border rounded-xl p-10">
            <h2 className="text-2xl font-bold mb-3">
              Gmail Connection Required
            </h2>

            <a
              href="/api/gmail/connect"
              className="bg-orange-500 px-4 py-2 rounded"
            >
              Connect Gmail
            </a>
          </div>

          <div className="border rounded-xl p-10">
            <h2 className="text-2xl font-bold mb-3">
              Calendar Connection Required
            </h2>

            <a
              href="/api/calendar/connect"
              className="bg-blue-500 px-4 py-2 rounded"
            >
              Connect Calendar
            </a>
          </div>
        </section>
      ) : (
        <section className="grid md:grid-cols-2 gap-6 p-10">
          <div className="border rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4">Inbox</h2>

            {inboxItems.map((email) => (
              <div key={email.id} className="mb-4 border-b pb-3">
                <h3>{email.subject}</h3>
                <p>{email.sender}</p>
                <p>{email.snippet}</p>
              </div>
            ))}
          </div>

          <div className="border rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4">Calendar</h2>

            {calendarItems.map((event) => (
              <div key={event.id} className="mb-4 border-b pb-3">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
