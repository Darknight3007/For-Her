import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Crown, KeyRound, CalendarHeart, Lock } from "lucide-react";
import { toast } from "sonner";
import LivingBackground from "@/components/LivingBackground";
import { content } from "@/config/content";

const pad = (n) => String(n).padStart(2, "0");
const fmt = (d) => (d ? `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}` : "");

const parseTyped = ({ day, month, year }) => {
  const d = parseInt(day, 10);
  const m = parseInt(month, 10);
  const y = parseInt(year, 10);
  if (!d || !m || !y) return null;
  if (m < 1 || m > 12 || d < 1 || d > 31 || y < 1900 || y > 2100) return null;
  const dt = new Date(y, m - 1, d);
  if (dt.getFullYear() !== y || dt.getMonth() !== m - 1 || dt.getDate() !== d) return null;
  return dt;
};

export default function PasswordGate({ onUnlock }) {
  const [selected, setSelected] = useState(null);
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [shake, setShake] = useState(false);
  const [open, setOpen] = useState(false);

  const monthRef = useRef(null);
  const yearRef = useRef(null);

  // When user picks via calendar, sync the typed fields
  useEffect(() => {
    if (selected) {
      setDay(pad(selected.getDate()));
      setMonth(pad(selected.getMonth() + 1));
      setYear(String(selected.getFullYear()));
    }
  }, [selected]);

  // When user types, sync `selected`
  useEffect(() => {
    const dt = parseTyped({ day, month, year });
    setSelected(dt);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [day, month, year]);

  const handleUnlock = () => {
    const typedDate = parseTyped({ day, month, year }) || selected;
    if (!typedDate) {
      toast.error("Enter a complete date (day · month · year).");
      return;
    }
    const picked = fmt(typedDate);
    if (picked === content.passwordDate || content.passwordDate === "{PASSWORD_DATE}") {
      toast.success("The gates of the palace open for you...");
      setTimeout(() => onUnlock(), 600);
      return;
    }
    setAttempts((a) => a + 1);
    setShake(true);
    setTimeout(() => setShake(false), 500);
    toast.error("That's not the day. Try again, slowly. Remember us.");
  };

  const onKeyDownSubmit = (e) => {
    if (e.key === "Enter") handleUnlock();
  };

  // Auto-advance focus while typing
  const handleDayChange = (e) => {
    const v = e.target.value.replace(/\D/g, "").slice(0, 2);
    setDay(v);
    if (v.length === 2) monthRef.current?.focus();
  };
  const handleMonthChange = (e) => {
    const v = e.target.value.replace(/\D/g, "").slice(0, 2);
    setMonth(v);
    if (v.length === 2) yearRef.current?.focus();
  };
  const handleYearChange = (e) => {
    const v = e.target.value.replace(/\D/g, "").slice(0, 4);
    setYear(v);
  };

  const inputBase =
    "bg-[rgba(11,0,20,0.6)] border border-[rgba(255,215,0,0.35)] focus:border-[#FFD700] focus:outline-none rounded-xl text-ivory font-serif-royal text-2xl md:text-3xl text-center tabular-nums placeholder:text-ivory/30 transition";

  return (
    <div
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-12"
      data-testid="password-gate"
    >
      <LivingBackground />

      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
        className={`relative z-10 w-full max-w-xl glass-royal rounded-3xl p-7 sm:p-10 md:p-12 ${
          shake ? "animate-pulse" : ""
        }`}
        style={shake ? { animation: "twinkle 0.35s ease 2" } : undefined}
      >
        <div className="flex justify-center -mt-20 mb-2">
          <div className="w-20 h-20 rounded-full glass-royal flex items-center justify-center animate-glow-pulse">
            <Crown className="w-10 h-10 text-gold" strokeWidth={1.2} />
          </div>
        </div>

        <p className="text-center font-script text-4xl md:text-5xl text-gold-gradient leading-none">
          Welcome
        </p>
        <h1 className="font-serif-royal text-center text-2xl sm:text-3xl md:text-4xl mt-3 mb-4 text-ivory tracking-tight">
          The Royal Gate of Memories
        </h1>
        <p className="text-center text-lavender/80 text-xs sm:text-sm md:text-base max-w-md mx-auto leading-relaxed">
          {content.passwordHint}
        </p>

        {/* ---------- Typed date input ---------- */}
        <div className="mt-8">
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <div className="flex-1">
              <label className="block text-[10px] tracking-[0.3em] uppercase text-gold/70 text-center mb-1.5">
                Day
              </label>
              <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="DD"
                value={day}
                onChange={handleDayChange}
                onKeyDown={onKeyDownSubmit}
                maxLength={2}
                data-testid="password-day-input"
                className={`${inputBase} w-full h-14`}
                aria-label="Day"
              />
            </div>
            <span className="font-serif-royal text-3xl text-gold/60 mt-5">/</span>
            <div className="flex-1">
              <label className="block text-[10px] tracking-[0.3em] uppercase text-gold/70 text-center mb-1.5">
                Month
              </label>
              <input
                ref={monthRef}
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="MM"
                value={month}
                onChange={handleMonthChange}
                onKeyDown={onKeyDownSubmit}
                maxLength={2}
                data-testid="password-month-input"
                className={`${inputBase} w-full h-14`}
                aria-label="Month"
              />
            </div>
            <span className="font-serif-royal text-3xl text-gold/60 mt-5">/</span>
            <div className="flex-[1.4]">
              <label className="block text-[10px] tracking-[0.3em] uppercase text-gold/70 text-center mb-1.5">
                Year
              </label>
              <input
                ref={yearRef}
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="YYYY"
                value={year}
                onChange={handleYearChange}
                onKeyDown={onKeyDownSubmit}
                maxLength={4}
                data-testid="password-year-input"
                className={`${inputBase} w-full h-14`}
                aria-label="Year"
              />
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-lavender/60">
            <span>or</span>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <button
                  type="button"
                  data-testid="password-date-trigger"
                  className="inline-flex items-center gap-1.5 text-gold/90 hover:text-gold underline-offset-4 hover:underline transition"
                >
                  <CalendarHeart className="w-3.5 h-3.5" />
                  pick from calendar
                </button>
              </PopoverTrigger>
              <PopoverContent
                className="p-0 border-gold bg-[#1A0A2E] text-ivory rounded-2xl shadow-purple w-auto"
                align="center"
                sideOffset={8}
              >
                <Calendar
                  mode="single"
                  selected={selected}
                  onSelect={(d) => {
                    setSelected(d);
                    if (d) setOpen(false);
                  }}
                  initialFocus
                  captionLayout="dropdown-buttons"
                  fromYear={1970}
                  toYear={new Date().getFullYear() + 1}
                  defaultMonth={selected || new Date(2000, 0)}
                  data-testid="password-calendar"
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div className="mt-7 flex flex-col items-center gap-3">
          <Button
            onClick={handleUnlock}
            data-testid="password-unlock-btn"
            className="h-12 px-8 rounded-full font-sans-luxe tracking-wider uppercase text-sm bg-gradient-to-r from-[#FFD700] to-[#FFB347] text-[#2a0a4a] hover:brightness-110 shadow-gold"
          >
            <KeyRound className="w-4 h-4 mr-2" />
            Unlock the Palace
          </Button>

          {attempts > 0 && (
            <AnimatePresence>
              <motion.p
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-pink-200/70 text-xs flex items-center gap-2"
                data-testid="password-attempts"
              >
                <Lock className="w-3 h-3" />
                {attempts === 1
                  ? "Hint: it's the day we'll never forget."
                  : `Tries: ${attempts}`}
              </motion.p>
            </AnimatePresence>
          )}
        </div>

        <p className="mt-8 text-center text-[10px] tracking-[0.3em] uppercase text-gold/60">
          Made With Love — Sealed With Gold
        </p>
      </motion.div>
    </div>
  );
}
