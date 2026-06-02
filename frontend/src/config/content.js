/* ===========================================================================
   THE ROYAL PURPLE FORGIVENESS EXPERIENCE — Content Configuration
   ---------------------------------------------------------------------------
   This is the ONLY file you need to edit to personalize the entire site.

   HOW TO REPLACE:
     1. Find the field you want to change (e.g. `herName`).
     2. Edit the value on the right.
     3. Save — the website hot-reloads instantly.

   TIP: Keep placeholder strings exactly as `{LIKE_THIS}` until you replace
   them — they render visibly so you always know what's still pending.
=========================================================================== */

export const content = {
  /* -------------------------- PASSWORD GATE -------------------------- */
  // The visitor must pick this exact date from the calendar to enter.
  // Format: YYYY-MM-DD
  passwordDate: "2007-01-05",
  passwordHint:
    "Choose the day our story truly began. Only Hemu will know.",

  /* ------------------------------ HERO ------------------------------ */
  mainTitle: "An Apology, In Royal Ink",
  herName: "Hemu",
  openingMessage:
    "Built only for you, my Hemu — every pixel, every pause, every plea. Walk slowly. I have a kingdom of words waiting for you.",
  heroCta: "Begin Our Journey",

  /* --------------------------- LOVE TIMER --------------------------- */
  startDate: "2026-04-22",
  timerTitle: "Time Since I Started Missing You",

  /* -------------------------- APOLOGY STORY ------------------------- */
  apologyCards: [
    "If silence had a sound, Hemu, mine would be the long howl of regret. I'm sorry — for the words I said, and worse, the ones I should have.",
    "I built small castles out of my pride and forgot you were the whole kingdom. Forgive my forgetting. Never my loving you.",
    "I'm not asking for innocence. I'm asking for one more sunrise — one I get to begin again at the edge of your hand.",
    "Every hour without your laughter is a tax I cannot afford. Let me earn back even the smallest whisper of your peace.",
    "I'm sorry the way only the wholly-in-love can be sorry. Loudly. Quietly. Carefully. Forever.",
  ],

  /* ------------------------- MEMORY TIMELINE ------------------------ */
  memories: [
    {
      title: "The First Hello",
      text:
        "The world held its breath when you first said my name, Hemu. So did I — and I'm not sure I ever quite gave that breath back.",
    },
    {
      title: "Rain & Reckoning",
      text:
        "A sudden storm caught us with nowhere to run. You laughed louder than the thunder, and I understood: you are the weather of my life.",
    },
    {
      title: "Midnight Calls",
      text:
        "Your voice through static at 2 a.m. — half-awake, fully home. Even the moon leaned closer just to eavesdrop on us.",
    },
    {
      title: "Our Quiet Sunday",
      text:
        "You stole my hoodie. I let you. I let you take everything that day, including the last whole part of me — and never asked for any of it back.",
    },
    {
      title: "The Promise",
      text:
        "Under a sky with no witnesses, we promised forever to each other. The stars heard. They've been quietly quoting us ever since.",
    },
  ],

  /* --------------------------- PHOTO ALBUM -------------------------- */
  // Replace `src` with your own photo URL or a local path under /public.
  // While left as {IMAGE_X}, a curated placeholder image renders in its place.
  photos: [
    { src: "{IMAGE_1}", caption: "the first picture I never wanted to delete" },
    { src: "{IMAGE_2}", caption: "this is what you do to a sunset" },
    { src: "{IMAGE_3}", caption: "halfway through laughing — exactly how I love you" },
    { src: "{IMAGE_4}", caption: "rain, ramen, and you" },
    { src: "{IMAGE_5}", caption: "the one I keep coming back to" },
    { src: "{IMAGE_6}", caption: "you, mid-twirl, mid-magic" },
    { src: "{IMAGE_7}", caption: "a quiet morning that owns me" },
    { src: "{IMAGE_8}", caption: "my favorite mistake-free day" },
  ],
  photoFallback:
    "https://images.unsplash.com/photo-1518709779341-56cf4535e94b?auto=format&fit=crop&w=900&q=80",

  /* ---------------------------- LOVE LETTER ------------------------- */
  loveLetter: `If grief had a vocabulary, Hemu, I'd write you an entire language and still owe you a thousand more words.

I was wrong. Not in big, cinematic ways — but in the small, daily ways that quietly wear a heart thin. I forgot to listen the way I once memorized your voice. I argued where I should have softened. I held the wrong things too tightly, and you — somehow — too loosely.

But the truth I'll repeat until the stars grow bored of hearing it is this: you are the brightest thing that has ever happened to me. You make ordinary days feel sacred. You laugh, and entire rooms join you. You exist, and the world tilts a little kinder.

So I'm here, on this digital balcony I built only for you, asking for one more chance. Not because I deserve it — I don't. But because I will spend the rest of my life learning to be worthy of the way you love.

Forgive me — not with grand declarations, but with the smallest, softest yes you can manage. The rest, I'll earn. Sunrise by sunrise.`,

  /* ------------------------ REASONS I LOVE YOU ---------------------- */
  reasons: [
    "the way you hum without realizing — like the universe is leaking through you",
    "your laugh is a small revolution I happily lose to every time",
    "you turn ordinary moments into the kind I'd write home about — if you weren't home",
    "you remember the tiny things, and somehow make them feel monumental",
    "you are kind in a way the world hasn't earned — and you keep being kind anyway",
    "your eyes — entire constellations, no telescope required",
    "you make me braver and somehow softer at the same time",
    "I love you in past, present, and grammatically impossible tenses",
  ],

  /* -------------------------- SPECIAL MOMENTS ----------------------- */
  moments: [
    "The first time you reached for my hand and didn't let go for hours. I haven't been quite the same person since.",
    "Dancing barefoot in the kitchen at midnight — a kingdom no one knew existed but us.",
    "The day you cried laughing, and I learned the sound by heart before you ever made it again.",
    "Forehead to forehead, no words, no clock. Just you, breathing me back into a better man.",
  ],

  /* ------------------------- FORGIVENESS METER ---------------------- */
  // The meter intentionally gets stuck at 99 and waits for the
  // "I Forgive You" button — which sends it straight to infinity.
  forgivenessPercent: 99,
  forgivenessStatus: "Stuck at the edge of grace — only Hemu can free it.",

  /* --------------------------- FINAL QUESTION ----------------------- */
  noPopups: [
    "Are you sure, my Hemu? 🥺",
    "Really, really sure? ❤️",
    "I'll wait forever if I have to...",
    "Your smile is worth trying again.",
    "Your heart already knows the answer.",
  ],

  /* ----------------------------- YES SCREEN ------------------------- */
  yesMessage:
    "Thank you, my Hemu. You just gave forever its second chance — and made me the luckiest soul in any kingdom.",

  /* --------------------------- FOREVER SECTION ---------------------- */
  finalForeverMessage:
    "Wherever you walk, my Hemu, my hand reaches for yours. Every road. Every weather. Every forever.",
  footerQuote:
    "And in the quiet kingdom of my heart, Hemu, you are the only crown — and the only home.",
};
