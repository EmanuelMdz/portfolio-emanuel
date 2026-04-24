"use client";

import { motion } from "framer-motion";

const stack = [
  { name: "React", svg: <ReactLogo /> },
  { name: "Next.js", svg: <NextLogo /> },
  { name: "TypeScript", svg: <TSLogo /> },
  { name: "Node.js", svg: <NodeLogo /> },
  { name: "Python", svg: <PyLogo /> },
  { name: "tRPC", svg: <TrpcLogo /> },
  { name: "GraphQL", svg: <GraphQLLogo /> },
  { name: "Prisma", svg: <PrismaLogo /> },
  { name: "PostgreSQL", svg: <PgLogo /> },
  { name: "MongoDB", svg: <MongoLogo /> },
  { name: "Redis", svg: <RedisLogo /> },
  { name: "Kafka", svg: <KafkaLogo /> },
  { name: "AWS", svg: <AwsLogo /> },
  { name: "Docker", svg: <DockerLogo /> },
  { name: "Kubernetes", svg: <K8sLogo /> },
  { name: "Terraform", svg: <TerraformLogo /> },
  { name: "Stripe", svg: <StripeLogo /> },
  { name: "Tailwind", svg: <TailwindLogo /> },
  { name: "Vercel", svg: <VercelLogo /> }
];

export default function TechStack() {
  const loop = [...stack, ...stack];

  return (
    <section className="relative pt-2 pb-12">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className="container-page"
      >
        <p className="text-center text-xs uppercase tracking-[0.2em] text-white/40 mb-8">
          Tools & technologies
        </p>

        <div className="relative mask-fade-x overflow-hidden">
          <div className="flex gap-16 animate-marquee w-max">
            {loop.map((t, i) => (
              <div
                key={`${t.name}-${i}`}
                className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity"
                title={t.name}
              >
                <div className="h-8 w-8 flex items-center justify-center">
                  {t.svg}
                </div>
                <span className="text-sm text-white/80">{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ── Inline SVG brand-ish marks (simplified, no network calls) ── */

function ReactLogo() {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7 text-[#61dafb]" fill="none">
      <circle cx="16" cy="16" r="2.4" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="1.3" fill="none">
        <ellipse cx="16" cy="16" rx="11" ry="4.2" />
        <ellipse cx="16" cy="16" rx="11" ry="4.2" transform="rotate(60 16 16)" />
        <ellipse cx="16" cy="16" rx="11" ry="4.2" transform="rotate(120 16 16)" />
      </g>
    </svg>
  );
}
function NextLogo() {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none">
      <circle cx="16" cy="16" r="14" fill="#fff" />
      <path d="M11 10v12M11 10l10 12" stroke="#000" strokeWidth="1.6" />
      <rect x="19.5" y="10" width="1.6" height="8" fill="#000" />
    </svg>
  );
}
function TSLogo() {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7">
      <rect width="32" height="32" rx="4" fill="#3178c6" />
      <path
        d="M9 14h10v2h-4v8h-2v-8H9v-2zm15.5 8.2c.8.5 1.7.8 2.8.8 1.7 0 2.7-.8 2.7-2.1 0-1-.6-1.6-2-2.1l-.7-.3c-.9-.3-1.3-.6-1.3-1.2 0-.5.4-.9 1.2-.9.7 0 1.3.3 1.8.7l1-1.5c-.7-.6-1.6-.9-2.8-.9-1.6 0-2.6.9-2.6 2.1 0 1.1.7 1.7 2 2.1l.7.3c.9.3 1.3.6 1.3 1.2 0 .6-.5 1-1.3 1-.9 0-1.6-.3-2.2-.8l-.9 1.6z"
        fill="#fff"
      />
    </svg>
  );
}
function NodeLogo() {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none">
      <path
        d="M16 2l12 7v14l-12 7L4 23V9l12-7z"
        fill="#3c873a"
        stroke="#2d682b"
      />
      <text
        x="16"
        y="20"
        textAnchor="middle"
        fontSize="8"
        fill="#fff"
        fontWeight="700"
        fontFamily="sans-serif"
      >
        JS
      </text>
    </svg>
  );
}
function TailwindLogo() {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none">
      <path
        d="M8 14c1.5-4 4-6 7.5-6 5 0 5.8 4 8.5 4.5 1.7.3 3.1-.3 4-1.5-1.5 4-4 6-7.5 6-5 0-5.8-4-8.5-4.5-1.7-.3-3.1.3-4 1.5zm-3 9c1.5-4 4-6 7.5-6 5 0 5.8 4 8.5 4.5 1.7.3 3.1-.3 4-1.5-1.5 4-4 6-7.5 6-5 0-5.8-4-8.5-4.5-1.7-.3-3.1.3-4 1.5z"
        fill="#38bdf8"
      />
    </svg>
  );
}
function PgLogo() {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none">
      <circle cx="16" cy="16" r="13" fill="#336791" />
      <text
        x="16"
        y="20"
        textAnchor="middle"
        fontSize="11"
        fill="#fff"
        fontFamily="sans-serif"
        fontWeight="700"
      >
        Pg
      </text>
    </svg>
  );
}
function PrismaLogo() {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none">
      <path d="M10 4l14 20-9 6L6 16 10 4z" fill="#0c344b" stroke="#fff" strokeWidth="0.8" />
    </svg>
  );
}
function DockerLogo() {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7" fill="#1d63ed">
      <rect x="6" y="14" width="3" height="3" />
      <rect x="10" y="14" width="3" height="3" />
      <rect x="14" y="14" width="3" height="3" />
      <rect x="10" y="10" width="3" height="3" />
      <rect x="14" y="10" width="3" height="3" />
      <rect x="18" y="14" width="3" height="3" />
      <path d="M4 18h22c0 4-3 6-7 6H11c-4 0-7-2-7-6z" />
    </svg>
  );
}
function VercelLogo() {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7" fill="#fff">
      <path d="M16 6l12 20H4z" />
    </svg>
  );
}
function PyLogo() {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7">
      <path
        d="M16 3c-4 0-4 2-4 2v3h8v1H9s-4 0-4 5 4 5 4 5h2v-3c0-3 3-3 3-3h7s3 0 3-3V5s0-2-4-2h-4zm-2 2a1 1 0 110 2 1 1 0 010-2z"
        fill="#3776ab"
      />
      <path
        d="M16 29c4 0 4-2 4-2v-3h-8v-1h11s4 0 4-5-4-5-4-5h-2v3c0 3-3 3-3 3h-7s-3 0-3 3v5s0 2 4 2h4zm2-2a1 1 0 110-2 1 1 0 010 2z"
        fill="#ffd43b"
      />
    </svg>
  );
}
function TrpcLogo() {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7">
      <rect width="32" height="32" rx="6" fill="#398ccb" />
      <text
        x="16"
        y="20"
        textAnchor="middle"
        fontSize="8"
        fill="#fff"
        fontWeight="800"
        fontFamily="sans-serif"
      >
        tRPC
      </text>
    </svg>
  );
}
function MongoLogo() {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7">
      <path
        d="M16 3c3 5 6 10 6 15s-3 9-6 11c-3-2-6-6-6-11s3-10 6-15z"
        fill="#47a248"
      />
      <path d="M16 29v-26" stroke="#1f5b1d" strokeWidth="0.8" />
    </svg>
  );
}
function RedisLogo() {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7" fill="#dc382c">
      <ellipse cx="16" cy="9" rx="12" ry="4" />
      <path d="M4 14c0 2.5 5.5 4.5 12 4.5s12-2 12-4.5v4c0 2.5-5.5 4.5-12 4.5S4 20.5 4 18v-4z" />
      <path d="M4 23c0 2.5 5.5 4.5 12 4.5s12-2 12-4.5" fill="none" stroke="#dc382c" strokeWidth="2" />
    </svg>
  );
}
function GraphQLLogo() {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none" stroke="#e10098" strokeWidth="1.3">
      <polygon points="16,4 27,10 27,22 16,28 5,22 5,10" />
      <line x1="16" y1="4" x2="16" y2="28" />
      <line x1="5" y1="10" x2="27" y2="22" />
      <line x1="27" y1="10" x2="5" y2="22" />
      <circle cx="16" cy="4" r="2" fill="#e10098" stroke="none" />
      <circle cx="27" cy="10" r="2" fill="#e10098" stroke="none" />
      <circle cx="27" cy="22" r="2" fill="#e10098" stroke="none" />
      <circle cx="16" cy="28" r="2" fill="#e10098" stroke="none" />
      <circle cx="5" cy="22" r="2" fill="#e10098" stroke="none" />
      <circle cx="5" cy="10" r="2" fill="#e10098" stroke="none" />
    </svg>
  );
}
function KafkaLogo() {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7" fill="#231f20">
      <rect width="32" height="32" rx="4" fill="#231f20" />
      <circle cx="16" cy="8" r="2.5" fill="#fff" />
      <circle cx="10" cy="16" r="2.5" fill="#fff" />
      <circle cx="22" cy="16" r="2.5" fill="#fff" />
      <circle cx="16" cy="24" r="2.5" fill="#fff" />
      <path d="M16 10.5v3M13.5 15L10 12.5M18.5 15L22 12.5M16 21.5v-3M13.5 17L10 19.5M18.5 17L22 19.5" stroke="#fff" strokeWidth="1" />
    </svg>
  );
}
function AwsLogo() {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7">
      <rect width="32" height="32" rx="4" fill="#232f3e" />
      <text
        x="16"
        y="16"
        textAnchor="middle"
        fontSize="8"
        fill="#ff9900"
        fontFamily="sans-serif"
        fontWeight="800"
      >
        aws
      </text>
      <path
        d="M7 22c4 2.5 14 2.5 18 0"
        stroke="#ff9900"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
function K8sLogo() {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7" fill="#326ce5">
      <path d="M16 3l11 6v14l-11 6-11-6V9l11-6z" />
      <path
        d="M16 9v14M10 12l12 8M22 12l-12 8"
        stroke="#fff"
        strokeWidth="1"
        fill="none"
      />
      <circle cx="16" cy="16" r="2.5" fill="#fff" />
    </svg>
  );
}
function TerraformLogo() {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7">
      <path d="M13 6l8 4.5v9L13 15v-9z" fill="#7b42bc" />
      <path d="M22 10.5l7 4v9l-7-4v-9z" fill="#623ce4" />
      <path d="M4 10.5l8 4.5v9l-8-4.5v-9z" fill="#5c4ee5" />
      <path d="M13 16l8 4.5v9L13 25v-9z" fill="#7b42bc" />
    </svg>
  );
}
function StripeLogo() {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7">
      <rect width="32" height="32" rx="6" fill="#635bff" />
      <path
        d="M13.5 11.5c0-.8.7-1.1 1.8-1.1 1.6 0 3.6.5 5.2 1.4V7.4C18.8 6.6 17.2 6.3 15.3 6.3c-4.1 0-6.8 2.1-6.8 5.7 0 5.6 7.6 4.7 7.6 7.1 0 .9-.8 1.2-2 1.2-1.7 0-4-.7-5.8-1.7v4.5c2 .9 4 1.3 5.8 1.3 4.2 0 7.1-2 7.1-5.7-.1-6-7.7-4.9-7.7-7.2z"
        fill="#fff"
      />
    </svg>
  );
}
