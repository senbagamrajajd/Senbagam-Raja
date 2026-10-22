"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import JSZip from "jszip";

type GallerySection = "Events" | "Awards" | "Memories" | "Academics" | "Research" | "VVIP's Meetings" | "Others" | "Instagram";
type Photo = { src: string; caption: string; section: GallerySection };

const photos: Photo[] = [
  { src: "/slideshow/slide-01.jpg", caption: "At the Indian Institute of Management Kozhikode (IIMK)", section: "Academics" },
  { src: "/slideshow/slide-02.jpg", caption: "At the IIT Madras Incubation Cell, India's leading deep-tech startup hub", section: "Academics" },
  { src: "/slideshow/slide-03.jpg", caption: "Receiving the South India Women Achievers Award (SIWAA) 2026", section: "Awards" },
  { src: "/slideshow/slide-04.jpg", caption: "Felicitated at the SIWAA 2026 awards ceremony", section: "Awards" },
  { src: "/slideshow/slide-05.jpg", caption: "Felicitated at the Indian Medical Awards 2026", section: "Awards" },
  { src: "/slideshow/slide-06.jpg", caption: "Addressing the press at the Global Pink Army / Indian Medical Awards 2026", section: "Events" },
  { src: "/slideshow/slide-07.jpg", caption: "At the Bar Council of Tamil Nadu and Puducherry", section: "VVIP's Meetings" },
  { src: "/gallery/calicut-bar-association.jpg", caption: "Serving at the Calicut Bar Association as a Supreme Court Advocate. Cherishing an unforgettable moment in the historic city of Kozhikode (Calicut), where history, culture, and knowledge come together.", section: "VVIP's Meetings" },
  { src: "/slideshow/slide-08.jpg", caption: "Addressing the CIFA National Executive Committee Meeting", section: "Events" },
  { src: "/slideshow/slide-09.jpg", caption: "At the Ministry of Agriculture and Farmers Welfare, Government of India", section: "VVIP's Meetings" },
  { src: "/slideshow/slide-10.jpg", caption: "Seeds Bill discussion with the Union Minister for Agriculture and Farmers Welfare", section: "VVIP's Meetings" },
  { src: "/slideshow/slide-11.jpg", caption: "Meeting Union Minister Shri Shivraj Singh Chouhan at Krishi Bhawan, New Delhi", section: "VVIP's Meetings" },
  { src: "/slideshow/slide-12.jpg", caption: "With heritage wood carvings and a bronze Ganesha sculpture", section: "Memories" },
  { src: "/gallery/kozhikode-landmark.jpg", caption: "Cherishing an unforgettable moment in the historic city of Kozhikode (Calicut), a place that welcomed the world through its legendary spice trade and continues to reflect India's rich heritage and timeless legacy.", section: "Memories" },
  { src: "/gallery/kozhikode-malayalam-landmark.jpg", caption: "Remembering Kozhikode (Calicut), where history, culture, and knowledge beautifully come together. Grateful for the experience, the memories, and the opportunity to be part of this inspiring place.", section: "Memories" },
  { src: "/gallery/gallery-13.jpg", caption: "Receiving the Times Internet Ecopreneur Award 2026", section: "Awards" },
  { src: "/gallery/gallery-14.jpg", caption: "Celebrating with fellow honorees at the Ecopreneur Awards evening", section: "Awards" },
  { src: "/instagram/cambridge-forum-1.webp", caption: "Speaking at the Cambridge Global Leaders Forum at Homerton College, University of Cambridge, alongside an esteemed gathering of academics, business leaders, and policy voices.", section: "Awards" },
  { src: "/instagram/cambridge-forum-2.webp", caption: "A proud moment at the Cambridge Global Leaders Forum 2026, highlighting leadership, business, and global impact with speakers including Colin Crooks MBE, Jaideep Prabhu, Suyash Bhatt, and other distinguished guests.", section: "Awards" },
  { src: "/gallery/siwaa-lifetime-achiever-award.jpg", caption: "Meet Dr. Senbagam Raja, SIWAA 2026 Winner - Lifetime Achiever. From Chennai, Tamil Nadu, she has been honoured for years of dedication, hard work, and consistent excellence across her professional and social contributions. Through her leadership and service, she continues to inspire people and create meaningful impact in society.", section: "Awards" },
  { src: "/gallery/siwaa-lifetime-achiever-interview.jpg", caption: "Meet Dr. Senbagam Raja, SIWAA 2026 Winner - Lifetime Achiever. From Chennai, Tamil Nadu, she has been honoured for years of dedication, hard work, and consistent excellence across her professional and social contributions. Through her leadership and service, she continues to inspire people and create meaningful impact in society.", section: "Awards" },
  { src: "/gallery/sri-lankan-upcoming-model-2026.png", caption: "Chief Guest at the Sri Lankan Upcoming Model 2026 event. All India Legal Advisor - World Tamil Arts Cultural Academy, United States of America; Senior Counselling Psychologist; Supreme Court Advocate, India; Director-IT and Founder, GoGreen India IRS; Alumni of IIT Madras and IIM Kozhikode", section: "Awards" },
  { src: "/gallery/siwaa-2026.jpg", caption: "Featured in Twell Magazine's SIWAA-2026 digital supplement as a nominee in the Lifetime Achiever category, recognizing a legacy of leadership, service, and meaningful contributions to society", section: "Awards" },
  { src: "/gallery/gallery-15.jpg", caption: "Presented a certificate with Shri. Krishna (Project Instructor in IITM BS Data Science Degree) at the IIT Madras", section: "Academics" },
  { src: "/gallery/gallery-16.jpg", caption: "With a fellow participant during the IIM Kozhikode programme", section: "Academics" },
  { src: "/gallery/gallery-17.jpg", caption: "With programme Project Instructor at IIT Madras", section: "Academics" },
  { src: "/gallery/gallery-18.jpg", caption: "At ‘Tamil Nadu’s Growth and Employment Agenda’, Lok Bhavan, Tamil Nadu", section: "Events" },
  { src: "/gallery/gallery-19.jpg", caption: "A sapling-planting exchange with fellow delegates", section: "Events" },
  { src: "/gallery/gallery-20.jpg", caption: "A blessing ceremony during the visit to Shirdi", section: "Memories" },
  { src: "/gallery/gallery-21.jpg", caption: "At the Saiseva Residential School for differently-abled children, Shirdi", section: "Others" },
  { src: "/gallery/gallery-22.jpg", caption: "With fellow honorees at the Times Internet Ecopreneur Awards", section: "Awards" },
  { src: "/gallery/gallery-23.jpg", caption: "On the streets of Shirdi, near the Sai Baba Samadhi Mandir", section: "Memories" },
  { src: "/gallery/gallery-24.jpg", caption: "On stage at the Times Internet Ecopreneur Awards 2026", section: "Awards" },
  { src: "/gallery/gallery-25.jpg", caption: "Receiving the Ecopreneur Award", section: "Awards" },
  { src: "/gallery/gallery-26.jpg", caption: "Felicitated at the Times Internet Ecopreneur Awards 2026", section: "Awards" },
  { src: "/gallery/gallery-27.jpg", caption: "At the IIM Kozhikode ‘International Footprints’ wall", section: "Academics" },
  { src: "/gallery/gallery-28.jpg", caption: "Valedictory ceremony of the eMDP on Chief Technology Officership, IIM Kozhikode", section: "Academics" },
  { src: "/gallery/gallery-29.jpg", caption: "With the eMDP cohort at IIM Kozhikode", section: "Academics" },
  { src: "/gallery/gallery-31.jpg", caption: "A public engagement visit in Tamil Nadu", section: "Events" },
  { src: "/gallery/gallery-32.jpg", caption: "Interacting with students at the Saiseva Residential School, Shirdi", section: "Others" },
  { src: "/gallery/research-dna-cellular-stress.jpg", caption: "Honoured and grateful to be part of research programmes at one of India's top research universities. My research focuses on DNA study of cellular and molecular stress responses, bringing together science, justice, and social impact. As a Senior Counselling Psychologist and Supreme Court Advocate, this work bridges forensic genealogy through DNA gene amplification for faster criminal investigations and sustainable agriculture by exploring resilient ancestral genes to strengthen future food security. I dedicate this research to the welfare, innovation, and progress of India.", section: "Research" },
];

const sections: GallerySection[] = ["Events", "Awards", "Memories", "Academics", "Research", "VVIP's Meetings", "Instagram", "Others"];

export default function GalleryPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<GallerySection>(sections[0]);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadError, setDownloadError] = useState<string | null>(null);

  const downloadAllFolders = async () => {
    setIsDownloading(true);
    setDownloadError(null);

    try {
      const zip = new JSZip();
      await Promise.all(
        photos.map(async ({ src }) => {
          const response = await fetch(src);
          if (!response.ok) throw new Error(`Unable to download ${src}`);
          const folder = src.startsWith("/gallery/")
            ? "gallery"
            : src.startsWith("/instagram/")
              ? "instagram"
              : "slideshow";
          zip.folder(folder)?.file(src.split("/").pop() ?? "image.jpg", await response.blob());
        }),
      );

      const archive = await zip.generateAsync({ type: "blob" });
      const url = URL.createObjectURL(archive);
      const link = document.createElement("a");
      link.href = url;
      link.download = "senbagam-raja-gallery.zip";
      link.click();
      URL.revokeObjectURL(url);
    } catch {
      setDownloadError("The gallery could not be downloaded. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

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

  const instagramPosts = [
    {
      id: "dey52x1k8rp",
      title: "PM Modi",
      href: "https://www.instagram.com/p/DeY52X1k8rp/",
      images: [
        "/instagram/pm-modi-1.png",
        "/instagram/pm-modi-2.png",
        "/instagram/pm-modi-3.png",
      ],
      alt: "Dr. Senbagam Raja with PM Modi-related recent Instagram post highlight",
      description: "A recent moment with Hon'ble Prime Minister Narendra Modi, reflecting leadership, public service, and national commitment.",
    },
    {
      id: "deexodue-4s",
      title: "Cambridge",
      href: "https://www.instagram.com/p/DeEXOdUE-4S/",
      image: "/instagram/cambridge-forum-2.webp",
      alt: "Dr. Senbagam Raja at the Global Leaders Forum at Homerton College, Cambridge",
      description: "A proud moment at the Global Leaders Forum, Homerton College, Cambridge, sharing ideas and experiences on leadership and global collaboration.",
    },
  ];

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
          <button
            type="button"
            onClick={downloadAllFolders}
            disabled={isDownloading}
            className="mt-7 px-5 py-3 rounded-lg text-sm font-semibold transition-colors disabled:cursor-wait disabled:opacity-60"
            style={{
              color: "var(--midnight)",
              background: "var(--gold)",
              border: "1px solid var(--gold-light)",
            }}
          >
            {isDownloading ? "Preparing download..." : "Download all photos"}
          </button>
          {downloadError && (
            <p className="mt-3 text-sm" style={{ color: "#F3A6A6" }} role="alert">
              {downloadError}
            </p>
          )}
        </motion.div>

        <section aria-label="Gallery sections">
          <div
            className="flex flex-wrap gap-2 mb-8"
            role="tablist"
            aria-label="Choose a gallery section"
          >
            {sections.map((section) => {
              const active = activeSection === section;
              return (
                <button
                  key={section}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  aria-controls={`gallery-panel-${section}`}
                  onClick={() => setActiveSection(section)}
                  className="px-4 py-2.5 rounded-lg text-sm font-medium transition-colors"
                  style={{
                    color: active ? "var(--midnight)" : "var(--off-white)",
                    background: active ? "var(--gold)" : "rgba(22,36,71,0.65)",
                    border: active
                      ? "1px solid var(--gold-light)"
                      : "1px solid rgba(201,168,76,0.22)",
                  }}
                >
                  {section}
                </button>
              );
            })}
          </div>

          {activeSection === "Instagram" ? (
            <div
              id="gallery-panel-Instagram"
              role="tabpanel"
              aria-label="Instagram gallery"
              className="min-h-[12rem]"
            >
              <h2
                className="font-display text-3xl md:text-4xl font-bold mb-6"
                style={{ color: "var(--off-white)" }}
              >
                Instagram
              </h2>

              <div className="grid gap-5 md:grid-cols-2">
                {instagramPosts.map((post) => {
                  const postImage = "images" in post && Array.isArray(post.images) ? post.images[0] : post.image;

                  return (
                    <a
                      key={post.id}
                      href={post.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group overflow-hidden rounded-2xl border border-[rgba(201,168,76,0.22)] bg-[rgba(22,36,71,0.65)] transition-transform duration-300 hover:-translate-y-1"
                      aria-label={`View the ${post.title} Instagram post`}
                    >
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={postImage}
                          alt={post.alt}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-5">
                        <div className="mb-2 flex items-center justify-between gap-3">
                          <span
                            className="text-xs font-semibold uppercase tracking-[0.18em]"
                            style={{ color: "var(--gold-light)" }}
                          >
                            {post.title}
                          </span>
                          <span className="text-xs" style={{ color: "var(--slate)" }}>
                            Instagram
                          </span>
                        </div>
                        <p className="text-sm leading-6" style={{ color: "var(--off-white)" }}>
                          {post.description}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          ) : (
            <div
              id={`gallery-panel-${activeSection}`}
              role="tabpanel"
              aria-label={`${activeSection} gallery`}
              className="min-h-[12rem]"
            >
              <h2
                className="font-display text-3xl md:text-4xl font-bold mb-6"
                style={{ color: "var(--off-white)" }}
              >
                {activeSection}
              </h2>
              <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
                {photos.map((photo, i) => photo.section === activeSection && (
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
          )}
        </section>
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
