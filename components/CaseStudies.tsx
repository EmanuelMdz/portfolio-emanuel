"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate
} from "framer-motion";
import { ArrowUpRight, Lock } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

type ArtKind =
  | "dashboard"
  | "analytics"
  | "chat"
  | "desktop"
  | "mobile"
  | "api";

type Project = {
  title: string;
  company: string;
  role: string;
  period: string;
  stack: string[];
  description: string;
  accent: string;
  art: ArtKind;
  image?: string;
  imageAlt?: string;
  link?: string;
  isPrivate?: boolean;
};

const projects: Project[] = [
  {
    title: "Moka — AI Marketing Director",
    company: "Ainnovate",
    role: "Tech Lead · Full-Stack Engineer",
    period: "2024 — 2025",
    stack: ["Next.js 16", "React 19", "TypeScript", "Supabase", "shadcn/ui", "Tailwind 4"],
    description:
      "Led the end-to-end development of an analytics platform that merges quantitative metrics, qualitative data and AI-powered insights into a single marketing operation for creators and personal brands.",
    accent: "from-blue-500/30 via-indigo-400/10 to-transparent",
    art: "analytics",
    image: "/moka-dashboard.png",
    imageAlt: "Moka dashboard showing audience reach, engagement and revenue analytics",
    link: "https://www.usemoka.io/"
  },
  {
    title: "Konnecta CRM — Agency Platform",
    company: "Ainnovate",
    role: "Senior Full-Stack Engineer",
    period: "2023 — 2024",
    stack: ["Next.js 14", "tRPC", "Prisma", "Supabase", "Inngest", "React Query"],
    description:
      "Architected and shipped a multi-tenant CRM for marketing agencies with Row Level Security, type-safe APIs end-to-end via tRPC, background job orchestration with Inngest and real-time pipeline analytics.",
    accent: "from-violet-500/25 via-fuchsia-400/10 to-transparent",
    art: "dashboard",
    image: "/ainnovate-dashboard.png",
    imageAlt: "Konnecta CRM agency dashboard showing conversations, campaigns and pipeline analytics",
    isPrivate: true
  },
  {
    title: "Oliver — Conversational AI Backend",
    company: "Vibe Software Factory",
    role: "Back-End Engineer",
    period: "2024",
    stack: ["Node.js", "TypeScript", "Anthropic Claude", "Twilio", "Supabase", "node-cron"],
    description:
      "Designed and built a conversational backend service powering a WhatsApp personal assistant. Integrates Claude AI, Google Calendar, Notion and scheduled jobs, handling tool-use orchestration and message state for a US-based client.",
    accent: "from-emerald-400/25 via-cyan-400/10 to-transparent",
    art: "chat",
    isPrivate: true
  },
  {
    title: "GhostDM — Instagram Outbound App",
    company: "Ainnovate",
    role: "Full-Stack Engineer",
    period: "2024",
    stack: ["Electron", "Node.js", "TypeScript", "Auto-updater", "Windows"],
    description:
      "Shipped a native Windows desktop app for Instagram outbound automation: multi-account management, warmup, proxies, lead lists and real-time campaign monitoring — with auto-update pipeline and code signing for production users.",
    accent: "from-amber-400/20 via-orange-500/10 to-transparent",
    art: "desktop",
    image: "/ghostdm-dashboard.png",
    imageAlt: "GhostDM desktop app dashboard showing connected Instagram accounts, campaigns and activity metrics",
    link: "https://www.ghostdm.app/"
  },
  {
    title: "GymBro — Fitness Tracking PWA",
    company: "Vibe Software Factory",
    role: "Full-Stack Engineer",
    period: "2023",
    stack: ["React 19", "Vite", "Tailwind 4", "Supabase", "Recharts", "PWA"],
    description:
      "Delivered a mobile-first Progressive Web App for workout tracking with offline support, installable on any device, featuring analytics charts, daily challenges and persistent workout history synced to Supabase.",
    accent: "from-lime-400/20 via-emerald-500/10 to-transparent",
    art: "mobile",
    image: "/gymbro-app.png",
    imageAlt: "GymBro mobile app showing daily challenge, steps tracker and calorie goals",
    link: "https://github.com/EmanuelMdz/GymBroApp"
  }
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="relative py-24 md:py-32">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-14 flex flex-col items-center text-center"
        >
          <span className="glass-pill px-3 py-1 text-xs uppercase tracking-widest text-white/60 mb-5">
            Case Studies
          </span>
          <h2 className="section-title text-gradient">Selected work</h2>
          <p className="muted mt-4 max-w-xl">
            A handful of products I&apos;ve architected and shipped end-to-end
            across multi-tenant SaaS, AI-powered services and customer-facing
            apps.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const hasLink = Boolean(project.link);
  const cardRef = useRef<HTMLElement>(null);

  // 3D tilt: map mouse position to rotateX / rotateY
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { stiffness: 180, damping: 18, mass: 0.6 };
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [6, -6]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-8, 8]), springConfig);
  const glareX = useTransform(mouseX, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(mouseY, [0, 1], ["0%", "100%"]);
  const glareBg = useMotionTemplate`radial-gradient(600px circle at ${glareX} ${glareY}, rgba(255,255,255,0.08), transparent 55%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        transformPerspective: 1200
      }}
      className="group relative overflow-hidden rounded-3xl border border-border-subtle bg-bg-card/80 backdrop-blur-sm shadow-card flex flex-col will-change-transform"
    >
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.accent} opacity-40 group-hover:opacity-60 transition-opacity duration-700`}
      />

      {/* Mouse glare — a soft highlight that follows cursor */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[1]"
        style={{ background: glareBg }}
      />

      {/* Art */}
      <div className="relative h-44 md:h-52 overflow-hidden border-b border-white/5 bg-black/40">
        {project.image ? (
          <>
            <Image
              src={project.image}
              alt={project.imageAlt ?? project.title}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </>
        ) : (
          <PreviewArt art={project.art} />
        )}
      </div>

      {/* Body */}
      <div className="relative flex flex-1 flex-col p-6 md:p-7">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-white/50">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-blue shadow-[0_0_10px_rgba(76,139,255,0.8)]" />
            {project.company}
          </div>
          <span className="text-[11px] uppercase tracking-widest text-white/40">
            {project.period}
          </span>
        </div>

        <h3 className="mt-3 text-xl md:text-[22px] font-semibold tracking-tight text-white">
          {project.title}
        </h3>
        <div className="mt-1 text-sm text-white/50">{project.role}</div>

        <p className="muted mt-4 text-sm leading-relaxed">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-white/70"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between">
          {hasLink ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-white/80 hover:text-white transition-colors"
            >
              {project.link!.includes("github.com") ? "View repository" : "View web"}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-xs text-white/40">
              <Lock className="h-3.5 w-3.5" />
              Private — company property
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function PreviewArt({ art }: { art: Project["art"] }) {
  if (art === "dashboard") {
    return (
      <div className="absolute inset-0 p-5">
        <div className="h-full w-full rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 p-4 border border-white/5">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-2 w-2 rounded-full bg-red-400/70" />
            <div className="h-2 w-2 rounded-full bg-amber-400/70" />
            <div className="h-2 w-2 rounded-full bg-emerald-400/70" />
            <div className="ml-auto h-1.5 w-24 rounded-full bg-white/10" />
          </div>
          {[88, 62, 74, 50].map((w, i) => (
            <div
              key={i}
              className="my-1.5 h-2 rounded-full bg-white/10"
              style={{ width: `${w}%` }}
            />
          ))}
          <div className="mt-3 grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="h-10 rounded-lg border border-white/5 bg-gradient-to-br from-blue-500/20 to-transparent"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (art === "analytics") {
    return (
      <div className="absolute inset-0 flex items-end justify-center gap-2 p-6">
        {[40, 65, 30, 80, 55, 90, 45, 70, 60, 95, 35].map((h, i) => (
          <div
            key={i}
            className="w-3 rounded-t-md bg-gradient-to-t from-blue-500/40 via-indigo-400/60 to-cyan-300/80"
            style={{ height: `${h}%` }}
          />
        ))}
        <div className="absolute inset-x-6 bottom-6 h-px bg-white/15" />
      </div>
    );
  }

  if (art === "chat") {
    return (
      <div className="absolute inset-0 flex flex-col justify-end gap-2 p-6">
        <div className="max-w-[60%] rounded-2xl rounded-bl-sm bg-white/10 px-3 py-2 text-xs text-white/70">
          Remind me to call mom tomorrow at 6pm
        </div>
        <div className="max-w-[70%] self-end rounded-2xl rounded-br-sm bg-emerald-500/20 border border-emerald-400/20 px-3 py-2 text-xs text-white/90">
          Done — I&apos;ll ping you tomorrow at 17:55 ✨
        </div>
        <div className="max-w-[40%] rounded-2xl rounded-bl-sm bg-white/10 px-3 py-2 text-xs text-white/70">
          Thanks!
        </div>
      </div>
    );
  }

  if (art === "desktop") {
    return (
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <div className="w-full max-w-[260px] rounded-xl border border-white/10 bg-black/60 shadow-2xl overflow-hidden">
          <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/5 px-3 py-2">
            <div className="h-2 w-2 rounded-full bg-red-400/70" />
            <div className="h-2 w-2 rounded-full bg-amber-400/70" />
            <div className="h-2 w-2 rounded-full bg-emerald-400/70" />
          </div>
          <div className="p-3 space-y-2">
            <div className="h-1.5 w-3/4 rounded-full bg-white/20" />
            <div className="h-1.5 w-1/2 rounded-full bg-white/10" />
            <div className="mt-3 h-16 rounded-md bg-gradient-to-br from-amber-400/20 to-orange-500/10 border border-white/5" />
            <div className="h-1.5 w-2/3 rounded-full bg-white/10" />
          </div>
        </div>
      </div>
    );
  }

  if (art === "mobile") {
    return (
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <div className="relative h-40 w-24 rounded-[22px] border border-white/10 bg-black/70 p-2 shadow-2xl">
          <div className="absolute left-1/2 top-1 h-1 w-8 -translate-x-1/2 rounded-full bg-white/20" />
          <div className="mt-4 h-2 rounded-full bg-white/15" />
          <div className="mt-2 h-2 w-2/3 rounded-full bg-white/10" />
          <div className="mt-3 h-14 rounded-md bg-gradient-to-br from-pink-400/30 to-rose-500/10 border border-white/5" />
          <div className="mt-2 flex gap-1">
            <div className="h-6 flex-1 rounded bg-white/10" />
            <div className="h-6 flex-1 rounded bg-white/10" />
          </div>
        </div>
      </div>
    );
  }

  // api
  return (
    <div className="absolute inset-0 flex items-center justify-center p-6">
      <pre className="w-full rounded-lg border border-white/10 bg-black/70 p-4 text-[10px] leading-snug text-emerald-300/90 overflow-hidden">
        <code>
          {`POST /api/v1/messages
{
  "user": "+1555...",
  "intent": "remind",
  "payload": { ... }
}

→ 200 OK  ·  12ms`}
        </code>
      </pre>
    </div>
  );
}
