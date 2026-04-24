export default function BackgroundGlow() {
  return (
    <div
      className="pointer-events-none fixed inset-0 overflow-hidden"
      style={{ zIndex: 0 }}
    >
      {/* Deep base */}
      <div className="absolute inset-0 bg-bg-base" />

      {/* Main glow — centered top, covers the full viewport width */}
      <div className="absolute -top-[40vh] left-1/2 h-[160vh] w-[200vh] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(76,139,255,0.30)_0%,_rgba(76,139,255,0.15)_30%,_rgba(76,139,255,0.05)_55%,_transparent_80%)] blur-3xl animate-pulse-glow" />

      {/* Top intensity */}
      <div className="absolute -top-[60vh] left-1/2 h-[120vh] w-[140vh] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(76,139,255,0.22)_0%,_rgba(76,139,255,0.08)_45%,_transparent_75%)] blur-3xl" />

      {/* Side accents */}
      <div className="absolute top-1/3 -left-40 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,_rgba(42,92,255,0.14),_transparent_70%)] blur-3xl" />
      <div className="absolute top-1/2 -right-40 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,_rgba(42,92,255,0.12),_transparent_70%)] blur-3xl" />

      {/* Noise */}
      <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay bg-noise" />
    </div>
  );
}
