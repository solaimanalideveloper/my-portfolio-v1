"use client";

import {
  Atom,
  Binary,
  Blocks,
  Braces,
  Brain,
  CircleDollarSign,
  CodeXml,
  Component,
  CreditCard,
  Database,
  FileCode2,
  FlaskConical,
  Hexagon,
  KeyRound,
  Layers3,
  Paintbrush,
  PanelsTopLeft,
  PlugZap,
  Route,
  Server,
  ShieldCheck,
  Sparkles,
  Triangle,
  WalletCards,
  WandSparkles,
  Wind,
  Workflow,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import {
  SiBetterauth,
  SiCss,
  SiExpress,
  SiHeroui,
  SiHtml5,
  SiJavascript,
  SiMongoose,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiShadcnui,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { useState } from "react";

const skillGroups = [
  {
    title: "Foundation",
    icon: Layers3,
    skills: [
      { name: "HTML5", icon: SiHtml5, iconColor: "#e34f26" },
      { name: "CSS3", icon: SiCss, iconColor: "#1572b6" },
      {
        name: "JavaScript (Basic)",
        icon: SiJavascript,
        iconColor: "#f7df1e",
      },
      { name: "ES6 + Problem Solving", icon: Brain },
    ],
  },
  {
    title: "Frontend",
    icon: Braces,
    skills: [
      { name: "React (Basic)", icon: SiReact, iconColor: "#61dafb" },
      { name: "Tailwind CSS", icon: SiTailwindcss, iconColor: "#06b6d4" },
      {
        name: "TypeScript Basic + OOP",
        icon: SiTypescript,
        iconColor: "#3178c6",
        badge: "NEW",
      },
      { name: "Next.js", icon: SiNextdotjs, iconColor: "#ffffff" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", icon: SiNodedotjs, iconColor: "#5fa04e" },
      { name: "Express.js", icon: SiExpress, iconColor: "#ffffff" },
      { name: "Modular Pattern", icon: Blocks, badge: "NEW" },
      { name: "API Integration", icon: PlugZap },
    ],
  },
  {
    title: "Database",
    icon: Database,
    skills: [
      { name: "MongoDB", icon: SiMongodb, iconColor: "#47a248" },
      {
        name: "Mongoose / ODM",
        icon: SiMongoose,
        iconColor: "#880000",
        badge: "NEW",
      },
    ],
  },
  {
    title: "UI Libraries",
    icon: PanelsTopLeft,
    skills: [
      { name: "Hero UI", icon: SiHeroui, iconColor: "#ffffff", badge: "NEW" },
      {
        name: "shadcn/ui",
        icon: SiShadcnui,
        iconColor: "#ffffff",
        badge: "NEW",
      },
    ],
  },
  {
    title: "Auth & Security",
    icon: ShieldCheck,
    skills: [
      {
        name: "BetterAuth",
        icon: SiBetterauth,
        iconColor: "#ffffff",
        badge: "NEW",
      },
      { name: "Role-Based Access Control", icon: ShieldCheck, badge: "ADV" },
    ],
  },
  {
    title: "Advanced Concepts",
    icon: Sparkles,
    skills: [
      { name: "DOM vs BOM", icon: Binary },
      { name: "AI Mindset Development", icon: Brain, badge: "NEW" },
      { name: "AI Integration", icon: Sparkles, badge: "NEW" },
      { name: "AI-Assisted Coding", icon: WandSparkles, badge: "NEW" },
    ],
  },
  {
    title: "Payment & Testing",
    icon: CreditCard,
    skills: [
      {
        name: "Stripe",
        icon: SiStripe,
        iconColor: "#635bff",
        badge: "NEW",
      },
      { name: "SSLCommerz", icon: WalletCards, badge: "NEW" },
      { name: "Introduction to Testing", icon: FlaskConical, badge: "NEW" },
    ],
  },
];

const skillCategories = ["All Skills", ...skillGroups.map(({ title }) => title)];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All Skills");
  const shouldReduceMotion = useReducedMotion();
  const visibleSkills = skillGroups.flatMap(({ title, skills }) =>
    activeCategory === "All Skills" || title === activeCategory
      ? skills.map((skill) => ({ ...skill, category: title }))
      : [],
  );

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative isolate overflow-hidden px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/4 -z-10 size-[30rem] rounded-full bg-blue-500/10 blur-[110px]"
      />

      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-8 max-w-2xl sm:mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Skills &amp; capabilities
          </p>
          <h2
            id="skills-heading"
            className="font-heading mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl"
          >
          Skills
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-400">
            Technologies and tools I use to turn ideas into working
            applications.
          </p>
        </div>

        <div
          aria-label="Filter skills by category"
          className="mb-6 flex snap-x gap-2 overflow-x-auto pb-2"
        >
          {skillCategories.map((category) => (
            <button
              key={category}
              type="button"
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                activeCategory === category
                  ? "border-primary/50 bg-primary text-primary-foreground"
                  : "border-white/10 bg-white/[0.04] text-slate-300 hover:border-white/20 hover:bg-white/[0.08]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-4"
        >
          {visibleSkills.map(
            ({ name, icon: SkillIcon, iconColor, badge, category }, index) => (
              <motion.article
                key={name}
                layout
                initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.35,
                  delay: shouldReduceMotion ? 0 : (index % 4) * 0.05,
                }}
                whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                className="group flex min-h-44 flex-col rounded-2xl border border-white/10 bg-[#151d2b]/80 p-4 shadow-lg shadow-black/10 transition-colors hover:border-primary/30 hover:bg-[#192438]/90 sm:min-h-48 sm:p-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-colors group-hover:border-primary/40 group-hover:bg-primary/15">
                    <SkillIcon
                      aria-hidden="true"
                      className={`size-5 ${iconColor ? "" : "text-primary"}`}
                      style={iconColor ? { color: iconColor } : undefined}
                    />
                  </span>
                  {badge && (
                    <span
                      className={`rounded-full border px-2 py-1 text-[0.625rem] font-semibold leading-none ${
                        badge === "ADV"
                          ? "border-violet-400/25 bg-violet-400/10 text-violet-200"
                          : "border-emerald-400/25 bg-emerald-400/10 text-emerald-200"
                      }`}
                    >
                      {badge}
                    </span>
                  )}
                </div>

                <h3 className="font-heading mt-4 text-base font-semibold leading-snug text-white sm:text-lg">
                  {name}
                </h3>

                <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-3 text-xs text-slate-400">
                  <span>{category}</span>
                  <span
                    aria-hidden="true"
                    className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.65)]"
                  />
                </div>
              </motion.article>
            ),
          )}
        </motion.div>
      </div>
    </section>
  );
}
