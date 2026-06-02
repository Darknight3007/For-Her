import { useMemo } from "react";

/* Living, layered background:
   1) Royal purple gradient   2) Drifting mist     3) Star sparkles
   4) Floating hearts         5) Rose petals       6) Light rays         */
export default function LivingBackground() {
  const sparkles = useMemo(
    () =>
      Array.from({ length: 60 }).map((_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        delay: Math.random() * 3,
        size: 1 + Math.random() * 2.5,
      })),
    []
  );

  const hearts = useMemo(
    () =>
      Array.from({ length: 14 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 14,
        duration: 14 + Math.random() * 10,
        size: 10 + Math.random() * 14,
        drift: (Math.random() - 0.5) * 120,
      })),
    []
  );

  const petals = useMemo(
    () =>
      Array.from({ length: 12 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 18,
        duration: 18 + Math.random() * 14,
        drift: (Math.random() - 0.5) * 200,
        rotate: Math.random() * 360,
      })),
    []
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" data-testid="living-background">
      {/* Layer 1 — base gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 20% 10%, #2D004D 0%, transparent 55%)," +
            "radial-gradient(ellipse at 80% 90%, #4B0082 0%, transparent 55%)," +
            "linear-gradient(180deg, #0B0014 0%, #14002A 50%, #0B0014 100%)",
        }}
      />

      {/* Layer 2 — moving mist */}
      <div className="absolute inset-0 opacity-40 animate-mist"
        style={{
          background:
            "radial-gradient(60% 40% at 30% 30%, rgba(230,230,250,0.18), transparent 60%)," +
            "radial-gradient(50% 35% at 70% 70%, rgba(255,182,193,0.12), transparent 60%)",
        }}
      />

      {/* Layer 7 — light rays */}
      <div className="absolute inset-0 opacity-30 mix-blend-screen"
        style={{
          background:
            "conic-gradient(from 220deg at 50% -10%, transparent 0deg, rgba(255,215,0,0.12) 25deg, transparent 50deg, rgba(255,215,0,0.08) 75deg, transparent 100deg)",
        }}
      />

      {/* Layer 6 — star sparkles */}
      {sparkles.map((s) => (
        <span
          key={`s-${s.id}`}
          className="absolute rounded-full animate-twinkle"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            background: "radial-gradient(circle, #FFF6C0 0%, rgba(255,215,0,0.7) 40%, transparent 70%)",
            boxShadow: "0 0 8px rgba(255,215,0,0.7)",
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}

      {/* Layer 4 — floating hearts */}
      {hearts.map((h) => (
        <span
          key={`h-${h.id}`}
          className="absolute"
          style={{
            left: `${h.left}%`,
            bottom: "-40px",
            width: `${h.size}px`,
            height: `${h.size}px`,
            animation: `float-up ${h.duration}s linear ${h.delay}s infinite`,
            "--drift": `${h.drift}px`,
          }}
        >
          <svg viewBox="0 0 24 24" width="100%" height="100%" fill="rgba(255,182,193,0.85)">
            <path d="M12 21s-7.5-4.6-9.6-9.2C.8 8.4 2.6 4.8 6 4c2-.5 3.7.7 4.8 2.1l1.2 1.6 1.2-1.6C14.3 4.7 16 3.5 18 4c3.4.8 5.2 4.4 3.6 7.8C19.5 16.4 12 21 12 21z" />
          </svg>
        </span>
      ))}

      {/* Layer 5 — rose petals */}
      {petals.map((p) => (
        <span
          key={`p-${p.id}`}
          className="absolute"
          style={{
            left: `${p.left}%`,
            top: "-40px",
            width: "14px",
            height: "20px",
            animation: `petal-fall ${p.duration}s linear ${p.delay}s infinite`,
            "--drift": `${p.drift}px`,
            transform: `rotate(${p.rotate}deg)`,
          }}
        >
          <svg viewBox="0 0 24 32" width="100%" height="100%" fill="rgba(255,140,160,0.7)">
            <path d="M12 0c8 8 12 16 8 24-3 6-12 6-15 1-3-6 1-16 7-25z" />
          </svg>
        </span>
      ))}

      {/* Soft vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, transparent 50%, rgba(0,0,0,0.55) 100%)",
        }}
      />
    </div>
  );
}
