import { motion } from "framer-motion";
import { Crown, Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { content } from "@/config/content";
import { sendNotification } from "@/lib/pushover";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: [0.2, 0.8, 0.2, 1], delay },
});

export default function HeroSection({ onContinue }) {
  return (
    <section
      data-testid="hero-section"
      className="relative min-h-[80vh] flex flex-col items-center justify-center px-5 sm:px-6 py-16 sm:py-20 md:py-28 text-center overflow-hidden"
    >
      {/* Royal frame */}
      <div className="absolute inset-4 sm:inset-8 md:inset-12 rounded-[2rem] border-gold opacity-30 pointer-events-none" />

      {/* Floating crown */}
      <motion.div {...fadeUp(0)} className="mb-6 animate-crown">
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full glass-royal flex items-center justify-center animate-glow-pulse">
          <Crown className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-gold" strokeWidth={1.1} />
          <Sparkles className="absolute -top-2 -right-2 w-5 h-5 text-gold animate-twinkle" />
          <Sparkles className="absolute -bottom-1 -left-3 w-4 h-4 text-gold animate-twinkle" style={{ animationDelay: "0.6s" }} />
        </div>
      </motion.div>

      <motion.p {...fadeUp(0.15)} className="font-script text-4xl sm:text-5xl md:text-7xl text-gold-gradient leading-none">
        For {content.herName}
      </motion.p>

      <motion.h1
        {...fadeUp(0.35)}
        className="font-serif-royal text-4xl sm:text-5xl md:text-7xl lg:text-8xl mt-4 tracking-tighter leading-[1.02] text-ivory max-w-5xl"
      >
        {content.mainTitle}
      </motion.h1>

      <motion.p
        {...fadeUp(0.55)}
        className="mt-5 sm:mt-6 max-w-2xl text-sm sm:text-base md:text-lg text-lavender/85 font-sans-luxe leading-relaxed px-2"
      >
        {content.openingMessage}
      </motion.p>

      <motion.div {...fadeUp(0.75)} className="mt-8 sm:mt-10">
        <Button
          onClick={() => {
            sendNotification("Hero Continue");
            onContinue();
          }}
          data-testid="hero-cta-btn"
          className="h-12 sm:h-14 px-8 sm:px-10 rounded-full text-xs sm:text-sm tracking-[0.25em] uppercase bg-gradient-to-r from-[#FFD700] to-[#FFB347] text-[#2a0a4a] hover:brightness-110 shadow-gold font-sans-luxe"
        >
          <Heart className="w-4 h-4 mr-2 fill-current" />
          {content.heroCta}
        </Button>
      </motion.div>
    </section>
  );
}
