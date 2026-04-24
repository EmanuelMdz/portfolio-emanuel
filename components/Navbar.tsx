"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const links = [
  { href: "#case-studies", label: "Case Studies" },
  { href: "#experience", label: "Experience" },
  { href: "#blog", label: "Blog" },
  { href: "#faq", label: "FAQ" }
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 z-50 w-full bg-bg-base/25 backdrop-blur-xl border-b border-white/[0.05]"
    >
      <div className="container-page flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2 group" aria-label="Inicio">
          <Logo />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#contact"
          className="glass-pill px-5 py-2 text-sm font-medium text-white transition-transform hover:scale-[1.03]"
        >
          Get in Touch
        </Link>
      </div>
    </motion.header>
  );
}

function Logo() {
  return (
    <div className="relative">
      <svg
        width="34"
        height="34"
        viewBox="0 0 40 40"
        fill="none"
        className="transition-transform group-hover:rotate-12"
      >
        <path
          d="M10 12C10 9 12.5 6.5 15.5 6.5C18.5 6.5 21 9 21 12V20C21 23 18.5 25.5 15.5 25.5C12.5 25.5 10 23 10 20V12Z"
          fill="white"
          opacity="0.9"
        />
        <path
          d="M19 20C19 17 21.5 14.5 24.5 14.5C27.5 14.5 30 17 30 20V28C30 31 27.5 33.5 24.5 33.5C21.5 33.5 19 31 19 28V20Z"
          fill="white"
          opacity="0.55"
        />
      </svg>
    </div>
  );
}
