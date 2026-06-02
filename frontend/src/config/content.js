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
    "Well, Madam ji.. Ye date toh aapko pata hi hai.. choose kr and aage badhe (hint: Bday)",

  /* ------------------------------ HERO ------------------------------ */
  mainTitle: "Meri taraf se ek chota sa surprise, madam ji",
  herName: "Miss Hemavati Parit",
  openingMessage:
    "Ik mere se tu naraz hai abhi bhi.. ig isliye meh sharaminda hu thoda sa, but yk isliye mehne ya banaya hai.",
  heroCta: "Aja, ek baar dekkle",

  /* --------------------------- LOVE TIMER --------------------------- */
  startDate: "2026-04-22",
  timerTitle: "Humne last baat ki thi... i mean, tbh. Baat nhi thi fir bhi. Teri aawaz sune ko itna time ho gya. Yk I miss you, Hemu.",

  /* -------------------------- APOLOGY STORY ------------------------- */
  apologyCards: [
    "Ik hemu mehne bahut galat kia. Mujhe nhi batana chahiye tha, but I did. I was wrong, and I'm sorry. Meh sachme maafi chahta hu, Hemu.",
    "Hemu, janta hu meri aadato ne tujhe and humare relationship ko hurt kia, i am sorry. i am really sorry. ",
    "Yk, agr tu mujhpe trust nhi krti, toh meh samajh sakta hu. I broke that trust, and I'm sorry. Agr lage toh zindagi bhar ke liye trust earn krne ki koshish krunga, Hemu.",
    "Tere bina reh rha hu na. Maa kasam zindagi chudi padi hai lag rha hai. I miss you so much, Hemu.",
    "i mean tbh, mujhe nhi pata ki ye bhi kaam aayega ya nhi, but yk aajtak jo bhi skills sikhe hai mehne..\n ig aaj unhe meh tere liye use krne ki koshish krunga, toh.. ig lets seee.",
  ],

  /* ------------------------- MEMORY TIMELINE ------------------------ */
  memories: [
    {
      title: "The Princess treatment 😁",
      text:
        "Yk, abhi bhi yaad hai jbb kisi madam ji ne mujhe kaha tha ki 'Goutam mujhe princess treatment chahiye' kya time tha vo.  ^_^",
    },
    {
      title: "Papa khade hai",
      text:
        "I mean tbh, 2nd year ke exam ke time jbb tujse milne aaya tha.. honeslty gand phati thi meri. like kitna casually chl rhe the, himmat krke thooda romantic hone ka socha ek dum se bol padi, 'papa khade hai'. Obviosuly yaarrrr fategi na... par tu jo hass rhi tha na tbb, Bhut hi zyada cute lag rhi thi yk.",
    },
    {
      title: "The 'Talks'",
      text:
        "Aur jo hmari baate thi.. i mnean maana thoda freaky ho jata tha meh but yk tu thi isliye. likhne ka mann toh bahut hai but i'd like keep it thoda sa family friendly. IDK tujhe yaad hai ki nhi but gaon ke piche vale khet... ^_~",
    },
    {
      title: "Tera 'LOYAL' BF",
      text:
        "han.. tera vo loyal boyfriend, maa kasam sab set tha, tera hath mere hath ke uper tha.. ek second aur chahiye tha bss. but fir tera boyfriend aagya sare scene ki maa behen krne. aaj bhi jab yaad krta hu toh rona aata hai ┗( T﹏T )┛",
    },
    {
      title: "I Love You",
      text:
        "Hemu, baatei kehene ko mere pas bhut hai. Bhut sari chije hai jo yaha pr meh daal skta hu, but vo humari chije hai jo sirf humari hi rehniu chahiye yk.. just know I Love you meri baby girl. ",
    },
  ],

  /* --------------------------- PHOTO ALBUM -------------------------- */
  // Replace `src` with your own photo URL or a local path under /public.
  // While left as {IMAGE_X}, a curated placeholder image renders in its place.
  photos: [
    { src: "src/assets/images/1.jpg", caption: "the first picture I never wanted to delete" },
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
s
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
