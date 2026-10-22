
"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const badges = [
  "IT Director",
  "Senior Counselling Psychologist",
  "Supreme Court Advocate",
  "Cyber Forensics Expert",
  "Global Peace Envoy",
];

const FALLBACK_IMAGE = "/profile.jpg";

const cambridgeSlides = [
  {
    src: "/instagram/cambridge-forum-1.webp",
    alt: "Dr. Senbagam Raja speaking at the Cambridge Global Leaders Forum at Homerton College, University of Cambridge",
    title: "Cambridge Global Leaders Forum 2026",
    description:
      "A landmark academic and leadership gathering at Homerton College.",
  },
  {
    src: "/instagram/cambridge-forum-2.webp",
    alt: "Dr. Senbagam Raja at the Cambridge Global Leaders Forum discussing leadership and global impact",
    title: "Leadership, Business & Global Impact",
    description:
      "Recognised among distinguished guests, academics, and policy leaders.",
  },
];

export default function HomePage() {
  const [activeCambridgeIndex, setActiveCambridgeIndex] = useState(0);
  const [failedProfileImage, setFailedProfileImage] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCambridgeIndex(
        (prev) => (prev + 1) % cambridgeSlides.length
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center overflow-hidden"
      style={{ background: "var(--midnight)" }}
    >
      {/* PROFILE SECTION */}
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 pb-16 pt-20 lg:grid-cols-2 lg:gap-16">
        {/* LEFT — PROFILE TEXT */}
        <div className="text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-display mb-6 text-3xl font-bold leading-tight text-white sm:text-5xl lg:text-5xl xl:text-6xl"
          >
            Dr. Senbagam{" "}
            <span className="gold-text">Raja</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: "easeOut",
            }}
            className="mb-8 flex flex-wrap justify-center gap-2 lg:justify-start"
          >
            {badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full px-3 py-1.5 text-xs font-medium tracking-wide"
                style={{
                  background: "rgba(201,168,76,0.12)",
                  border: "1px solid rgba(201,168,76,0.35)",
                  color: "var(--gold-light)",
                }}
              >
                {badge}
              </span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="text-center text-base leading-8 text-white/80 lg:text-left"
          >
            A rare blend of intellectual brilliance, corporate leadership,
            legal acumen, and deep social consciousness. Bringing over 25
            years of extensive experience at top-tier firms like Wipro,
            Accenture, and Infosys. Ranked among the Top 10% of Integrated
            Counsellors of women psychologists in India.
          </motion.p>
        </div>

        {/* RIGHT — PROFILE PORTRAIT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center"
        >
          <div
            className="relative aspect-square w-full max-w-[420px] overflow-hidden rounded-full border"
            style={{
              borderColor: "rgba(201,168,76,0.45)",
              boxShadow: "0 25px 60px rgba(0,0,0,0.5)",
            }}
          >
            <motion.img
              src={failedProfileImage ? FALLBACK_IMAGE : "/profile.jpg"}
              alt="Dr. Senbagam Raja profile portrait"
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0 h-full w-full object-cover"
              onError={() => setFailedProfileImage(true)}
            />
          </div>
        </motion.div>
      </div>

      {/* CENTERED CAMBRIDGE ACHIEVEMENT SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mx-auto w-full max-w-5xl px-6 pb-20 pt-8 text-center"
      >
        {/* SECTION HEADING */}
        <div className="mb-6 flex items-center justify-center gap-4">
          <div className="accent-line" />

          <span
            className="text-[10px] font-semibold uppercase tracking-[0.28em] sm:text-xs"
            style={{ color: "var(--gold-light)" }}
          >
            Cambridge Achievement
          </span>

          <div className="accent-line" />
        </div>

        {/* CENTERED SLIDESHOW */}
        <div
          className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-2xl border"
          style={{
            background: "rgba(255,255,255,0.02)",
            borderColor: "rgba(201,168,76,0.28)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCambridgeIndex}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <img
                src={cambridgeSlides[activeCambridgeIndex].src}
                alt={cambridgeSlides[activeCambridgeIndex].alt}
                className="h-[240px] w-full object-cover sm:h-[360px] lg:h-[420px]"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* SLIDE TITLE AND DESCRIPTION */}
        <div className="mx-auto mt-6 max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={`caption-${activeCambridgeIndex}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
            >
              <h2
                className="font-display mb-2 text-2xl font-bold sm:text-3xl"
                style={{ color: "var(--off-white)" }}
              >
                {cambridgeSlides[activeCambridgeIndex].title}
              </h2>

              <p className="text-sm leading-7 text-white/70 sm:text-base">
                {cambridgeSlides[activeCambridgeIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* SLIDESHOW NAVIGATION */}
        <div className="mt-6 flex justify-center gap-3">
          {cambridgeSlides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              aria-label={`Show Cambridge achievement ${index + 1}`}
              aria-pressed={index === activeCambridgeIndex}
              onClick={() => setActiveCambridgeIndex(index)}
              className="h-2 rounded-full transition-all duration-300"
              style={{
                width:
                  index === activeCambridgeIndex ? "1.5rem" : "0.5rem",
                background:
                  index === activeCambridgeIndex
                    ? "var(--gold)"
                    : "rgba(201,168,76,0.35)",
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* THIRUKKURAL — ELEGANT QUOTE CARD */}
      <motion.blockquote
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 mx-auto mb-10 w-[calc(100%-2rem)] max-w-[1540px] overflow-hidden rounded-[22px] border px-5 py-10 text-center sm:px-10 sm:py-12 lg:px-16 lg:py-14"
        style={{
          background:
            "linear-gradient(110deg, rgba(88,31,48,0.38) 0%, rgba(35,32,43,0.75) 48%, rgba(16,30,53,0.82) 100%)",
          borderColor: "rgba(201,168,76,0.24)",
          boxShadow: "0 15px 45px rgba(0,0,0,0.12)",
        }}
      >
        {/* SUBTLE BACKGROUND GRID */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,168,76,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.07) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative z-10 flex flex-col items-center justify-center">
          {/* THIRUKKURAL HEADING */}
          <div
            className="mb-5 text-lg sm:text-xl"
            style={{
              fontFamily: "'Noto Serif Tamil', 'Nirmala UI', serif",
              fontWeight: 400,
              color: "var(--gold-light)",
            }}
          >
            திருக்குறள்
          </div>

          {/* VERSE — REGULAR-WEIGHT ITALIC TEXT */}
          <p
            className="w-full text-[clamp(22px,2.8vw,38px)] italic leading-[1.8] text-white/80"
            style={{
              fontFamily: "'Noto Serif Tamil', 'Nirmala UI', 'Latha', serif",
              fontWeight: 300,
            }}
          >
            <span className="block">
              தெய்வத்தான் ஆகா தெனினும் முயற்சிதன்
            </span>

            <span className="block">
              மெய்வருத்தக் கூலி தரும்.
            </span>
          </p>

          {/* AUTHOR ATTRIBUTION */}
          <cite
            className="mt-5 text-sm not-italic tracking-[0.16em] sm:text-base"
            style={{
              fontFamily: "'Noto Serif Tamil', 'Nirmala UI', serif",
              fontWeight: 300,
              color: "var(--gold-light)",
            }}
          >
            — திருவள்ளுவர்
          </cite>
        </div>
      </motion.blockquote>
    </section>
  );
}
