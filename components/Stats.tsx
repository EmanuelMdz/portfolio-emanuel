"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Stat = {
  value: number;
  suffix: string;
  label: string;
  sub: string;
};

const stats: Stat[] = [
  { value: 5, suffix: "+", label: "Years shipping", sub: "Production code since 2019" },
  { value: 20, suffix: "+", label: "Products delivered", sub: "SaaS, dashboards & APIs" },
  { value: 2, suffix: "", label: "Continents", sub: "LATAM & US clients" },
  { value: 99, suffix: "%", label: "On-time delivery", sub: "Across sprint cycles" }
];

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-16 md:py-24">
      <div className="container-page">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden rounded-3xl border border-border-subtle bg-border-subtle">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="relative bg-white/[0.025] backdrop-blur-sm p-6 md:p-8 group overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(76,139,255,0.08),_transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="text-4xl md:text-5xl font-semibold tracking-tight text-white flex items-baseline">
                  <Counter target={s.value} active={inView} />
                  <span>{s.suffix}</span>
                </div>
                <div className="mt-3 text-sm text-white/80 font-medium">
                  {s.label}
                </div>
                <div className="mt-1 text-xs text-white/45">{s.sub}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ target, active }: { target: number; active: boolean }) {
  const [display, setDisplay] = useState(0);
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 60, damping: 18, mass: 1 });

  useEffect(() => {
    if (active) motionValue.set(target);
  }, [active, target, motionValue]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => setDisplay(Math.round(v)));
    return () => unsub();
  }, [spring]);

  return <span>{display}</span>;
}
