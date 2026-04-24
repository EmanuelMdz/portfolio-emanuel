"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }
  })
};

const titleLine1 = "Engineered for scale,".split(" ");
const titleLine2 = "built to ship.".split(" ");

export default function Hero() {
  return (
    <section className="relative pt-16 pb-16 md:pt-24 md:pb-20">
      <div className="relative container-page flex flex-col items-center text-center">
        {/* Avatar */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          custom={0}
          className="relative"
        >
          <div className="relative">
            <div className="absolute inset-0 -m-2 rounded-full bg-[radial-gradient(circle,_rgba(76,139,255,0.5),_transparent_70%)] blur-xl animate-pulse-glow" />
            <div className="relative h-[140px] w-[140px] md:h-[160px] md:w-[160px] rounded-full ring-1 ring-white/15 overflow-hidden shadow-2xl">
              <Image
                src="/emanuel.png"
                alt="Emanuel Mendoza"
                fill
                sizes="(min-width: 768px) 160px, 140px"
                priority
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Headline — word-by-word blur reveal */}
        <h1 className="mt-14 text-balance text-[44px] leading-[1.25] md:text-[68px] md:leading-[1.22] tracking-tight pb-3">
          <span className="block font-thin">
            {titleLine1.map((w, i) => (
              <Word key={`a-${i}`} delay={0.25 + i * 0.07}>
                {w}
              </Word>
            ))}
          </span>
          <span className="block font-semibold">
            {titleLine2.map((w, i) => (
              <Word
                key={`b-${i}`}
                delay={0.25 + (titleLine1.length + i) * 0.07}
              >
                {w}
              </Word>
            ))}
          </span>
        </h1>

        {/* Subcopy */}
        <motion.p
          initial="hidden"
          animate="show"
          variants={fadeUp}
          custom={6}
          className="mt-6 max-w-xl text-base md:text-lg text-white/60 text-balance"
        >
          I&apos;m Emanuel Mendoza — a Full-Stack Software Engineer with 5+ years
          shipping multi-tenant SaaS, AI-powered products and backend services
          for startups and international teams.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          custom={7}
          className="mt-10 flex flex-col sm:flex-row items-center gap-3"
        >
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=emanuelmendozamori16@gmail.com&su=Let%27s%20work%20together"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary group"
          >
            Let&apos;s talk
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#case-studies" className="btn-ghost">
            View selected work
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function Word({ children, delay }: { children: string; delay: number }) {
  // Two-layer setup: outer applies transform, inner applies filter — this way
  // the gradient text on the inner span is not killed by filter stacking.
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      className="inline-block mr-[0.25em]"
    >
      <motion.span
        initial={{ filter: "blur(14px)" }}
        animate={{ filter: "blur(0px)" }}
        transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
        className="inline-block text-gradient"
      >
        {children}
      </motion.span>
    </motion.span>
  );
}
