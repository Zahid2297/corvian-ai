import { db } from "@/src/server/db";
import { emails, events } from "@/src/server/db/schema";

export default async function WorkspaceSection() {
  const emailData = await db.select().from(emails);
  const eventData = await db.select().from(events);

  return (
    <section className="min-h-screen bg-slate-900 text-white p-8">
      <div className="grid grid-cols-2 gap-6">
        {/* Inbox */}

        <div className="rounded-xl border border-slate-700 p-6">
          <h2 className="text-2xl font-bold mb-6">Inbox</h2>

          <div className="space-y-4">
            {emailData.map((email) => (
              <div
                key={email.id}
                className="border border-slate-700 rounded-lg p-4"
              >
                <p className="font-semibold">{email.sender}</p>

                <p>{email.subject}</p>

                <p className="text-sm text-slate-400">{email.snippet}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Calendar */}

        <div className="rounded-xl border border-slate-700 p-6">
          <h2 className="text-2xl font-bold mb-6">Calendar</h2>

          <div className="space-y-4">
            {eventData.map((event) => (
              <div
                key={event.id}
                className="border border-slate-700 rounded-lg p-4"
              >
                <p className="font-semibold">{event.title}</p>

                <p className="text-slate-400">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
