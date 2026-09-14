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

// Local fallback — always renders, used if a slide image fails to load.
const FALLBACK_IMAGE = "/profile.jpg";

// Slideshow photos, served from /public/slideshow. Each advances every
// 5 seconds (see the interval below). Order runs from institutional
// visits through award recognition to policy engagements.
const slides = [
  { src: "/slideshow/slide-01.jpg", alt: "Dr. Senbagam Raja at the Indian Institute of Management Kozhikode (IIMK)" },
  { src: "/slideshow/slide-02.jpg", alt: "Dr. Senbagam Raja at the IIT Madras Incubation Cell deep-tech startup hub" },
  { src: "/slideshow/slide-03.jpg", alt: "Dr. Senbagam Raja receiving the South India Women Achievers Award (SIWAA) 2026" },
  { src: "/slideshow/slide-04.jpg", alt: "Dr. Senbagam Raja honoured at the SIWAA 2026 awards ceremony" },
  { src: "/slideshow/slide-05.jpg", alt: "Dr. Senbagam Raja felicitated at the Indian Medical Awards 2026" },
  { src: "/slideshow/slide-06.jpg", alt: "Dr. Senbagam Raja addressing the press at the Global Pink Army / Indian Medical Awards 2026" },
  { src: "/slideshow/slide-07.jpg", alt: "Dr. Senbagam Raja at the Bar Council of Tamil Nadu and Puducherry" },
  { src: "/slideshow/slide-08.jpg", alt: "Dr. Senbagam Raja speaking at the CIFA National Executive Committee Meeting" },
  { src: "/slideshow/slide-09.jpg", alt: "Dr. Senbagam Raja at the Ministry of Agriculture and Farmers Welfare, Government of India" },
  { src: "/slideshow/slide-10.jpg", alt: "Dr. Senbagam Raja in the Seeds Bill discussion with the Union Minister for Agriculture and Farmers Welfare" },
  { src: "/slideshow/slide-11.jpg", alt: "Dr. Senbagam Raja meeting Union Minister Shri Shivraj Singh Chouhan at Krishi Bhawan, New Delhi" },
  { src: "/slideshow/slide-12.jpg", alt: "Dr. Senbagam Raja with heritage wood carvings and a bronze Ganesha sculpture" },
];

export default function HomePage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [failedSlides, setFailedSlides] = useState<Record<number, boolean>>(
    {}
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden"
      style={{ background: "var(--midnight)" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT — Text */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-display text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] mb-6 text-white"
          >
            Dr. Senbagam <span className="gold-text">Raja</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="flex flex-wrap gap-2 mb-8"
          >
            {badges.map((b) => (
              <span
                key={b}
                className="px-3 py-1.5 rounded-full text-xs font-medium tracking-wide"
                style={{
                  background: "rgba(201,168,76,0.12)",
                  border: "1px solid rgba(201,168,76,0.35)",
                  color: "var(--gold-light)",
                }}
              >
                {b}
              </span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-base leading-8 text-white/80"
          >
            A rare blend of intellectual brilliance, corporate leadership,
            legal acumen, and deep social consciousness. Bringing over 25
            years of extensive experience at top-tier firms like Wipro,
            Accenture, and Infosys. Ranked among the Top 10% of Integrated
            Counsellors of women psychologists in India.
          </motion.p>
        </div>

        {/* RIGHT — Image slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          {/* Decorative gold ring */}
          <div
            className="absolute -inset-2 rounded-[2rem] opacity-40"
            style={{
              background:
                "conic-gradient(from 0deg, var(--gold), var(--maroon), var(--gold))",
            }}
          />

          <div
            className="relative aspect-[4/5] rounded-3xl overflow-hidden"
            style={{
              border: "1px solid rgba(201,168,76,0.4)",
              boxShadow: "0 25px 60px rgba(0,0,0,0.5)",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                src={
                  failedSlides[activeIndex]
                    ? FALLBACK_IMAGE
                    : slides[activeIndex].src
                }
                alt={slides[activeIndex].alt}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover"
                onError={() =>
                  setFailedSlides((prev) => ({ ...prev, [activeIndex]: true }))
                }
              />
            </AnimatePresence>
          </div>

          {/* Slide indicators */}
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {slides.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                aria-label={`Show slide ${i + 1}`}
                onClick={() => setActiveIndex(i)}
                className="h-2 rounded-full transition-all"
                style={{
                  width: i === activeIndex ? "1.5rem" : "0.5rem",
                  background:
                    i === activeIndex
                      ? "var(--gold)"
                      : "rgba(201,168,76,0.35)",
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
