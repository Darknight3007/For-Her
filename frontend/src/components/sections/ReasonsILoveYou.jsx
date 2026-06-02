import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Star } from "lucide-react";
import { content } from "@/config/content";

export default function ReasonsILoveYou() {
  const [flipped, setFlipped] = useState({});

  const toggle = (i) =>
    setFlipped((m) => ({ ...m, [i]: !m[i] }));

  return (
    <section data-testid="reasons-section" className="relative px-5 sm:px-6 py-16 sm:py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-gold/80 text-xs tracking-[0.4em] uppercase mb-3">
            <Star className="w-4 h-4" />
            Eight Royal Reasons
          </div>
          <h2 className="font-serif-royal text-4xl md:text-6xl text-ivory tracking-tight">
            Why I love you
          </h2>
          <p className="text-lavender/70 text-sm mt-2">Tap each card to turn the page.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-7">
          {content.reasons.map((r, i) => (
            <motion.button
              key={i}
              type="button"
              onClick={() => toggle(i)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.07 }}
              data-testid={`reason-card-${i + 1}`}
              className={`flip-card h-56 md:h-64 ${flipped[i] ? "is-flipped" : ""}`}
            >
              <div className="flip-card-inner">
                <div className="flip-face glass-royal border-gold flex-col gap-3">
                  <span className="font-script text-5xl text-gold-gradient leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Heart className="w-6 h-6 text-gold" />
                  <span className="text-[10px] tracking-[0.3em] uppercase text-lavender/60">
                    Reason
                  </span>
                </div>
                <div className="flip-face flip-back parchment border-gold p-5 text-center">
                  <p className="font-serif-royal italic text-ivory text-base md:text-lg leading-relaxed">
                    “{r}”
                  </p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
