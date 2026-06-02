import { useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles, X } from "lucide-react";
import { content } from "@/config/content";

const colors = ["#FFD700", "#FFB347", "#FFB6C1", "#E6E6FA", "#C0C0C0", "#6A0DAD"];

export default function CelebrationScreen({ onClose }) {
  const confetti = useMemo(
    () =>
      Array.from({ length: 90 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 1.4,
        duration: 3 + Math.random() * 3,
        color: colors[i % colors.length],
        size: 6 + Math.random() * 8,
        rotate: Math.random() * 360,
      })),
    []
  );

  const roses = useMemo(
    () =>
      Array.from({ length: 18 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 5 + Math.random() * 4,
        size: 18 + Math.random() * 16,
        drift: (Math.random() - 0.5) * 120,
      })),
    []
  );

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, []);

  const message =
    !content.yesMessage || content.yesMessage.startsWith("{")
      ? "Thank you, my queen. You just made forever begin again."
      : content.yesMessage;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-[60] flex items-center justify-center px-6 py-12"
      style={{
        background:
          "radial-gradient(circle at 50% 40%, rgba(255,215,0,0.18) 0%, rgba(11,0,20,0.96) 60%)",
      }}
      data-testid="celebration-screen"
    >
      {/* Confetti */}
      {confetti.map((c) => (
        <span
          key={`c-${c.id}`}
          className="absolute top-[-5vh]"
          style={{
            left: `${c.left}%`,
            width: `${c.size}px`,
            height: `${c.size * 0.4}px`,
            background: c.color,
            transform: `rotate(${c.rotate}deg)`,
            animation: `confetti-fall ${c.duration}s linear ${c.delay}s infinite`,
            borderRadius: "2px",
          }}
        />
      ))}

      {/* Roses */}
      {roses.map((r) => (
        <span
          key={`r-${r.id}`}
          className="absolute"
          style={{
            left: `${r.left}%`,
            bottom: "-40px",
            width: `${r.size}px`,
            height: `${r.size}px`,
            animation: `float-up ${r.duration}s linear ${r.delay}s infinite`,
            "--drift": `${r.drift}px`,
          }}
        >
          <svg viewBox="0 0 24 24" width="100%" height="100%" fill="#E91E63">
            <path d="M12 2c3.5 1.5 5 4.5 5 7s-1.5 5-5 6c-3.5-1-5-3.5-5-6s1.5-5.5 5-7zM6 12c2 0 4 1.5 4 4s-2 4-4 4-4-1.5-4-4 2-4 4-4zm12 0c2 0 4 1.5 4 4s-2 4-4 4-4-1.5-4-4 2-4 4-4z"/>
          </svg>
        </span>
      ))}

      {/* Fireworks bursts */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={`fw-${i}`}
          className="absolute rounded-full"
          initial={{ scale: 0, opacity: 0.9 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.7 }}
          style={{
            width: 80, height: 80,
            top: `${20 + i * 18}%`,
            left: `${20 + i * 25}%`,
            background: "radial-gradient(circle, rgba(255,215,0,0.6), transparent 70%)",
            filter: "blur(2px)",
          }}
        />
      ))}

      <motion.div
        initial={{ scale: 0.85, y: 30, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
        className="relative z-10 max-w-2xl text-center glass-royal rounded-3xl p-10 md:p-14 shadow-gold"
      >
        <button
          onClick={onClose}
          data-testid="celebration-close"
          className="absolute top-4 right-4 text-ivory/70 hover:text-gold"
          aria-label="Close celebration"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mx-auto w-24 h-24 rounded-full glass-soft flex items-center justify-center mb-6 animate-glow-pulse">
          <Heart className="w-12 h-12 text-gold fill-[rgba(255,215,0,0.35)]" strokeWidth={1} />
        </div>

        <p className="font-script text-5xl md:text-6xl text-gold-gradient leading-none">
          Forever begins
        </p>
        <h2 className="font-serif-royal text-3xl md:text-5xl mt-4 tracking-tight text-ivory">
          {message}
        </h2>
        <div className="mt-8 inline-flex items-center gap-2 text-gold/80 text-xs tracking-[0.4em] uppercase">
          <Sparkles className="w-4 h-4" />
          Crowned in Love
          <Sparkles className="w-4 h-4" />
        </div>
      </motion.div>
    </motion.div>
  );
}
