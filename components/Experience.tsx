"use client";

import { motion } from "framer-motion";

type Role = {
  period: string;
  role: string;
  company: string;
  location?: string;
  bullets: string[];
};

const roles: Role[] = [
  {
    period: "2022 — 2025",
    role: "Full-Stack Software Engineer",
    company: "Ainnovate",
    location: "Remote · Uruguay",
    bullets: [
      "Built scalable multi-tenant SaaS applications using Next.js 14, Supabase, Prisma and tRPC.",
      "Developed end-to-end features integrating React, TypeScript, PostgreSQL and Node.js.",
      "Architected data models with Row Level Security (RLS) for multi-tenant systems, ensuring full data isolation.",
      "Implemented payment, messaging and notification flows integrating Stripe, Twilio and Resend.",
      "Designed and deployed CI/CD pipelines to automate testing and shorten release cycles.",
      "Mentored junior developers and contributed to internal documentation and engineering best practices."
    ]
  },
  {
    period: "2019 — Present",
    role: "Back-End Engineer",
    company: "Vibe Software Factory (VSF)",
    location: "Remote · United States",
    bullets: [
      "Designed and developed RESTful APIs and backend services with Node.js, Express, TypeScript and Python.",
      "Built scalable systems on PostgreSQL, MongoDB and Redis, applying Domain-Driven Design and clean architecture.",
      "Implemented event-driven workflows and background job processing with Inngest and queue-based systems.",
      "Optimized database queries and indexing strategies, significantly reducing API response times.",
      "Built authentication and authorization systems with JWT, OAuth and role-based access control.",
      "Collaborated with distributed international teams across multiple time zones on tight delivery cycles."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-14 flex flex-col items-center text-center"
        >
          <span className="glass-pill px-3 py-1 text-xs uppercase tracking-widest text-white/60 mb-5">
            Experience
          </span>
          <h2 className="section-title text-gradient">Where I&apos;ve shipped</h2>
          <p className="muted mt-4 max-w-xl">
            5+ years building production systems across SaaS, backend services
            and AI-powered products for local and international teams.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent" />

          <div className="flex flex-col gap-12">
            {roles.map((r, i) => (
              <motion.div
                key={r.company}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="relative pl-12"
              >
                <div className="absolute left-[11px] top-2 h-2.5 w-2.5 rounded-full bg-accent-blue shadow-[0_0_14px_rgba(76,139,255,0.9)]" />
                <div className="text-xs uppercase tracking-[0.2em] text-white/40">
                  {r.period}
                </div>
                <h3 className="mt-2 text-xl font-semibold text-white">
                  {r.role}
                </h3>
                <div className="text-sm text-white/60">
                  {r.company}
                  {r.location && (
                    <span className="text-white/40"> · {r.location}</span>
                  )}
                </div>
                <ul className="mt-4 space-y-2">
                  {r.bullets.map((b) => (
                    <li
                      key={b}
                      className="relative pl-5 text-sm text-white/65 leading-relaxed"
                    >
                      <span className="absolute left-0 top-[9px] h-1 w-1 rounded-full bg-white/40" />
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
