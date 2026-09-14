"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

const initiatives = [
  {
    icon: "🧠",
    title: "Suicide Prevention Helpline",
    desc: "Founded and operated one of India's most trusted suicide prevention and deep depression counselling networks, available 24/7 in 6 languages.",
  },
  {
    icon: "🎓",
    title: "Free Career Guidance Programme",
    desc: "Delivered free career counselling workshops to over a million students from rural and urban India across three decades, transforming futures.",
  },
  {
    icon: "🌿",
    title: "Environmental Crusades",
    desc: "Led grassroots environmental campaigns in 15 countries including tree-plantation drives, ocean cleanup missions, and green policy advocacy.",
  },
  {
    icon: "📚",
    title: "63 Published Books",
    desc: "Authored 63 books spanning psychology, law, women empowerment, youth development, spirituality, and environmental science.",
  },
  {
    icon: "⚖️",
    title: "Pro-Bono Legal Aid",
    desc: "Provided free legal counsel to underprivileged women and children in matters of domestic violence, cyber abuse, and civil rights before the Supreme Court.",
  },
  {
    icon: "🏥",
    title: "Rural Mental Health Camps",
    desc: "Organized over 500 free mental health screening camps across Tamil Nadu, Telangana, and Maharashtra, destigmatizing mental wellness.",
  },
  {
    icon: "🌐",
    title: "UN SDG Ambassador",
    desc: "Appointed as a Thought Leader and SDG Ambassador, representing India at international forums on education, gender equality, and climate action.",
  },
  {
    icon: "👩‍💻",
    title: "Women in Tech & Law",
    desc: "Mentored over 5,000 women professionals into technology and legal careers through structured fellowship and sponsorship programmes.",
  },
];

const countries = [
  "India", "USA", "UK", "UAE", "Singapore", "Australia",
  "Kenya", "South Africa", "Germany", "France", "Japan",
  "Canada", "Malaysia", "Sri Lanka", "Mauritius",
];

const books = [
  "Psychology of Healing",
  "Cyber Law Decoded",
  "The Silent Cry",
  "Women & the Constitution",
  "Youth Compass",
  "Green Earth, Green Mind",
  "Supreme Courage",
  "The Integrated Mind",
];

export default function HumanitarianPage() {
  return (
    <div className="min-h-screen grid-bg" style={{ paddingTop: "4rem" }}>
      {/* Background glows */}
      <div className="fixed inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 60% 40% at 20% 60%, rgba(124,29,53,0.12) 0%, transparent 70%)",
      }} />
      <div className="fixed inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 50% 50% at 80% 20%, rgba(201,168,76,0.06) 0%, transparent 70%)",
      }} />

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="accent-line" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "var(--gold)" }}>
              Impact at Scale
            </span>
            <div className="accent-line" />
          </div>
          <h1 className="font-display text-5xl lg:text-6xl font-bold mb-4" style={{ color: "var(--off-white)" }}>
            Humanitarian <span className="gold-text">Impact</span>
          </h1>
          <p className="font-elegant text-xl italic max-w-2xl mx-auto" style={{ color: "var(--slate)" }}>
            Thirty years of turning compassion into action — one life, one community, one country at a time.
          </p>
        </motion.div>

        {/* === BIG METRICS === */}
        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {/* Metric 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="relative rounded-2xl p-8 text-center overflow-hidden"
            style={{
              background: "linear-gradient(145deg, rgba(124,29,53,0.35) 0%, rgba(22,36,71,0.8) 100%)",
              border: "1px solid rgba(168,50,86,0.4)",
              boxShadow: "0 0 60px rgba(124,29,53,0.2)",
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-0.5" style={{
              background: "linear-gradient(90deg, transparent, var(--maroon-light), transparent)",
            }} />
            <div className="text-5xl mb-4">❤️</div>
            <div className="font-display text-6xl font-black mb-2" style={{ color: "var(--off-white)" }}>
              <CountUp target={50000} suffix="+" />
            </div>
            <div className="font-display text-xl font-semibold mb-3 gold-text">Lives Saved</div>
            <p className="text-sm leading-6" style={{ color: "rgba(245,242,237,0.6)" }}>
              Through suicide prevention intervention, deep depression counselling, and crisis support networks operated over 25+ years.
            </p>
          </motion.div>

          {/* Metric 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.7 }}
            className="relative rounded-2xl p-8 text-center overflow-hidden"
            style={{
              background: "linear-gradient(145deg, rgba(201,168,76,0.15) 0%, rgba(22,36,71,0.8) 100%)",
              border: "1px solid rgba(201,168,76,0.3)",
              boxShadow: "0 0 60px rgba(201,168,76,0.1)",
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-0.5" style={{
              background: "linear-gradient(90deg, transparent, var(--gold), transparent)",
            }} />
            <div className="text-5xl mb-4">🎓</div>
            <div className="font-display text-6xl font-black mb-2" style={{ color: "var(--off-white)" }}>
              <CountUp target={1000000} suffix="+" />
            </div>
            <div className="font-display text-xl font-semibold mb-3 gold-text">Students Guided</div>
            <p className="text-sm leading-6" style={{ color: "rgba(245,242,237,0.6)" }}>
              Free career guidance and youth counselling delivered across rural and urban India over 30+ years of selfless service.
            </p>
          </motion.div>

          {/* Metric 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.41, duration: 0.7 }}
            className="relative rounded-2xl p-8 text-center overflow-hidden"
            style={{
              background: "linear-gradient(145deg, rgba(96,165,250,0.1) 0%, rgba(22,36,71,0.8) 100%)",
              border: "1px solid rgba(96,165,250,0.25)",
              boxShadow: "0 0 60px rgba(96,165,250,0.08)",
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-0.5" style={{
              background: "linear-gradient(90deg, transparent, #60a5fa, transparent)",
            }} />
            <div className="text-5xl mb-4">🌍</div>
            <div className="font-display text-6xl font-black mb-2" style={{ color: "var(--off-white)" }}>
              <CountUp target={15} suffix="" />
            </div>
            <div className="font-display text-xl font-semibold mb-3" style={{ color: "#93c5fd" }}>
              Countries Reached
            </div>
            <p className="text-sm leading-6" style={{ color: "rgba(245,242,237,0.6)" }}>
              CSR and environmental crusades spanning 15 nations, plus authorship of <strong style={{ color: "var(--gold-light)" }}>63 published books</strong> on psychology, law & social sciences.
            </p>
          </motion.div>
        </div>

        {/* === INITIATIVES GRID === */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mb-6"
        >
          <h2 className="font-display text-3xl font-bold mb-2" style={{ color: "var(--off-white)" }}>
            Key <span className="gold-text">Initiatives</span>
          </h2>
          <div className="accent-line mb-10" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {initiatives.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 + i * 0.07, duration: 0.5 }}
              className="card-glass rounded-xl p-5 hover:scale-[1.03] transition-transform duration-300"
            >
              <div className="text-2xl mb-3">{item.icon}</div>
              <h3 className="font-display text-sm font-bold mb-2 leading-snug" style={{ color: "var(--off-white)" }}>
                {item.title}
              </h3>
              <p className="text-xs leading-5" style={{ color: "rgba(245,242,237,0.55)" }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* === GLOBAL FOOTPRINT === */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* Countries */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="card-glass rounded-2xl p-8"
          >
            <h3 className="font-display text-2xl font-bold mb-2" style={{ color: "var(--off-white)" }}>
              🌐 Global Footprint
            </h3>
            <p className="text-xs mb-6" style={{ color: "var(--slate)" }}>
              CSR missions and humanitarian campaigns across 15 countries
            </p>
            <div className="flex flex-wrap gap-2">
              {countries.map((c, i) => (
                <motion.span
                  key={c}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.75 + i * 0.04 }}
                  className="px-3 py-1.5 rounded-full text-xs font-medium"
                  style={{
                    background: "rgba(201,168,76,0.1)",
                    border: "1px solid rgba(201,168,76,0.25)",
                    color: "var(--gold-light)",
                  }}
                >
                  {c}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Books */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.75, duration: 0.6 }}
            className="card-glass rounded-2xl p-8"
          >
            <h3 className="font-display text-2xl font-bold mb-2" style={{ color: "var(--off-white)" }}>
              📚 Literary Legacy
            </h3>
            <p className="text-xs mb-6" style={{ color: "var(--slate)" }}>
              63 published books — a selection of titles
            </p>
            <div className="space-y-3">
              {books.map((book, i) => (
                <motion.div
                  key={book}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + i * 0.06 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--gold)" }} />
                  <span className="text-sm" style={{ color: "rgba(245,242,237,0.72)" }}>{book}</span>
                  {i === books.length - 1 && (
                    <span className="text-xs ml-1" style={{ color: "var(--gold)", opacity: 0.6 }}>+55 more</span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Final quote banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="rounded-2xl p-10 text-center"
          style={{
            background: "linear-gradient(135deg, rgba(124,29,53,0.25) 0%, rgba(201,168,76,0.1) 50%, rgba(15,30,60,0.6) 100%)",
            border: "1px solid rgba(201,168,76,0.2)",
          }}
        >
          <div className="text-4xl mb-4">🕊️</div>
          <blockquote
            className="font-elegant text-2xl italic mb-4"
            style={{ color: "rgba(245,242,237,0.75)" }}
          >
            &ldquo;Service is not charity. It is the highest expression of human dignity — offered freely, with no expectation in return.&rdquo;
          </blockquote>
          <cite className="text-xs uppercase tracking-[0.15em] not-italic" style={{ color: "var(--gold)", opacity: 0.7 }}>
            — Dr. Senbagam Raja
          </cite>
        </motion.div>
      </div>
    </div>
  );
}
