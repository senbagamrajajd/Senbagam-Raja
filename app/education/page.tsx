"use client";

import { motion } from "framer-motion";

const degrees = [
  {
    title: "Ph.D. in Psychology",
    institution: "Bharathiar University",
    type: "doctorate",
    icon: "🎓",
    desc: "Doctoral research in advanced psychological frameworks and clinical counselling methodologies.",
  },
  {
    title: "Master of Laws (LL.M.)",
    institution: "Tamil Nadu Dr. Ambedkar Law University",
    type: "masters",
    icon: "⚖️",
    desc: "Specialization in constitutional law, cyber laws, and legal frameworks for digital forensics.",
  },
  {
    title: "M.Sc. in Medical Psychology",
    institution: "University of Madras",
    type: "masters",
    icon: "🧠",
    desc: "Advanced study of psychopathology, clinical assessment, and therapeutic interventions.",
  },
  {
    title: "B.Sc. in Medical Psychology",
    institution: "University of Madras",
    type: "bachelors",
    icon: "📚",
    desc: "Foundational training in psychological sciences and medical behavioural studies.",
  },
  {
    title: "M.B.A. in Human Resources",
    institution: "Annamalai University",
    type: "masters",
    icon: "💼",
    desc: "Strategic HR management and organizational behaviour with corporate leadership focus.",
  },
  {
    title: "PG Diploma in Cyber Laws",
    institution: "National Law School of India University",
    type: "diploma",
    icon: "🔐",
    desc: "Comprehensive study of IT Act, data protection, cybercrime prosecution, and digital evidence.",
  },
  {
    title: "PG Diploma in Criminology",
    institution: "University of Madras",
    type: "diploma",
    icon: "🔍",
    desc: "Criminal psychology, forensic science, and investigative methodologies.",
  },
  {
    title: "Bachelor of Laws (LL.B.)",
    institution: "Tamil Nadu Dr. Ambedkar Law University",
    type: "bachelors",
    icon: "📜",
    desc: "Comprehensive legal education covering civil, criminal, and constitutional law.",
  },
  {
    title: "M.A. in Sociology",
    institution: "Madurai Kamaraj University",
    type: "masters",
    icon: "🌐",
    desc: "Social stratification, community dynamics, and CSR social impact research.",
  },
  {
    title: "M.Sc. in Counselling Psychology",
    institution: "Bharathiar University",
    type: "masters",
    icon: "💬",
    desc: "Evidence-based counselling, therapeutic modalities, and psycho-social interventions.",
  },
  {
    title: "PG Diploma in Yoga & Wellness",
    institution: "Kaivalyadhama Yoga Institute",
    type: "diploma",
    icon: "🧘",
    desc: "Holistic wellness integration with psychological healing frameworks.",
  },
  {
    title: "Certificate in Cyber Forensics",
    institution: "IIT Madras — Centre for Continuing Education",
    type: "iit",
    icon: "💻",
    desc: "Digital evidence collection, chain of custody, and forensic analysis tools.",
  },
  {
    title: "Executive Programme in Business Strategy",
    institution: "IIM Kozhikode",
    type: "iim",
    icon: "📊",
    desc: "Advanced corporate strategy, leadership, and organizational transformation.",
  },
  {
    title: "PG Diploma in Environmental Law",
    institution: "NALSAR University of Law",
    type: "diploma",
    icon: "🌿",
    desc: "Environmental governance, green compliance, and sustainable legal frameworks.",
  },
  {
    title: "M.A. in Peace & Conflict Studies",
    institution: "Symbiosis International University",
    type: "masters",
    icon: "🕊️",
    desc: "Conflict resolution, diplomacy, and international humanitarian law.",
  },
];

const typeConfig: Record<string, { label: string; color: string; bg: string }> = {
  doctorate: { label: "Doctorate", color: "var(--gold)", bg: "rgba(201,168,76,0.12)" },
  iit: { label: "IIT Madras", color: "#60a5fa", bg: "rgba(96,165,250,0.12)" },
  iim: { label: "IIM Kozhikode", color: "#a78bfa", bg: "rgba(167,139,250,0.12)" },
  masters: { label: "Masters", color: "var(--gold-light)", bg: "rgba(226,201,126,0.08)" },
  bachelors: { label: "Bachelors", color: "rgba(245,242,237,0.7)", bg: "rgba(245,242,237,0.06)" },
  diploma: { label: "Post-Graduate Diploma", color: "#6ee7b7", bg: "rgba(110,231,183,0.08)" },
};

export default function EducationPage() {
  const featured = degrees.filter((d) =>
    ["doctorate", "iit", "iim"].includes(d.type)
  );
  const rest = degrees.filter((d) => !["doctorate", "iit", "iim"].includes(d.type));

  return (
    <div
      className="min-h-screen grid-bg"
      style={{ paddingTop: "4rem" }}
    >
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 40% at 30% 20%, rgba(124,29,53,0.1) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="accent-line" />
            <span
              className="text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: "var(--gold)" }}
            >
              Academic Excellence
            </span>
            <div className="accent-line" />
          </div>
          <h1
            className="font-display text-5xl lg:text-6xl font-bold mb-4"
            style={{ color: "var(--off-white)" }}
          >
            Education &amp; <span className="gold-text">Academia</span>
          </h1>
          <p
            className="font-elegant text-xl italic max-w-2xl mx-auto"
            style={{ color: "var(--slate)" }}
          >
            Alumni of IIT Madras and IIM Kozhikode — holder of 15 distinguished academic degrees
            spanning law, psychology, technology, and the humanities.
          </p>
        </motion.div>

        {/* Featured — IIT / IIM / Doctorate banner trio */}
        <div className="grid md:grid-cols-3 gap-5 mb-8">
          {featured.map((deg, i) => {
            const cfg = typeConfig[deg.type];
            return (
              <motion.div
                key={deg.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.12, duration: 0.6 }}
                className="relative rounded-2xl p-6 overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgba(22,36,71,0.9) 0%, rgba(15,30,60,0.95) 100%)",
                  border: `1px solid ${cfg.color}40`,
                  boxShadow: `0 0 40px ${cfg.color}18`,
                }}
              >
                {/* Glow corner */}
                <div
                  className="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-20"
                  style={{ background: cfg.color }}
                />
                <div className="text-3xl mb-3">{deg.icon}</div>
                <span
                  className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-widest mb-3"
                  style={{ background: cfg.bg, color: cfg.color }}
                >
                  {cfg.label}
                </span>
                <h3
                  className="font-display text-lg font-bold mb-1 leading-tight"
                  style={{ color: "var(--off-white)" }}
                >
                  {deg.title}
                </h3>
                <p
                  className="text-xs mb-3"
                  style={{ color: cfg.color, opacity: 0.85 }}
                >
                  {deg.institution}
                </p>
                <p
                  className="text-sm leading-6"
                  style={{ color: "rgba(245,242,237,0.6)" }}
                >
                  {deg.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Rest — Bento grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {rest.map((deg, i) => {
            const cfg = typeConfig[deg.type];
            return (
              <motion.div
                key={deg.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.06, duration: 0.5 }}
                className="card-glass rounded-xl p-5 hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="text-2xl mb-2">{deg.icon}</div>
                <span
                  className="inline-block px-2 py-0.5 rounded-full text-[9px] font-semibold uppercase tracking-widest mb-2"
                  style={{ background: cfg.bg, color: cfg.color }}
                >
                  {cfg.label}
                </span>
                <h3
                  className="font-display text-sm font-bold mb-1 leading-snug"
                  style={{ color: "var(--off-white)" }}
                >
                  {deg.title}
                </h3>
                <p
                  className="text-[11px] mb-2"
                  style={{ color: "var(--gold)", opacity: 0.7 }}
                >
                  {deg.institution}
                </p>
                <p
                  className="text-xs leading-5"
                  style={{ color: "rgba(245,242,237,0.5)" }}
                >
                  {deg.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Degree count banner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 rounded-2xl p-8 text-center"
          style={{
            background: "linear-gradient(135deg, rgba(124,29,53,0.2) 0%, rgba(201,168,76,0.1) 100%)",
            border: "1px solid rgba(201,168,76,0.2)",
          }}
        >
          <div className="font-display text-6xl font-bold gold-text mb-2">15</div>
          <div
            className="font-elegant text-xl italic"
            style={{ color: "rgba(245,242,237,0.7)" }}
          >
            Academic Degrees across Law, Psychology, Technology &amp; Humanities
          </div>
        </motion.div>
      </div>
    </div>
  );
}
