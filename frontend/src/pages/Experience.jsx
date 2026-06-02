import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import PasswordGate from "@/components/PasswordGate";
import LivingBackground from "@/components/LivingBackground";
import HeroSection from "@/components/sections/HeroSection";
import LoveTimer from "@/components/sections/LoveTimer";
import ApologyStory from "@/components/sections/ApologyStory";
import MemoryTimeline from "@/components/sections/MemoryTimeline";
import PhotoAlbum from "@/components/sections/PhotoAlbum";
import LoveLetter from "@/components/sections/LoveLetter";
import ReasonsILoveYou from "@/components/sections/ReasonsILoveYou";
import SpecialMoments from "@/components/sections/SpecialMoments";
import ForgivenessMeter from "@/components/sections/ForgivenessMeter";
import FinalQuestion from "@/components/sections/FinalQuestion";
import CelebrationScreen from "@/components/sections/CelebrationScreen";
import ForeverSection from "@/components/sections/ForeverSection";

const STEPS = [
  { key: "hero",     label: "Welcome",          Component: HeroSection },
  { key: "timer",    label: "Our Counter",      Component: LoveTimer },
  { key: "apology",  label: "My Apology",       Component: ApologyStory },
  { key: "memory",   label: "Our Memories",     Component: MemoryTimeline },
  { key: "album",    label: "Photo Album",      Component: PhotoAlbum },
  { key: "letter",   label: "Love Letter",      Component: LoveLetter },
  { key: "reasons",  label: "Reasons",          Component: ReasonsILoveYou },
  { key: "moments",  label: "Special Moments",  Component: SpecialMoments },
  { key: "meter",    label: "Forgiveness Meter",Component: ForgivenessMeter },
  { key: "final",    label: "The Question",     Component: FinalQuestion },
  { key: "forever",  label: "Forever",          Component: ForeverSection },
];

export default function Experience() {
  const [unlocked, setUnlocked] = useState(false);
  const [step, setStep] = useState(0);
  const [celebrating, setCelebrating] = useState(false);
  const stageRef = useRef(null);

  useEffect(() => {
    if (unlocked) document.title = "A Royal Letter — For You";
  }, [unlocked]);

  // Reset scroll on step change (window scroll, works on all viewports)
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      // Some mobile browsers ignore the smooth call; ensure instant fallback.
      requestAnimationFrame(() => window.scrollTo(0, 0));
    }
  }, [step]);

  if (!unlocked) return <PasswordGate onUnlock={() => setUnlocked(true)} />;

  const goNext = () => setStep((s) => Math.min(STEPS.length - 1, s + 1));
  const goBack = () => setStep((s) => Math.max(0, s - 1));

  const current = STEPS[step];
  const Current = current.Component;
  const isFinal = current.key === "final";
  const isForever = current.key === "forever";

  return (
    <div className="relative min-h-screen text-ivory" data-testid="experience-root">
      <LivingBackground />

      {/* Top progress bar */}
      <div
        className="fixed top-0 left-0 right-0 z-40 h-1 bg-[rgba(255,215,0,0.08)]"
        data-testid="progress-bar"
      >
        <motion.div
          className="h-full"
          style={{ background: "linear-gradient(90deg,#6A0DAD,#FFD700)" }}
          animate={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
          transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
        />
      </div>

      {/* Chapter label */}
      <div
        className="fixed top-3 left-1/2 -translate-x-1/2 z-40 text-[10px] sm:text-xs tracking-[0.35em] uppercase text-gold/70"
        data-testid="chapter-label"
      >
        Chapter {step + 1} / {STEPS.length} — <span className="text-ivory/80">{current.label}</span>
      </div>

      {/* Stage */}
      <main
        ref={stageRef}
        className="relative z-10 pb-32 sm:pb-28 pt-10 sm:pt-8"
        data-testid={`stage-${current.key}`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current.key}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          >
            {isFinal ? (
              <Current onYes={() => setCelebrating(true)} />
            ) : (
              <Current onContinue={goNext} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Navigation — fixed bottom, mobile-first (raised above the "Made with Emergent" badge) */}
      {!isForever && (
        <div
          className="fixed bottom-0 left-0 right-0 z-40 px-3 sm:px-6 pb-16 sm:pb-5 pt-2 pointer-events-none"
        >
          <div
            className="pointer-events-auto mx-auto max-w-2xl glass-royal rounded-full px-3 py-2 flex items-center justify-between gap-3"
            data-testid="step-nav"
          >
            <Button
              onClick={goBack}
              disabled={step === 0}
              variant="ghost"
              data-testid="step-back-btn"
              className="rounded-full text-gold hover:bg-[rgba(255,215,0,0.1)] hover:text-gold disabled:opacity-30 px-3 sm:px-5 h-10 sm:h-11"
            >
              <ChevronLeft className="w-4 h-4 sm:mr-1" />
              <span className="hidden sm:inline text-xs tracking-[0.2em] uppercase">Back</span>
            </Button>

            <div className="flex-1 flex items-center justify-center gap-1.5 px-2">
              {STEPS.map((s, i) => (
                <button
                  key={s.key}
                  type="button"
                  aria-label={`Go to ${s.label}`}
                  onClick={() => setStep(i)}
                  data-testid={`step-dot-${i}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === step
                      ? "w-6 bg-gold"
                      : i < step
                      ? "w-1.5 bg-gold/70"
                      : "w-1.5 bg-[rgba(255,255,255,0.18)]"
                  }`}
                />
              ))}
            </div>

            {!isFinal ? (
              <Button
                onClick={goNext}
                data-testid="step-continue-btn"
                className="rounded-full bg-gradient-to-r from-[#FFD700] to-[#FFB347] text-[#2a0a4a] hover:brightness-110 shadow-gold px-4 sm:px-6 h-10 sm:h-11 font-sans-luxe"
              >
                <span className="text-xs tracking-[0.2em] uppercase">Continue</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            ) : (
              <span className="px-4 text-[10px] sm:text-xs tracking-[0.3em] uppercase text-gold/80 flex items-center gap-1">
                <Heart className="w-3 h-3 fill-current" /> Answer
              </span>
            )}
          </div>
        </div>
      )}

      {celebrating && (
        <CelebrationScreen
          onClose={() => {
            setCelebrating(false);
            setStep(STEPS.length - 1);
          }}
        />
      )}
    </div>
  );
}
