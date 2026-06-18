export default function HeroSection() {
  return (
    <section className="h-screen flex items-center justify-center bg-slate-950 text-white">
      <div className="w-full max-w-2xl px-8">
        <input
          placeholder="Ask Corvian..."
          className="w-full bg-transparent border-b border-slate-600 outline-none py-4 text-xl"
        />
      </div>
    </section>
  );
}
