"use client";

import { motion } from "framer-motion";

const awards = [
  {
    title: "Nelson Mandela Noble Peace Award",
    org: "International Peace Foundation",
    icon: "🕊️",
    year: "2022",
    desc: "Recognized for extraordinary contributions to global peace, humanitarian service, and social upliftment across continents.",
    tier: "global",
  },
  {
    title: "Mother of CSR Citation",
    org: "Corporate Social Responsibility Council of India",
    icon: "🌸",
    year: "2021",
    desc: "Honoured for pioneering and institutionalizing CSR practices that have touched millions of lives across India.",
    tier: "national",
  },
  {
    title: "Global Social Visionary Award",
    org: "World Social Leaders Forum",
    icon: "🌍",
    year: "2023",
    desc: "Awarded for visionary leadership in social transformation, suicide prevention, and mental health advocacy.",
    tier: "global",
  },
  {
    title: "National Green Crusader Award",
    org: "Ministry of Environment, Forest & Climate Change",
    icon: "🌿",
    year: "2020",
    desc: "Commended for relentless environmental crusades across 15 countries and landmark green policy advocacy.",
    tier: "national",
  },
  {
    title: "UN SDG Thought Leadership Recognition",
    org: "United Nations Sustainable Development Goals",
    icon: "🇺🇳",
    year: "2023",
    desc: "Distinguished recognition from the United Nations for exceptional thought leadership aligned with the 17 SDGs.",
    tier: "global",
  },
  {
    title: "Women Empowerment Excellence Award",
    org: "National Commission for Women",
    icon: "💎",
    year: "2019",
    desc: "Felicitated for championing women's rights, equal opportunity, and psychosocial empowerment nationwide.",
    tier: "national",
  },
  {
    title: "International Humanitarian Leadership Award",
    org: "Global Humanitarian Alliance",
    icon: "🏅",
    year: "2022",
    desc: "For steering impactful humanitarian projects spanning health, education, and crisis counselling internationally.",
    tier: "global",
  },
  {
    title: "Best IT Director — Healthcare Sector",
    org: "CIO Leadership Awards India",
    icon: "💻",
    year: "2018",
    desc: "Recognized for technology leadership bridging clinical psychology with enterprise IT systems.",
    tier: "professional",
  },
];

const tierColors: Record<string, { color: string; bg: string; label: string }> = {
  global: { color: "var(--gold)", bg: "rgba(201,168,76,0.12)", label: "Global" },
  national: { color: "#f87171", bg: "rgba(248,113,113,0.1)", label: "National" },
  professional: { color: "#60a5fa", bg: "rgba(96,165,250,0.1)", label: "Professional" },
};

export default function AwardsPage() {
  return (
    <div className="min-h-screen grid-bg" style={{ paddingTop: "4rem" }}>
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(201,168,76,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-20">
        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="accent-line" />
            <span
              className="text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: "var(--gold)" }}
            >
              Honours &amp; Recognition
            </span>
            <div className="accent-line" />
          </div>
          <h1
            className="font-display text-5xl lg:text-6xl font-bold mb-4"
            style={{ color: "var(--off-white)" }}
          >
            Awards &amp; <span className="gold-text">Distinctions</span>
          </h1>
          <p
            className="font-elegant text-xl italic max-w-xl mx-auto"
            style={{ color: "var(--slate)" }}
          >
            A testament to decades of service — recognised by international bodies,
            national institutions, and the United Nations.
          </p>
        </motion.div>

        {/* === VIDEO SHOWCASE === */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mb-16"
        >
          <div
            className="rounded-2xl overflow-hidden p-1"
            style={{
              background: "linear-gradient(135deg, var(--gold) 0%, var(--maroon) 50%, var(--gold) 100%)",
            }}
          >
            <div className="rounded-xl overflow-hidden">
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.youtube.com/embed/Mh-H_d0b43w?vq=hd720&autoplay=1&mute=1&loop=1&playlist=Mh-H_d0b43w&rel=0"
                  title="Dr. Senbagam Raja — Award Ceremony"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-xl shadow-2xl"
                  style={{ border: "none", display: "block" }}
                />
              </div>
            </div>
          </div>
          <p
            className="text-center text-xs mt-3 tracking-wide uppercase"
            style={{ color: "rgba(245,242,237,0.35)" }}
          >
            Award Ceremony Highlights — HD Showcase
          </p>
        </motion.div>

        {/* === AWARDS GRID === */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {awards.map((award, i) => {
            const tier = tierColors[award.tier];
            return (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + i * 0.08, duration: 0.55 }}
                className="card-glass rounded-2xl p-6 group hover:scale-[1.025] transition-transform duration-300 relative overflow-hidden"
              >
                {/* Tier glow */}
                <div
                  className="absolute top-0 left-0 w-full h-0.5"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${tier.color}, transparent)`,
                  }}
                />

                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl">{award.icon}</div>
                  <div className="text-right">
                    <span
                      className="inline-block px-2 py-0.5 rounded-full text-[9px] font-semibold uppercase tracking-widest mb-1"
                      style={{ background: tier.bg, color: tier.color }}
                    >
                      {tier.label}
                    </span>
                    <div
                      className="text-xs font-mono"
                      style={{ color: "rgba(245,242,237,0.35)" }}
                    >
                      {award.year}
                    </div>
                  </div>
                </div>

                <h3
                  className="font-display text-base font-bold mb-1 leading-snug"
                  style={{ color: "var(--off-white)" }}
                >
                  {award.title}
                </h3>
                <p
                  className="text-[11px] mb-3 font-medium"
                  style={{ color: tier.color, opacity: 0.75 }}
                >
                  {award.org}
                </p>
                <p
                  className="text-xs leading-5"
                  style={{ color: "rgba(245,242,237,0.55)" }}
                >
                  {award.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom quote */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 text-center"
        >
          <p
            className="font-elegant text-2xl italic mb-3"
            style={{ color: "rgba(245,242,237,0.55)" }}
          >
            &ldquo;True recognition is not the award itself, but the lives changed
            that made the award possible.&rdquo;
          </p>
          <cite
            className="text-xs uppercase tracking-[0.15em] not-italic"
            style={{ color: "var(--gold)", opacity: 0.7 }}
          >
            — Dr. Senbagam Raja
          </cite>
        </motion.blockquote>
      </div>
    </div>
  );
}
