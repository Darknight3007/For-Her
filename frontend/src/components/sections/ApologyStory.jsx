import { motion } from "framer-motion";
import { Feather } from "lucide-react";
import { content } from "@/config/content";

export default function ApologyStory() {
  return (
    <section data-testid="apology-section" className="relative px-5 sm:px-6 py-16 sm:py-20 md:py-28">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-gold/80 text-xs tracking-[0.4em] uppercase mb-3">
            <Feather className="w-4 h-4" />
            A Royal Apology
          </div>
          <h2 className="font-serif-royal text-4xl md:text-6xl text-ivory tracking-tight">
            I owe you these words
          </h2>
          <p className="font-script text-3xl md:text-4xl text-gold-gradient mt-1">
            and so much more
          </p>
        </motion.div>

        <div className="relative">
          {/* Center gold line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[rgba(255,215,0,0.5)] to-transparent hidden md:block" />

          {content.apologyCards.map((note, i) => {
            const left = i % 2 === 0;
            return (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 40, x: left ? -30 : 30 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, delay: i * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
                data-testid={`apology-card-${i + 1}`}
                className={`relative md:w-[calc(50%-2rem)] mb-10 md:mb-16 glass-royal rounded-2xl p-7 md:p-9 ${
                  left ? "md:mr-auto" : "md:ml-auto"
                }`}
              >
                <span className="absolute -top-4 left-7 font-script text-2xl text-gold-gradient bg-[#1A0A2E] px-3 rounded">
                  No. {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-serif-royal italic text-lg md:text-xl text-ivory/90 leading-relaxed">
                  “{note}”
                </p>
                <div className="mt-4 h-px w-12 bg-gradient-to-r from-gold to-transparent opacity-70" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
