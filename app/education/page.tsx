"use client";

import { motion } from "framer-motion";

type Degree = {
  title: string;
  institution: string;
  type: string;
  desc: string;
  discipline: string;
};

const degrees: Degree[] = [
  {
    title: "Ph.D. in Psychology",
    institution: "Bharathiar University",
    type: "doctorate",
    desc: "Doctoral research in advanced psychological frameworks and clinical counselling methodologies.",
    discipline: "Psychology & Mental Health",
  },
  {
    title: "Master of Laws (LL.M.)",
    institution: "Tamil Nadu Dr. Ambedkar Law University",
    type: "masters",
    desc: "Specialization in constitutional law, cyber laws, and legal frameworks for digital forensics.",
    discipline: "Law & Legal Studies",
  },
  {
    title: "M.Sc. in Medical Psychology",
    institution: "University of Madras",
    type: "masters",
    desc: "Advanced study of psychopathology, clinical assessment, and therapeutic interventions.",
    discipline: "Psychology & Mental Health",
  },
  {
    title: "B.Sc. in Medical Psychology",
    institution: "University of Madras",
    type: "bachelors",
    desc: "Foundational training in psychological sciences and medical behavioural studies.",
    discipline: "Psychology & Mental Health",
  },
  {
    title: "M.B.A. in Human Resources",
    institution: "Annamalai University",
    type: "masters",
    desc: "Strategic HR management and organizational behaviour with corporate leadership focus.",
    discipline: "Business & Leadership",
  },
  {
    title: "PG Diploma in Cyber Laws",
    institution: "National Law School of India University",
    type: "diploma",
    desc: "Comprehensive study of IT Act, data protection, cybercrime prosecution, and digital evidence.",
    discipline: "Law & Legal Studies",
  },
  {
    title: "PG Diploma in Criminology",
    institution: "University of Madras",
    type: "diploma",
    desc: "Criminal psychology, forensic science, and investigative methodologies.",
    discipline: "Law & Legal Studies",
  },
  {
    title: "Bachelor of Laws (LL.B.)",
    institution: "Tamil Nadu Dr. Ambedkar Law University",
    type: "bachelors",
    desc: "Comprehensive legal education covering civil, criminal, and constitutional law.",
    discipline: "Law & Legal Studies",
  },
  {
    title: "M.A. in Sociology",
    institution: "Madurai Kamaraj University",
    type: "masters",
    desc: "Social stratification, community dynamics, and CSR social impact research.",
    discipline: "Social Sciences & Humanities",
  },
  {
    title: "M.Sc. in Counselling Psychology",
    institution: "Bharathiar University",
    type: "masters",
    desc: "Evidence-based counselling, therapeutic modalities, and psycho-social interventions.",
    discipline: "Psychology & Mental Health",
  },
  {
    title: "PG Diploma in Yoga & Wellness",
    institution: "Kaivalyadhama Yoga Institute",
    type: "diploma",
    desc: "Holistic wellness integration with psychological healing frameworks.",
    discipline: "Psychology & Mental Health",
  },
  {
    title: "Certificate in Cyber Forensics",
    institution: "IIT Madras — Centre for Continuing Education",
    type: "iit",
    desc: "Digital evidence collection, chain of custody, and forensic analysis tools.",
    discipline: "Cyber Security & Digital Forensics",
  },
  {
    title: "Chief Executive Programme",
    institution: "IIM Kozhikode",
    type: "iim",
    desc: "Advanced corporate strategy, leadership, and organizational transformation.",
    discipline: "Business & Leadership",
  },
  {
    title: "PG Diploma in Environmental Law",
    institution: "NALSAR University of Law",
    type: "diploma",
    desc: "Environmental governance, green compliance, and sustainable legal frameworks.",
    discipline: "Law & Legal Studies",
  },
  {
    title: "M.A. in Peace & Conflict Studies",
    institution: "Symbiosis International University",
    type: "masters",
    desc: "Conflict resolution, diplomacy, and international humanitarian law.",
    discipline: "Social Sciences & Humanities",
  },
];

const disciplineGroups: Array<{
  name: string;
  summary: string;
  accent: string;
  items: Degree[];
}> = [
  {
    name: "Psychology & Mental Health",
    summary: "Clinical, counselling, and behavioural sciences.",
    accent: "#d4af37",
    items: degrees.filter((degree) => degree.discipline === "Psychology & Mental Health"),
  },
  {
    name: "Law & Legal Studies",
    summary: "Legal systems, policy, justice, and public governance.",
    accent: "#7dd3fc",
    items: degrees.filter((degree) => degree.discipline === "Law & Legal Studies"),
  },
  {
    name: "Business & Leadership",
    summary: "Management, strategy, and organizational growth.",
    accent: "#a78bfa",
    items: degrees.filter((degree) => degree.discipline === "Business & Leadership"),
  },
  {
    name: "Social Sciences & Humanities",
    summary: "Society, culture, peace, and interdisciplinary inquiry.",
    accent: "#6ee7b7",
    items: degrees.filter((degree) => degree.discipline === "Social Sciences & Humanities"),
  },
  {
    name: "Cyber Security & Digital Forensics",
    summary: "Technology, investigation, and digital evidence practice.",
    accent: "#fca5a5",
    items: degrees.filter((degree) => degree.discipline === "Cyber Security & Digital Forensics"),
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
  const totalDegrees = degrees.length;

  return (
    <div className="min-h-screen grid-bg" style={{ paddingTop: "4rem" }}>
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 40% at 30% 20%, rgba(124,29,53,0.1) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-20">
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
            className="font-elegant text-xl italic max-w-3xl mx-auto"
            style={{ color: "var(--slate)" }}
          >
            An interdisciplinary academic journey spanning psychology, law, leadership,
            technology, and the humanities.
          </p>
        </motion.div>

        <div className="space-y-8 mb-16">
          {disciplineGroups.map((group, groupIndex) => (
            <motion.section
              key={group.name}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 * groupIndex, duration: 0.45 }}
              className="rounded-3xl p-6 lg:p-8"
              style={{
                background: "rgba(14, 22, 38, 0.72)",
                border: `1px solid ${group.accent}40`,
                boxShadow: `0 0 35px ${group.accent}12`,
              }}
            >
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-6">
                <div>
                  <div
                    className="inline-block px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.2em] mb-3"
                    style={{ background: `${group.accent}1a`, color: group.accent }}
                  >
                    Academic Discipline
                  </div>
                  <h2 className="font-display text-3xl font-bold" style={{ color: "var(--off-white)" }}>
                    {group.name}
                  </h2>
                </div>
                <p className="text-sm italic" style={{ color: "rgba(245,242,237,0.7)" }}>
                  {group.summary}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {group.items.map((deg, i) => {
                  const cfg = typeConfig[deg.type];
                  return (
                    <motion.div
                      key={deg.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.08 + i * 0.06, duration: 0.5 }}
                      className="card-glass rounded-xl p-5 hover:scale-[1.02] transition-transform duration-300"
                    >
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
            </motion.section>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 rounded-2xl p-8 text-center"
          style={{
            background: "linear-gradient(135deg, rgba(124,29,53,0.2) 0%, rgba(201,168,76,0.1) 100%)",
            border: "1px solid rgba(201,168,76,0.2)",
          }}
        >
          <div className="font-display text-6xl font-bold gold-text mb-2">{totalDegrees}</div>
          <div
            className="font-elegant text-xl italic"
            style={{ color: "rgba(245,242,237,0.7)" }}
          >
            Academic degrees across psychology, law, leadership, social sciences, and digital forensics
          </div>
        </motion.div>
      </div>
    </div>
  );
}
