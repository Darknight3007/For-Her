import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, X, ChevronLeft, ChevronRight } from "lucide-react";
import { content } from "@/config/content";

const tilts = [-2, 1.5, -1, 2, -2.5, 1, -1.5, 2.5];

export default function PhotoAlbum() {
  const [open, setOpen] = useState(null);

  const resolveSrc = (src) =>
    !src || src.startsWith("{") ? content.photoFallback : src;

  const close = () => setOpen(null);
  const next = () => setOpen((i) => (i + 1) % content.photos.length);
  const prev = () => setOpen((i) => (i - 1 + content.photos.length) % content.photos.length);

  return (
    <section data-testid="photo-album-section" className="relative px-5 sm:px-6 py-16 sm:py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-gold/80 text-xs tracking-[0.4em] uppercase mb-3">
            <Camera className="w-4 h-4" />
            Our Royal Gallery
          </div>
          <h2 className="font-serif-royal text-4xl md:text-6xl text-ivory tracking-tight">
            Duniya ki sabse khoobsurat ladki ki pics hai yaha pe
          </h2>
          <p className="font-script text-3xl md:text-4xl text-gold-gradient mt-1">
            Yk.. ik mehne kaha thi ki delete kiye par pagal thodi na hu ki sbhi krunga.. toh ye hai kuch.. Meri favorite ladki ki meri favorite photos..
          </p>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {content.photos.map((p, i) => (
            <motion.button
              key={i}
              type="button"
              onClick={() => setOpen(i)}
              data-testid={`photo-${i + 1}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: (i % 6) * 0.05 }}
              className="polaroid block w-full mb-6 break-inside-avoid text-left"
              style={{ transform: `rotate(${tilts[i % tilts.length]}deg)` }}
            >
              <img
                src={resolveSrc(p.src)}
                alt={p.caption}
                loading="lazy"
                className="w-full h-auto rounded-sm object-cover"
              />
              <p className="mt-3 font-script text-2xl text-[#2a0a4a] leading-none text-center">
                {p.caption}
              </p>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0B0014]/90 backdrop-blur-md flex items-center justify-center p-6"
            onClick={close}
            data-testid="photo-lightbox"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
              className="relative max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={close}
                data-testid="lightbox-close"
                className="absolute -top-12 right-0 text-ivory/80 hover:text-gold"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="polaroid">
                <img
                  src={resolveSrc(content.photos[open].src)}
                  alt={content.photos[open].caption}
                  className="w-full rounded-sm object-cover max-h-[70vh]"
                />
                <p className="mt-4 font-script text-3xl text-[#2a0a4a] text-center leading-none">
                  {content.photos[open].caption}
                </p>
              </div>
              <button
                onClick={prev}
                data-testid="lightbox-prev"
                className="absolute top-1/2 -left-3 sm:-left-14 -translate-y-1/2 w-10 h-10 rounded-full glass-royal flex items-center justify-center text-gold hover:scale-110 transition"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                data-testid="lightbox-next"
                className="absolute top-1/2 -right-3 sm:-right-14 -translate-y-1/2 w-10 h-10 rounded-full glass-royal flex items-center justify-center text-gold hover:scale-110 transition"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
