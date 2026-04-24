"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "What kind of projects do you take on?",
    a: "Multi-tenant SaaS platforms, AI-powered products, internal tooling and backend services. I architect the data model, ship features end-to-end and set up the infrastructure — from Supabase RLS to tRPC APIs and background jobs."
  },
  {
    q: "Do you work with existing teams or solo?",
    a: "Both. I integrate with product and design teams in sprint planning, code reviews and roadmap definition, or I lead the build end-to-end when there's no in-house engineering team yet."
  },
  {
    q: "What's your core stack?",
    a: "React, Next.js 14+, TypeScript, tRPC, Prisma, Supabase and PostgreSQL on the frontend/platform side. Node.js, Express, Python, MongoDB and Redis on the backend. Docker, CI/CD and observability on the infrastructure side."
  },
  {
    q: "Are you available for US-based teams?",
    a: "Yes — I've been working remotely with US clients since 2019 at VSF, with native-level English and overlap on Eastern/Central time zones."
  }
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 md:py-32">
      <div className="container-page max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-12 flex flex-col items-center text-center"
        >
          <span className="glass-pill px-3 py-1 text-xs uppercase tracking-widest text-white/60 mb-5">
            FAQ
          </span>
          <h2 className="section-title text-gradient">Frequently asked</h2>
        </motion.div>

        <div className="flex flex-col gap-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="rounded-2xl border border-border-subtle bg-white/[0.02] backdrop-blur-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-white font-medium">{f.q}</span>
                  <Plus
                    className={`h-5 w-5 text-white/60 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-white/65 leading-relaxed">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
