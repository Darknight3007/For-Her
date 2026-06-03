import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Hourglass } from "lucide-react";
import { content } from "@/config/content";

function diff(start) {
  const now = new Date();
  let y = now.getFullYear() - start.getFullYear();
  let mo = now.getMonth() - start.getMonth();
  let d = now.getDate() - start.getDate();
  let h = now.getHours() - start.getHours();
  let mi = now.getMinutes() - start.getMinutes();
  let s = now.getSeconds() - start.getSeconds();
  if (s < 0) { s += 60; mi--; }
  if (mi < 0) { mi += 60; h--; }
  if (h < 0) { h += 24; d--; }
  if (d < 0) { mo--; const prev = new Date(now.getFullYear(), now.getMonth(), 0); d += prev.getDate(); }
  if (mo < 0) { mo += 12; y--; }
  return { y, mo, d, h, mi, s };
}

const parseDate = (str) => {
  if (!str || str.startsWith("{")) return new Date();
  const [y, m, d] = str.split("-").map(Number);
  return new Date(y, (m || 1) - 1, d || 1);
};

export default function LoveTimer() {
  const [t, setT] = useState(() => diff(parseDate(content.startDate)));

  useEffect(() => {
    const start = parseDate(content.startDate);
    const id = setInterval(() => setT(diff(start)), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "Years", value: t.y },
    { label: "Months", value: t.mo },
    { label: "Days", value: t.d },
    { label: "Hours", value: t.h },
    { label: "Minutes", value: t.mi },
    { label: "Seconds", value: t.s },
  ];

  return (
    <section
      id="love-timer"
      data-testid="love-timer-section"
      className="relative px-5 sm:px-6 py-16 sm:py-20 md:py-28"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
        >
          <div className="inline-flex items-center gap-2 text-gold/80 text-xs tracking-[0.4em] uppercase mb-4">
            <Hourglass className="w-4 h-4" />
            Eternal Counter
          </div>
          <h2 className="font-serif-royal text-3xl md:text-5xl text-ivory tracking-tight">
            {content.timerTitle}
          </h2>
          <p className="font-script text-3xl md:text-4xl text-gold-gradient mt-2">
            Itna time ho gaya tere bina jeete huye...
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-12 grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-5"
        >
          {units.map((u, idx) => (
            <div
              key={u.label}
              data-testid={`timer-${u.label.toLowerCase()}`}
              className="glass-royal rounded-2xl p-5 md:p-6 flex flex-col items-center group hover:-translate-y-1 transition-transform duration-500"
            >
              <span className="font-serif-royal text-4xl md:text-6xl text-gold-gradient leading-none tabular-nums">
                {String(u.value).padStart(2, "0")}
              </span>
              <span className="mt-2 text-[10px] md:text-xs tracking-[0.3em] uppercase text-lavender/70">
                {u.label}
              </span>
              <div className="mt-3 h-px w-8 bg-gradient-to-r from-transparent via-gold to-transparent opacity-60" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
