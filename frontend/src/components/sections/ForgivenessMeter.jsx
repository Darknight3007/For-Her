import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Gauge, Heart, Infinity as InfinityIcon, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { content } from "@/config/content";

const climbMessages = [
  "Loading guilt protocols...",
  "Polishing every apology to a royal shine...",
  "Distilling sincerity at maximum strength...",
  "Almost worthy of your forgiveness...",
];
const stuckMessage = "Stuck at 99% — needs a queen's touch...";
const freedMessage = "Forgiven beyond measure.";

const parsePercent = (v) => {
  if (typeof v === "number") return Math.min(100, Math.max(0, v));
  if (!v || String(v).startsWith("{")) return 99;
  const n = parseInt(String(v).replace(/[^\d]/g, ""), 10);
  return isNaN(n) ? 99 : Math.min(100, Math.max(0, n));
};

/* ---------------- Floating heart for the I-Love-You meter ---------------- */
const LoveHearts = () => {
  const hearts = useMemo(
    () =>
      Array.from({ length: 10 }).map((_, i) => ({
        id: i,
        left: 8 + Math.random() * 84,
        delay: Math.random() * 3,
        duration: 3.5 + Math.random() * 2.5,
        size: 8 + Math.random() * 8,
      })),
    []
  );
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="absolute bottom-0"
          style={{
            left: `${h.left}%`,
            width: h.size,
            height: h.size,
            animation: `float-up ${h.duration}s linear ${h.delay}s infinite`,
            "--drift": "0px",
          }}
        >
          <svg viewBox="0 0 24 24" fill="rgba(255,255,255,0.9)" width="100%" height="100%">
            <path d="M12 21s-7.5-4.6-9.6-9.2C.8 8.4 2.6 4.8 6 4c2-.5 3.7.7 4.8 2.1l1.2 1.6 1.2-1.6C14.3 4.7 16 3.5 18 4c3.4.8 5.2 4.4 3.6 7.8C19.5 16.4 12 21 12 21z" />
          </svg>
        </span>
      ))}
    </div>
  );
};

/* ---------------- Burst particles when meter is freed ---------------- */
const Burst = () => {
  const dots = useMemo(
    () =>
      Array.from({ length: 18 }).map((_, i) => ({
        id: i,
        angle: (i / 18) * Math.PI * 2,
        distance: 80 + Math.random() * 40,
        delay: Math.random() * 0.1,
      })),
    []
  );
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      {dots.map((d) => (
        <motion.span
          key={d.id}
          initial={{ x: 0, y: 0, opacity: 1, scale: 0.6 }}
          animate={{
            x: Math.cos(d.angle) * d.distance,
            y: Math.sin(d.angle) * d.distance,
            opacity: 0,
            scale: 0.2,
          }}
          transition={{ duration: 1.1, delay: d.delay, ease: "easeOut" }}
          className="absolute w-2 h-2 rounded-full"
          style={{ background: "radial-gradient(circle, #FFF6C0, #FFD700)" }}
        />
      ))}
    </div>
  );
};

export default function ForgivenessMeter() {
  const target = parsePercent(content.forgivenessPercent);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [val, setVal] = useState(0);
  const [stuck, setStuck] = useState(false);
  const [freed, setFreed] = useState(false);
  const [msg, setMsg] = useState(climbMessages[0]);
  const [burst, setBurst] = useState(false);

  // Climb to target with a brief stutter near the end
  useEffect(() => {
    if (!inView) return;
    let cur = 0;
    let stutterAt = target - 1;
    const t = setInterval(() => {
      const step = Math.max(1, Math.round((target - cur) / 12));
      cur = Math.min(target, cur + step);
      setVal(cur);
      const stage = Math.min(climbMessages.length - 1, Math.floor((cur / 100) * climbMessages.length));
      setMsg(climbMessages[stage]);
      if (cur >= target) {
        clearInterval(t);
        setTimeout(() => {
          setStuck(true);
          setMsg(stuckMessage);
        }, 350);
      } else if (cur >= stutterAt && Math.random() < 0.3) {
        cur -= 1;
      }
    }, 70);
    return () => clearInterval(t);
  }, [inView, target]);

  const handleForgive = () => {
    setFreed(true);
    setStuck(false);
    setMsg(freedMessage);
    setBurst(true);
    setTimeout(() => setBurst(false), 1200);
  };

  const displayLabel = freed ? "∞" : `${val}%`;
  const status = freed
    ? "Forgiven beyond measure."
    : stuck
    ? content.forgivenessStatus || "Stuck at the edge of grace..."
    : "Climbing...";

  return (
    <section
      ref={ref}
      data-testid="forgiveness-meter-section"
      className="relative px-5 sm:px-6 py-16 sm:py-20 md:py-28"
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <div className="inline-flex items-center gap-2 text-gold/80 text-xs tracking-[0.4em] uppercase mb-3">
            <Gauge className="w-4 h-4" />
            The Royal Meters
          </div>
          <h2 className="font-serif-royal text-4xl sm:text-5xl md:text-6xl text-ivory tracking-tight">
            How sorry am I?
          </h2>
        </motion.div>

        {/* ---------- FORGIVENESS METER ---------- */}
        <div
          data-testid="forgiveness-meter"
          className="mt-10 sm:mt-12 glass-royal rounded-3xl p-6 sm:p-8 md:p-10 relative overflow-hidden"
        >
          <div className="flex items-end justify-between gap-3 mb-4 text-left">
            <span className="font-script text-2xl sm:text-3xl text-gold-gradient leading-none">
              {msg}
            </span>
            <motion.span
              data-testid="forgiveness-value"
              key={displayLabel}
              initial={{ scale: freed ? 0.4 : 1, opacity: freed ? 0 : 1 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 220, damping: 14 }}
              className={`font-serif-royal ${freed ? "text-6xl sm:text-7xl md:text-8xl" : "text-5xl sm:text-6xl"} text-gold-gradient tabular-nums leading-none`}
            >
              {displayLabel}
            </motion.span>
          </div>

          <motion.div
            animate={stuck ? { x: [0, -3, 3, -2, 2, 0] } : {}}
            transition={stuck ? { duration: 0.6, repeat: Infinity, repeatDelay: 0.8 } : {}}
            className="relative h-5 w-full rounded-full overflow-hidden bg-[rgba(255,215,0,0.08)] border-gold"
          >
            <motion.div
              animate={{ width: freed ? "100%" : `${val}%` }}
              transition={{ duration: freed ? 0.9 : 0.6, ease: freed ? [0.2, 0.8, 0.2, 1] : "easeOut" }}
              className="h-full rounded-full relative animate-glow-pulse"
              style={{
                background: freed
                  ? "linear-gradient(90deg, #6A0DAD 0%, #FFB347 35%, #FFD700 65%, #FFF2A8 100%)"
                  : "linear-gradient(90deg, #4B0082 0%, #6A0DAD 35%, #FFB347 75%, #FFD700 100%)",
              }}
            >
              <span className="absolute inset-0 animate-shimmer" />
            </motion.div>
            {burst && <Burst />}
          </motion.div>

          <div className="mt-5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 text-left">
            <p className="text-lavender/80 text-sm md:text-base">
              Status: <span className="text-gold font-medium">{status}</span>
            </p>

            {!freed ? (
              <Button
                onClick={handleForgive}
                data-testid="forgive-button"
                className="rounded-full bg-gradient-to-r from-[#FFD700] to-[#FFB347] text-[#2a0a4a] hover:brightness-110 shadow-gold px-6 h-11 font-sans-luxe text-xs tracking-[0.25em] uppercase self-start sm:self-auto"
              >
                <Heart className="w-4 h-4 mr-2 fill-current" />
                I Forgive You
              </Button>
            ) : (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 text-gold text-xs tracking-[0.3em] uppercase self-start sm:self-auto"
                data-testid="forgive-confirmed"
              >
                <Sparkles className="w-4 h-4" />
                Forgiven · Beyond · Measure
              </motion.span>
            )}
          </div>
        </div>

        {/* ---------- I LOVE YOU METER (always ∞) ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.2 }}
          data-testid="love-meter"
          className="mt-6 sm:mt-8 rounded-3xl p-6 sm:p-8 md:p-10 relative overflow-hidden border-gold"
          style={{
            background:
              "linear-gradient(135deg, rgba(106,13,173,0.55) 0%, rgba(255,140,160,0.35) 50%, rgba(255,215,0,0.4) 100%)",
            backdropFilter: "blur(16px)",
          }}
        >
          <div className="flex items-end justify-between gap-3 mb-4 text-left">
            <span className="font-script text-2xl sm:text-3xl text-ivory leading-none drop-shadow">
              Mera pyar hai tere liye.
            </span>
            <motion.span
              animate={{ scale: [1, 1.08, 1], rotate: [0, 2, -2, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              className="font-serif-royal text-6xl sm:text-7xl md:text-8xl text-ivory tabular-nums leading-none flex items-center"
              data-testid="love-value"
            >
              <InfinityIcon className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" strokeWidth={1.4} />
            </motion.span>
          </div>

          <div className="relative h-5 w-full rounded-full overflow-hidden bg-[rgba(255,255,255,0.12)] border border-white/30">
            <div
              className="h-full w-full rounded-full relative"
              style={{
                background:
                  "linear-gradient(90deg, #FFFFFF 0%, #FFB6C1 35%, #FFD700 70%, #FFFFFF 100%)",
                backgroundSize: "200% 100%",
                animation: "shimmer 3s linear infinite",
              }}
            >
              <span className="absolute inset-0 animate-shimmer" />
            </div>
            <LoveHearts />
          </div>

          <div className="mt-5 flex items-center justify-between text-left">
            <p className="text-ivory/95 text-sm md:text-base font-sans-luxe">
              Reading: <span className="font-medium text-ivory">always &amp; everywhere</span>
            </p>
            <motion.span
              animate={{ scale: [1, 1.18, 1] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              className="text-pink-200 flex items-center gap-1.5"
            >
              <Heart className="w-5 h-5 fill-current" />
              <Heart className="w-3.5 h-3.5 fill-current opacity-80" />
              <Heart className="w-2.5 h-2.5 fill-current opacity-60" />
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
