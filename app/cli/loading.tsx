export default function CliLoading() {
  return (
    <div
      className="min-h-screen font-mono text-sm md:text-base p-4 md:p-6 animate-pulse"
      style={{ backgroundColor: "#2e3440", color: "#d8dee9" }}
    >
      <div className="max-w-3xl mx-auto space-y-3">
        <div className="h-4 w-48 rounded bg-white/10" />
        <div className="h-4 w-64 rounded bg-white/10" />
        <div className="h-4 w-56 rounded bg-white/10" />
        <div className="h-4 w-72 rounded bg-white/10" />
        <div className="mt-6 flex items-center gap-1">
          <span style={{ color: "#b48ead" }}>visitor@</span>
          <span style={{ color: "#88c0d0" }}>mahtab</span>
          <span>:~$</span>
          <span className="inline-block w-24 h-4 rounded bg-white/20" />
        </div>
      </div>
    </div>
  );
}
