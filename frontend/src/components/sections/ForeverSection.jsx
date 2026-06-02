import { motion } from "framer-motion";
import { Infinity as InfinityIcon } from "lucide-react";
import { content } from "@/config/content";

export default function ForeverSection() {
  const finalMsg =
    !content.finalForeverMessage || content.finalForeverMessage.startsWith("{")
      ? "Wherever the road bends, my hand reaches for yours."
      : content.finalForeverMessage;
  const quote =
    !content.footerQuote || content.footerQuote.startsWith("{")
      ? "And in the quiet kingdom of my heart, you are the only crown."
      : content.footerQuote;

  return (
    <section data-testid="forever-section" className="relative px-5 sm:px-6 py-20 sm:py-28 md:py-32">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.1 }}
        >
          <div className="mx-auto mb-8 w-16 h-16 rounded-full glass-royal flex items-center justify-center animate-glow-pulse">
            <InfinityIcon className="w-7 h-7 text-gold" strokeWidth={1.4} />
          </div>
          <p className="font-script text-5xl md:text-6xl text-gold-gradient leading-none">
            Forever
          </p>
          <h2 className="font-serif-royal text-3xl md:text-5xl mt-4 tracking-tight text-ivory">
            {finalMsg}
          </h2>
          <div className="mt-12 h-px w-32 mx-auto bg-gradient-to-r from-transparent via-gold to-transparent opacity-70" />
          <p className="font-serif-royal italic text-lg md:text-xl text-lavender/85 mt-10 leading-relaxed">
            “{quote}”
          </p>
          <p className="mt-12 text-[10px] tracking-[0.4em] uppercase text-gold/60">
            Sealed with gold &nbsp;•&nbsp; written in stars
          </p>
        </motion.div>
      </div>
    </section>
  );
}
