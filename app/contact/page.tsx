"use client";

import { motion } from "framer-motion";

const contactDetails = [
  {
    label: "Instagram",
    value: "@dr_senbagam",
    href: "https://www.instagram.com/dr_senbagam?stkn=eHdhaGEzejE1enBm",
    action: "Visit profile",
  },
  {
    label: "Phone Number",
    value: "89251 88048",
    href: "tel:+918925188048",
    action: "Call now",
  },
  {
    label: "Mail ID",
    value: "senbagamrajajd@gmail.com",
    href: "mailto:senbagamrajajd@gmail.com",
    action: "Send an email",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen grid-bg" style={{ paddingTop: "4rem" }}>
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 45% at 30% 15%, rgba(124,29,53,0.16) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-20">
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
              Stay Connected
            </span>
            <div className="accent-line" />
          </div>
          <h1
            className="font-display text-5xl lg:text-6xl font-bold mb-4"
            style={{ color: "var(--off-white)" }}
          >
            Contact <span className="gold-text">Information</span>
          </h1>
          <p
            className="font-elegant text-xl italic max-w-2xl mx-auto"
            style={{ color: "var(--slate)" }}
          >
            Reach out through the channel that works best for you.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {contactDetails.map((detail, index) => (
            <motion.a
              key={detail.label}
              href={detail.href}
              target={detail.href.startsWith("http") ? "_blank" : undefined}
              rel={detail.href.startsWith("http") ? "noreferrer" : undefined}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + index * 0.1, duration: 0.55 }}
              className="card-glass rounded-2xl p-7 transition-transform duration-200 hover:-translate-y-1"
            >
              <span
                className="text-[10px] font-semibold uppercase tracking-[0.18em]"
                style={{ color: "var(--gold)" }}
              >
                {detail.label}
              </span>
              <p
                className="font-display text-xl font-semibold mt-4 break-words"
                style={{ color: "var(--off-white)" }}
              >
                {detail.value}
              </p>
              <span
                className="inline-block text-xs uppercase tracking-[0.14em] mt-8"
                style={{ color: "var(--gold-light)" }}
              >
                {detail.action} <span aria-hidden="true">-&gt;</span>
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}