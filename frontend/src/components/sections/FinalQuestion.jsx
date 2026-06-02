import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, HeartCrack } from "lucide-react";
import { content } from "@/config/content";

const MAX_NO = 5;

export default function FinalQuestion({ onYes }) {
  const [noCount, setNoCount] = useState(0);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [popup, setPopup] = useState(null);
  const [escaped, setEscaped] = useState(false);
  const containerRef = useRef(null);

  const triggerEscape = () => {
    if (noCount >= MAX_NO) return;
    setEscaped(true);
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const maxX = Math.max(60, rect.width / 2 - 90);
    const maxY = Math.max(40, rect.height / 2 - 60);
    setNoPos({
      x: (Math.random() - 0.5) * 2 * maxX,
      y: (Math.random() - 0.5) * 2 * maxY,
    });
  };

  const handleNoClick = () => {
    triggerEscape();
    const c = noCount + 1;
    setNoCount(c);
    setPopup(content.noPopups[Math.min(c - 1, content.noPopups.length - 1)]);
  };

  useEffect(() => {
    if (!popup) return;
    const t = setTimeout(() => setPopup(null), 1900);
    return () => clearTimeout(t);
  }, [popup]);

  const yesScale = 1 + Math.min(noCount, MAX_NO) * 0.18;
  const noScale = Math.max(0.35, 1 - noCount * 0.13);
  const hideNo = noCount >= MAX_NO;

  return (
    <section
      data-testid="final-question-section"
      className="relative px-4 sm:px-6 py-20 sm:py-28 md:py-32 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(255,215,0,0.15) 0%, transparent 60%)",
          opacity: 0.5 + noCount * 0.08,
          transition: "opacity 0.6s ease",
        }}
      />

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="mb-8 sm:mb-10"
        >
          <div className="mx-auto w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 rounded-full glass-royal flex items-center justify-center animate-glow-pulse mb-6 sm:mb-8">
            <Heart className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 text-gold fill-[rgba(255,215,0,0.25)]" strokeWidth={1} />
          </div>
          <p className="font-script text-3xl sm:text-4xl md:text-5xl text-gold-gradient leading-none mb-3">
            The question
          </p>
          <h2 className="font-serif-royal text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-[0.95] text-ivory">
            DO YOU FORGIVE ME?
          </h2>
        </motion.div>

        {/* Buttons arena — initially side-by-side. NO becomes absolute after first interaction. */}
        <div
          ref={containerRef}
          className="relative flex items-center justify-center gap-4 sm:gap-8 min-h-[160px] sm:min-h-[200px] mt-2"
        >
          {/* YES */}
          <motion.button
            onClick={onYes}
            data-testid="yes-button"
            animate={{ scale: yesScale }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="relative z-10 rounded-full font-sans-luxe uppercase tracking-[0.25em] sm:tracking-[0.3em] text-sm md:text-base bg-gradient-to-r from-[#FFD700] via-[#FFB347] to-[#FFD700] text-[#2a0a4a] shadow-gold px-7 sm:px-10 md:px-12 py-3.5 sm:py-4 md:py-5 hover:brightness-110"
            style={{
              boxShadow: `0 0 ${20 + noCount * 10}px rgba(255,215,0,${0.35 + noCount * 0.1})`,
              transformOrigin: "center",
            }}
          >
            <Heart className="inline w-4 h-4 mr-2 fill-current" />
            YES
          </motion.button>

          {/* NO */}
          <AnimatePresence>
            {!hideNo && (
              <motion.button
                key="no-btn"
                onMouseEnter={triggerEscape}
                onTouchStart={triggerEscape}
                onClick={handleNoClick}
                data-testid="no-button"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={
                  escaped
                    ? { opacity: 1, x: noPos.x, y: noPos.y, scale: noScale }
                    : { opacity: 1, x: 0, y: 0, scale: 1 }
                }
                exit={{ opacity: 0, scale: 0, transition: { duration: 0.4 } }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className={`${
                  escaped ? "absolute" : "relative"
                } rounded-full font-sans-luxe uppercase tracking-[0.25em] sm:tracking-[0.3em] text-xs md:text-sm bg-[rgba(255,255,255,0.06)] border-gold text-pink-200 px-5 sm:px-6 py-3 sm:py-3.5 hover:bg-[rgba(255,182,193,0.15)]`}
              >
                <HeartCrack className="inline w-4 h-4 mr-2" />
                NO
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {popup && (
            <motion.div
              key={popup}
              initial={{ opacity: 0, y: 10, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.96 }}
              transition={{ duration: 0.35 }}
              data-testid="no-popup"
              className="mt-6 sm:mt-8 inline-block glass-royal rounded-full px-5 sm:px-6 py-2.5 sm:py-3 font-script text-xl sm:text-2xl md:text-3xl text-gold-gradient"
            >
              {popup}
            </motion.div>
          )}
        </AnimatePresence>

        {hideNo && (
          <p className="mt-5 text-lavender/70 text-xs sm:text-sm">
            (There's only one answer left. Press it, my love.)
          </p>
        )}
      </div>
    </section>
  );
}
