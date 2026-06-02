import { motion } from "framer-motion";
import { Sparkles, Heart } from "lucide-react";
import { content } from "@/config/content";

export default function SpecialMoments() {
  return (
    <section data-testid="moments-section" className="relative px-5 sm:px-6 py-16 sm:py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-gold/80 text-xs tracking-[0.4em] uppercase mb-3">
            <Sparkles className="w-4 h-4" />
            Crown Jewels of Memory
          </div>
          <h2 className="font-serif-royal text-4xl md:text-6xl text-ivory tracking-tight">
            Special moments
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {content.moments.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.08 }}
              data-testid={`moment-card-${i + 1}`}
              className="group relative glass-royal rounded-3xl p-8 md:p-10 overflow-hidden hover:-translate-y-1 transition-transform duration-500"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-30 blur-3xl"
                style={{ background: "radial-gradient(circle, #FFD700, transparent 70%)" }}
              />
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-full glass-soft border-gold flex items-center justify-center group-hover:animate-glow-pulse">
                  <Heart className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <span className="font-script text-2xl text-gold-gradient leading-none">
                    Moment {i + 1}
                  </span>
                  <p className="font-serif-royal italic text-lg md:text-xl text-ivory/90 leading-relaxed mt-2">
                    “{m}”
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
