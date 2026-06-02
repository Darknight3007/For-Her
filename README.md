# The Royal Purple Forgiveness Experience

> A handcrafted digital palace — a single-page romantic apology, memory museum, and celebration of love. Royal purple, gold, lavender and silver. Built to make one person smile, forgive, and feel like royalty.

---

## ✦ Live Tour (sections in order)

1. **Password Gate** — calendar-based date lock (only the right date opens the palace)
2. **Hero** — animated crown, royal glowing frame, sparkles, floating hearts
3. **Love Timer** — years / months / days / hours / minutes / seconds
4. **Apology Story** — 5 staggered scroll-reveal cards
5. **Memory Timeline** — luxury alternating diary pages on a gold thread
6. **Photo Album** — masonry of polaroids with a lightbox + keyboard nav
7. **Love Letter** — parchment + wax seal + handwritten flourish
8. **Reasons I Love You** — 8 flipping cards
9. **Special Moments** — 4 highlight bento cards
10. **Forgiveness Meter** — animated, funny progression
11. **Final Question** — *DO YOU FORGIVE ME?* with YES (grows) and NO (shrinks & runs)
12. **Celebration Screen** — confetti, fireworks, floating roses
13. **Forever Section** — peaceful closing message and quote

---

## ✦ Quick Start

```bash
# from /app
cd frontend
yarn install
yarn start
```

The app boots at the URL in `frontend/.env` (`REACT_APP_BACKEND_URL`).

> The project is React + Tailwind + Framer Motion. No backend writes are required for the experience — the FastAPI service is included only for parity with the platform.

---

## ✦ Folder Structure

```
/app
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.css                         # fonts, theme, animations
│   │   ├── config/
│   │   │   └── content.js                    # 🔑 ALL placeholders live here
│   │   ├── pages/
│   │   │   └── Experience.jsx                # main single-page composer
│   │   └── components/
│   │       ├── PasswordGate.jsx
│   │       ├── LivingBackground.jsx
│   │       └── sections/
│   │           ├── HeroSection.jsx
│   │           ├── LoveTimer.jsx
│   │           ├── ApologyStory.jsx
│   │           ├── MemoryTimeline.jsx
│   │           ├── PhotoAlbum.jsx
│   │           ├── LoveLetter.jsx
│   │           ├── ReasonsILoveYou.jsx
│   │           ├── SpecialMoments.jsx
│   │           ├── ForgivenessMeter.jsx
│   │           ├── FinalQuestion.jsx
│   │           ├── CelebrationScreen.jsx
│   │           └── ForeverSection.jsx
│   └── public/
└── backend/                                  # template fastapi (untouched)
```

> Optional folders you may add if you bundle local assets:
> `frontend/src/assets/{images,music,icons,fonts}` — then import them in `content.js`.

---

## ✦ Personalizing The Experience (the only file you really need)

Open **`frontend/src/config/content.js`**. Every visible string, date, image and emoji-message is here.

### 1. Change recipient name
```js
herName: "Aisha",
```

### 2. Change main message / opening line
```js
mainTitle: "A Letter For Your Heart",
openingMessage: "Built only for you, by the one who's sorry.",
```

### 3. Set the calendar password (entry date)
```js
passwordDate: "2024-02-14", // YYYY-MM-DD
```
> While `passwordDate` still equals the placeholder `{PASSWORD_DATE}`, **any picked date unlocks the site** (preview mode). Once you change it, only the exact date works.

### 4. Set the "Started missing you" date
```js
startDate: "2024-01-01", // YYYY-MM-DD
```

### 5. Apology cards (5 of them)
```js
apologyCards: [
  "I was wrong, and I know it. Please let me earn back the way you smiled at me.",
  "If words could fix this, I'd write them on the moon.",
  // ...
],
```

### 6. Add more memories
Just append entries. Layout auto-flows:
```js
memories: [
  { title: "The first laugh", text: "It started raining and you laughed louder than the storm." },
  { title: "Our quiet morning", text: "You stole my hoodie. I let you. I always will." },
  // add as many as you want
],
```

### 7. Add more album images (unlimited)
```js
photos: [
  { src: "/assets/images/photo1.jpg", caption: "the day we found each other" },
  { src: "https://your-cdn.com/photo2.jpg", caption: "rain & laughter" },
  // append freely
],
```
If a `src` is left as a placeholder like `{IMAGE_1}`, a curated fallback image renders so the layout never breaks.

### 8. Replace background music *(optional)*
This build ships without an audio loop to keep first-load silent (browsers block autoplay). To add it:
- drop your file at `frontend/public/music/royal-theme.mp3`
- add an `<audio>` to `Experience.jsx`:
```jsx
<audio src="/music/royal-theme.mp3" autoPlay loop muted={false} />
```
> Tip: tie audio play to the password unlock click so browsers allow it.

### 9. Customize the love letter (multi-line supported)
```js
loveLetter: `My love, when I close my eyes I see only you.\n\nForgive me — not because I deserve it, but because I will spend forever earning it.`,
```

### 10. Reasons I Love You (8 flip cards)
```js
reasons: [
  "the way you hum when you're focused",
  "the universe lives in your eyes",
  // 8 total
],
```

### 11. Forgiveness meter value & status
```js
forgivenessPercent: 92,
forgivenessStatus: "Almost there...",
```

### 12. YES screen + forever message + footer quote
```js
yesMessage: "Thank you, my queen. You just made forever begin again.",
finalForeverMessage: "Wherever the road bends, my hand reaches for yours.",
footerQuote: "And in the quiet kingdom of my heart, you are the only crown.",
```

---

## ✦ Change Theme Colors

Open `frontend/src/index.css` and edit the `:root` palette tokens:

```css
--rp-primary: #4B0082;     /* royal purple */
--rp-secondary: #6A0DAD;
--rp-gold:    #FFD700;
--rp-lavender:#E6E6FA;
--rp-pink:    #FFB6C1;
--rp-silver:  #C0C0C0;
--rp-ivory:   #FFFFF0;
--rp-bg:      #0B0014;     /* base background */
```

These cascade through every section.

---

## ✦ Customize Animations

- **Living background** (`components/LivingBackground.jsx`) — adjust counts of `sparkles`, `hearts`, `petals` arrays.
- **Keyframes** (`index.css`) — `float-up`, `petal-fall`, `twinkle`, `mist-drift`, `glow-pulse`, `crown-float`, `shimmer`, `confetti-fall`.
- **Reveal motion** (every section) — uses `framer-motion`'s `whileInView`; change `duration` / `delay` to taste.

---

## ✦ Deployment

### GitHub Pages
1. `yarn build`
2. Push `frontend/build/` to a `gh-pages` branch (or use `gh-pages` package).

### Netlify
- New site → connect repo → build command: `cd frontend && yarn install && yarn build` → publish dir: `frontend/build`.

### Vercel
- Import repo → framework preset: **Create React App** → root: `frontend` → build: `yarn build` → output: `build`.

> The included FastAPI backend is optional. If you deploy the frontend standalone, set `REACT_APP_BACKEND_URL` to any value (it's only referenced for platform parity).

---

## ✦ Placeholder Reference Guide

| Placeholder | Where it appears |
|---|---|
| `{PASSWORD_DATE}` | calendar lock |
| `{MAIN_TITLE}` | hero headline |
| `{HER_NAME}` | hero "For ___" |
| `{OPENING_MESSAGE}` | hero subtitle |
| `{START_DATE}` | love timer origin |
| `{SORRY_NOTE_1..5}` | apology cards |
| `{MEMORY_TITLE_1..5}` / `{MEMORY_TEXT_1..5}` | memory timeline |
| `{IMAGE_1..8}` / `{IMAGE_NOTE_1..8}` | photo album |
| `{LOVE_LETTER}` | love letter body |
| `{REASON_1..8}` | flip cards |
| `{MOMENT_1..4}` | special moments |
| `{FORGIVENESS_PERCENT}` / `{FORGIVENESS_STATUS}` | meter |
| `{YES_MESSAGE}` | celebration headline |
| `{FINAL_FOREVER_MESSAGE}` / `{FOOTER_QUOTE}` | forever section |

Until replaced, placeholders render visibly so you always know what's still pending.

---

## ✦ Troubleshooting

- **Calendar won't open?** Make sure `react-day-picker` is installed (`yarn add react-day-picker@8.10.1` if missing).
- **Fonts look generic?** Check the Google Fonts `@import` at the top of `index.css`; corporate firewalls can block fonts.googleapis.com. Mirror via `<link>` if needed.
- **Images broken?** Either use a valid URL or place files under `frontend/public/...` and reference them as `/your-file.jpg`.
- **NO button still clickable on touch?** Mobile auto-fires the `onMouseEnter` handler before tap; press once and it will jump elsewhere — design choice.
- **Audio doesn't autoplay?** Browsers block it. Wire your `audio.play()` to a user gesture (e.g. password unlock click).

---

## ✦ Future Enhancement Ideas

- ✨ Per-section background music swaps
- 💌 A "Write Back" form that emails her response to you
- 🎁 Daily-unlock cards (one new memory revealed per day)
- 🎤 Voice-note from you on each memory card
- 🗺️ A map of the places you've been together (pinned with photos)
- 🪞 A subtle parallax cursor trail of petals

---

Crafted in royal purple. Sealed in gold. Written for one heart.
