# Royal Purple Forgiveness Experience — PRD

**Created:** 2026-02 — initial build  
**Status:** MVP complete, placeholder-driven, ready to personalize.

## Original Problem Statement
A luxury, single-page romantic forgiveness experience themed Royal Purple + Gold. Must feel like a magical journey, a royal love letter, a memory museum, a celebration of love and a playful interactive moment. Includes calendar-based password gate, hero, love timer, apology cards, memory timeline, photo album, love letter, reasons, special moments, forgiveness meter, the YES/NO "do you forgive me?" interaction, celebration screen, forever section. Easy to personalize — placeholders + clear instructions.

## User Personas
- **Sender (owner of repo):** wants to surprise their partner; needs zero-friction personalization (one config file).
- **Recipient (the one being apologized to):** lands on the password gate, picks the meaningful date, then walks emotionally through the experience to YES.

## Core Requirements (static)
- Royal Purple #4B0082 + Gold #FFD700 + lavender/pink/ivory.
- Single-page React app, fully responsive, accessible focus styles.
- Calendar date password lock (react-day-picker via shadcn `<Calendar/>`).
- Living animated background (gradient, mist, sparkles, hearts, petals, light rays).
- All 13 sections per spec, each with `data-testid` attributes.
- Placeholders visible until replaced; everything centralized in `/app/frontend/src/config/content.js`.
- README.md with full personalization + deployment instructions.

## What's Been Implemented (2026-02)
- ✅ Password gate with calendar popover, attempts counter, gold-key unlock, preview-mode bypass while `{PASSWORD_DATE}` is unchanged.
- ✅ Hero: floating crown, sparkles, gold gradient text, royal frame.
- ✅ Love Timer: years/months/days/hours/minutes/seconds, 1s tick.
- ✅ Apology Story: 5 staggered alternating cards on gold thread.
- ✅ Memory Timeline: alternating "diary pages" on parchment with glowing nodes.
- ✅ Photo Album: tilted polaroid masonry + lightbox (prev/next/close).
- ✅ Love Letter: parchment, wax-seal ornament, hand-script flourishes.
- ✅ Reasons I Love You: 8 flip cards (front number, back reason).
- ✅ Special Moments: 4 bento cards with hover glow.
- ✅ Forgiveness Meter: in-view scrubbing fill, shimmer, funny stage messages.
- ✅ Final Question: "DO YOU FORGIVE ME?" — YES grows, NO shrinks & runs, 5 cumulative popups, hides NO after 5th try.
- ✅ Celebration Screen: confetti, rose petals, fireworks bursts, gold message card.
- ✅ Forever Section: peaceful closing with quote.
- ✅ Living Background: gradient + mist + light rays + 60 sparkles + 14 hearts + 12 petals.
- ✅ README with placeholder reference, deploy, theme & customization guides.

## Prioritized Backlog
**P1**
- Optional ambient music (autoplay gated on unlock click).
- Image preloading for above-the-fold polaroids.

**P2**
- Per-section background score swaps.
- "Write back" reply form (requires backend).
- Daily-unlock reveal (one new memory per day).
- Voice notes per memory.

## Next Tasks
- Owner replaces placeholders in `content.js` and (optionally) drops photos under `frontend/public/photos/`.
- Owner sets `passwordDate` to the meaningful date.
- (Optional) Add audio file at `frontend/public/music/royal-theme.mp3` and wire to unlock click.
