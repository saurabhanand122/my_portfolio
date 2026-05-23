export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#02030a] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.08),_transparent_30%),radial-gradient(circle_at_80%_10%,_rgba(168,85,247,0.08),_transparent_18%)]" />
      <div className="relative text-center px-6 py-10">
        <div className="mb-6 inline-flex items-center justify-center rounded-full border border-cyan-500/30 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.45em] text-cyan-200 shadow-brand">
          Starting the future
        </div>
        <div className="mb-8 text-5xl font-black uppercase tracking-[0.3em] text-white drop-shadow-[0_0_50px_rgba(56,189,248,0.4)] sm:text-6xl">
          Saurabh
        </div>
        <div className="relative mx-auto h-28 w-28">
          <span className="absolute inset-0 animate-ping rounded-full border border-cyan-400/40" />
          <span className="absolute inset-0 rounded-full border border-cyan-500/60" />
          <span className="absolute inset-0 animate-spin rounded-full border border-t-transparent border-cyan-300/80" />
        </div>
        <p className="mt-8 text-sm uppercase tracking-[0.35em] text-cyan-300/80">
          Loading your futuristic portfolio...
        </p>
      </div>
    </div>
  );
}
