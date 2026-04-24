"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="relative py-24 border-t border-border-subtle">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-gradient text-balance">
            Let&apos;s build <br className="hidden md:block" /> something great.
          </h2>
          <p className="muted mt-5 max-w-md">
            Open to senior engineering roles and freelance work. I usually
            reply within 24 hours.
          </p>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=emanuelmendozamori16@gmail.com&su=Let%27s%20work%20together"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-10 group"
          >
            emanuelmendozamori16@gmail.com
            <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <div className="mt-10 flex items-center gap-3">
            <SocialLink href="https://github.com/EmanuelMdz" label="GitHub">
              <Github className="h-4 w-4" />
            </SocialLink>
            <SocialLink
              href="https://linkedin.com/in/emendoza-ainnovate"
              label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </SocialLink>
            <SocialLink
              href="https://mail.google.com/mail/?view=cm&fs=1&to=emanuelmendozamori16@gmail.com&su=Let%27s%20work%20together"
              label="Email"
            >
              <Mail className="h-4 w-4" />
            </SocialLink>
          </div>
        </motion.div>

        <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-border-subtle pt-8 text-xs text-white/40">
          <span>© {new Date().getFullYear()} Emanuel Mendoza. All rights reserved.</span>
          <span>Built with Next.js, Tailwind and Framer Motion.</span>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="glass-pill flex h-10 w-10 items-center justify-center text-white/70 transition-colors hover:text-white"
    >
      {children}
    </a>
  );
}
