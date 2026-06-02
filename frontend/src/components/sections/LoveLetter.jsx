import { motion } from "framer-motion";
import { ScrollText } from "lucide-react";
import { content } from "@/config/content";

export default function LoveLetter() {
  return (
    <section data-testid="love-letter-section" className="relative px-5 sm:px-6 py-16 sm:py-20 md:py-28">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 text-gold/80 text-xs tracking-[0.4em] uppercase mb-3">
            <ScrollText className="w-4 h-4" />
            Sealed With Wax
          </div>
          <h2 className="font-serif-royal text-4xl md:text-6xl text-ivory tracking-tight">
            A letter, from my hand
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.1, ease: [0.2, 0.8, 0.2, 1] }}
          className="parchment relative rounded-[2rem] p-10 md:p-16 border-gold shadow-gold"
        >
          <div className="absolute inset-3 rounded-[1.5rem] border border-[rgba(255,215,0,0.2)] pointer-events-none" />

          {/* Wax seal */}
          <div
            aria-hidden
            className="absolute -top-8 -right-6 md:-top-10 md:-right-8 w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center font-serif-royal text-2xl text-[#FFD700] shadow-purple animate-glow-pulse"
            style={{
              background:
                "radial-gradient(circle at 35% 30%, #B33A4A 0%, #6E1422 60%, #3A0410 100%)",
              border: "2px solid rgba(255,215,0,0.6)",
            }}
          >
            ♥
          </div>

          <p className="font-script text-4xl md:text-5xl text-gold-gradient leading-none mb-6">
            My dearest love,
          </p>
          <div className="font-serif-royal text-lg md:text-xl text-ivory/90 leading-relaxed whitespace-pre-line italic">
            {content.loveLetter}
          </div>
          <p className="mt-10 font-script text-3xl md:text-4xl text-gold-gradient leading-none text-right">
            Yours, always.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
