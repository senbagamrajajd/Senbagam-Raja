"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Photo = { src: string; caption: string };

const photos: Photo[] = [
  { src: "/slideshow/slide-01.jpg", caption: "At the Indian Institute of Management Kozhikode (IIMK)" },
  { src: "/slideshow/slide-02.jpg", caption: "At the IIT Madras Incubation Cell, India's leading deep-tech startup hub" },
  { src: "/slideshow/slide-03.jpg", caption: "Receiving the South India Women Achievers Award (SIWAA) 2026" },
  { src: "/slideshow/slide-04.jpg", caption: "Felicitated at the SIWAA 2026 awards ceremony" },
  { src: "/slideshow/slide-05.jpg", caption: "Felicitated at the Indian Medical Awards 2026" },
  { src: "/slideshow/slide-06.jpg", caption: "Addressing the press at the Global Pink Army / Indian Medical Awards 2026" },
  { src: "/slideshow/slide-07.jpg", caption: "At the Bar Council of Tamil Nadu and Puducherry" },
  { src: "/slideshow/slide-08.jpg", caption: "Addressing the CIFA National Executive Committee Meeting" },
  { src: "/slideshow/slide-09.jpg", caption: "At the Ministry of Agriculture and Farmers Welfare, Government of India" },
  { src: "/slideshow/slide-10.jpg", caption: "Seeds Bill discussion with the Union Minister for Agriculture and Farmers Welfare" },
  { src: "/slideshow/slide-11.jpg", caption: "Meeting Union Minister Shri Shivraj Singh Chouhan at Krishi Bhawan, New Delhi" },
  { src: "/slideshow/slide-12.jpg", caption: "With heritage wood carvings and a bronze Ganesha sculpture" },
  { src: "/gallery/gallery-13.jpg", caption: "Receiving the Times Internet Ecopreneur Award 2026" },
  { src: "/gallery/gallery-14.jpg", caption: "Celebrating with fellow honorees at the Ecopreneur Awards evening" },
  { src: "/gallery/gallery-15.jpg", caption: "Presented a certificate with Shri. Krishna (Project Instructor in IITM BS Data Science Degree) at the IIT Madras" },
  { src: "/gallery/gallery-16.jpg", caption: "With a fellow participant during the IIM Kozhikode programme" },
  { src: "/gallery/gallery-17.jpg", caption: "With programme Project Instructor at IIT Madras" },
  { src: "/gallery/gallery-18.jpg", caption: "At ‘Tamil Nadu’s Growth and Employment Agenda’, Lok Bhavan, Tamil Nadu" },
  { src: "/gallery/gallery-19.jpg", caption: "A sapling-planting exchange with fellow delegates" },
  { src: "/gallery/gallery-20.jpg", caption: "A blessing ceremony during the visit to Shirdi" },
  { src: "/gallery/gallery-21.jpg", caption: "At the Saiseva Residential School for differently-abled children, Shirdi" },
  { src: "/gallery/gallery-22.jpg", caption: "With fellow honorees at the Times Internet Ecopreneur Awards" },
  { src: "/gallery/gallery-23.jpg", caption: "On the streets of Shirdi, near the Sai Baba Samadhi Mandir" },
  { src: "/gallery/gallery-24.jpg", caption: "On stage at the Times Internet Ecopreneur Awards 2026" },
  { src: "/gallery/gallery-25.jpg", caption: "Receiving the Ecopreneur Award" },
  { src: "/gallery/gallery-26.jpg", caption: "Felicitated at the Times Internet Ecopreneur Awards 2026" },
  { src: "/gallery/gallery-27.jpg", caption: "At the IIM Kozhikode ‘International Footprints’ wall" },
  { src: "/gallery/gallery-28.jpg", caption: "Valedictory ceremony of the eMDP on Chief Technology Officership, IIM Kozhikode" },
  { src: "/gallery/gallery-29.jpg", caption: "With the eMDP cohort at IIM Kozhikode" },
  { src: "/gallery/gallery-31.jpg", caption: "A public engagement visit in Tamil Nadu" },
  { src: "/gallery/gallery-32.jpg", caption: "Interacting with students at the Saiseva Residential School, Shirdi" },
];

export default function GalleryPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight") setOpenIndex((i) => (i === null ? i : (i + 1) % photos.length));
      if (e.key === "ArrowLeft") setOpenIndex((i) => (i === null ? i : (i - 1 + photos.length) % photos.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex]);

  return (
    <div className="min-h-screen grid-bg" style={{ paddingTop: "4rem" }}>
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 40% at 70% 10%, rgba(124,29,53,0.1) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="accent-line" />
            <span
              className="text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: "var(--gold)" }}
            >
              Moments &amp; Milestones
            </span>
            <div className="accent-line" />
          </div>
          <h1
            className="font-display text-5xl lg:text-6xl font-bold mb-4"
            style={{ color: "var(--off-white)" }}
          >
            Photo <span className="gold-text">Gallery</span>
          </h1>
          <p
            className="font-elegant text-xl italic max-w-2xl mx-auto"
            style={{ color: "var(--slate)" }}
          >
            Institutional visits, award ceremonies, policy engagements, and humanitarian work
            from across the journey.
          </p>
        </motion.div>

        {/* Masonry grid */}
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
          {photos.map((photo, i) => (
            <motion.button
              key={photo.src}
              type="button"
              onClick={() => setOpenIndex(i)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: (i % 8) * 0.05, duration: 0.5 }}
              className="mb-4 block w-full break-inside-avoid rounded-xl overflow-hidden card-glass group relative text-left"
              aria-label={`Open photo: ${photo.caption}`}
            >
              <img
                src={photo.src}
                alt={photo.caption}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className="absolute inset-x-0 bottom-0 px-3 py-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(to top, rgba(11,17,32,0.92) 0%, transparent 100%)",
                }}
              >
                <p
                  className="text-xs leading-5"
                  style={{ color: "var(--off-white)" }}
                >
                  {photo.caption}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {openIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
            style={{ background: "rgba(6,10,20,0.96)" }}
            onClick={() => setOpenIndex(null)}
          >
            <button
              type="button"
              aria-label="Close"
              onClick={() => setOpenIndex(null)}
              className="absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center text-xl"
              style={{ color: "var(--gold)", border: "1px solid rgba(201,168,76,0.35)" }}
            >
              &times;
            </button>

            <button
              type="button"
              aria-label="Previous photo"
              onClick={(e) => {
                e.stopPropagation();
                setOpenIndex((i) => (i === null ? i : (i - 1 + photos.length) % photos.length));
              }}
              className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full items-center justify-center text-2xl"
              style={{ color: "var(--gold)", border: "1px solid rgba(201,168,76,0.35)" }}
            >
              &#8249;
            </button>
            <button
              type="button"
              aria-label="Next photo"
              onClick={(e) => {
                e.stopPropagation();
                setOpenIndex((i) => (i === null ? i : (i + 1) % photos.length));
              }}
              className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full items-center justify-center text-2xl"
              style={{ color: "var(--gold)", border: "1px solid rgba(201,168,76,0.35)" }}
            >
              &#8250;
            </button>

            <motion.div
              key={openIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="max-w-3xl w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={photos[openIndex].src}
                alt={photos[openIndex].caption}
                className="max-h-[75vh] w-auto rounded-xl"
                style={{ border: "1px solid rgba(201,168,76,0.3)" }}
              />
              <p
                className="mt-4 text-sm text-center max-w-xl"
                style={{ color: "var(--off-white)" }}
              >
                {photos[openIndex].caption}
              </p>
              <p
                className="mt-1 text-xs"
                style={{ color: "var(--slate)" }}
              >
                {openIndex + 1} / {photos.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
