import { motion } from "framer-motion";
import { BookHeart } from "lucide-react";
import { content } from "@/config/content";

export default function MemoryTimeline() {
  return (
    <section data-testid="memory-timeline-section" className="relative px-5 sm:px-6 py-16 sm:py-20 md:py-28">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-gold/80 text-xs tracking-[0.4em] uppercase mb-3">
            <BookHeart className="w-4 h-4" />
            Ye chije yaad hai ya nahi....
          </div>
          <h2 className="font-serif-royal text-4xl md:text-6xl text-ivory tracking-tight">
            inko yaad krke aaj bhi dil khush ho jata hai...
          </h2>
        </motion.div>

        <div className="relative pl-10 md:pl-0">
          <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[rgba(255,215,0,0.55)] to-transparent" />
          {content.memories.map((m, i) => {
            const left = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, delay: i * 0.1 }}
                data-testid={`memory-${i + 1}`}
                className={`relative mb-12 md:mb-16 md:w-[calc(50%-2.5rem)] ${
                  left ? "md:mr-auto md:pr-10 md:text-right" : "md:ml-auto md:pl-10"
                }`}
              >
                {/* Node */}
                <span
                  className={`absolute top-3 -left-[34px] md:left-auto md:-right-[42px] ${
                    left ? "md:-right-[42px]" : "md:-left-[42px]"
                  } w-4 h-4 rounded-full bg-[#FFD700] shadow-gold animate-glow-pulse`}
                />
                <div className="parchment rounded-2xl p-7 md:p-8 border-gold relative overflow-hidden">
                  <span className="font-script text-2xl text-gold-gradient block mb-1">
                    Chapter {i + 1}
                  </span>
                  <h3 className="font-serif-royal text-2xl md:text-3xl text-ivory tracking-tight">
                    {m.title}
                  </h3>
                  <p className="font-sans-luxe text-sm md:text-base text-lavender/85 leading-relaxed mt-3">
                    {m.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
