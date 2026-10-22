"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TeamPage() {
  return (
    <div className="min-h-screen grid-bg" style={{ paddingTop: "4rem" }}>
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 45% at 70% 15%, rgba(124,29,53,0.16) 0%, transparent 70%)",
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
              Leadership &amp; Collaboration
            </span>
            <div className="accent-line" />
          </div>
          <h1
            className="font-display text-5xl lg:text-6xl font-bold mb-4"
            style={{ color: "var(--off-white)" }}
          >
            My <span className="gold-text">Team</span>
          </h1>
          <p
            className="font-elegant text-xl italic max-w-2xl mx-auto"
            style={{ color: "var(--slate)" }}
          >
            The people who bring dedication, learning, and purposeful leadership
            to the work we do together.
          </p>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="relative overflow-hidden rounded-2xl p-8 md:p-12"
          style={{
            background:
              "linear-gradient(135deg, rgba(22,36,71,0.96) 0%, rgba(15,30,60,0.9) 100%)",
            border: "1px solid rgba(201,168,76,0.28)",
            boxShadow: "0 25px 70px rgba(0,0,0,0.25)",
          }}
        >
          <div
            className="absolute -right-20 -top-24 h-64 w-64 rounded-full opacity-20"
            style={{ background: "var(--gold)" }}
          />

          <div className="relative grid lg:grid-cols-[1fr_260px] gap-10 items-center">
            <div>
              <span
                className="inline-block px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.18em] mb-5"
                style={{
                  color: "var(--gold-light)",
                  background: "rgba(201,168,76,0.12)",
                  border: "1px solid rgba(201,168,76,0.25)",
                }}
              >
                Team member
              </span>
              <h2
                className="font-display text-4xl md:text-5xl font-bold mb-3"
                style={{ color: "var(--off-white)" }}
              >
                Krishnamoorthy
              </h2>
              <p
                className="font-elegant text-2xl mb-6"
                style={{ color: "var(--gold-light)" }}
              >
                Junior Manager & Personal Secretary
              </p>
              <p
                className="max-w-2xl text-sm md:text-base leading-7"
                style={{ color: "rgba(245,242,237,0.72)" }}
              >
                 He supports the work with a thoughtful, organised, and forward-looking approach.
              </p>
            </div>

            <div
              className="relative mx-auto h-64 w-full max-w-[260px] overflow-hidden rounded-2xl"
              style={{
                border: "1px solid rgba(201,168,76,0.5)",
                boxShadow: "0 0 0 10px rgba(201,168,76,0.06), 0 20px 40px rgba(0,0,0,0.25)",
              }}
            >
              <Image
                src="/krishnamoorthy.png"
                alt="Krishnamoorthy, Junior Manager"
                fill
                sizes="(max-width: 1024px) 260px, 260px"
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
}