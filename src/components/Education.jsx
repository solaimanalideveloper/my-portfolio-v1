"use client";

import {
  BookOpen,
  CalendarDays,
  GraduationCap,
  MapPin,
  Sparkles,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Reveal from "@/components/Reveal";

const educationCards = [
  {
    title: "Diploma in Engineering",
    subtitle: "CST",
    institution: "Kurigram Govd. Polytechnic Institute",
    location: "Kurigram, Dhaka, Bangladesh",
    grade: "Pending...",
    period: "2025-Running",
    keySubjects: [
      "Programming",
      "Data Structures & Algorithms",
      "Database Management",
      "Web Development",
      "Computer Networking",
    ],
  },
  {
    title: "​Newashi Islamia Alim Madrasa Dakhil (Equiv. SSC)",
    subtitle: "Science",
    institution: "​Newashi Islamia Alim Madrasa",
    location: "Newashi, Nageshori, Kurigram, Dhaka, Bangladesh",
    grade: "CGPA-4.72",
    period: "2022-2024",
    keySubjects: ["Mathematics", "Physics", "Chemistry", "Biology", "English"],
  },
];

export default function Education() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="relative isolate overflow-hidden px-5 py-12 sm:px-8 lg:px-12"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-20 [background-image:linear-gradient(to_right,rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]"
      />
      <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[0.7fr_1.7fr] lg:items-center lg:gap-10">
        <div className="max-w-xl">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary sm:text-sm">
              <GraduationCap aria-hidden="true" className="size-4" />
              Academic qualifications
            </p>
            <h2
              id="education-heading"
              className="font-heading mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl"
            >
              Education &amp; Background
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-300">
              Science graduate (Dakhil) with a 4.72 CGPA, currently pursuing a
              Diploma in Engineering (CST).
            </p>
          </Reveal>

          <motion.aside
            initial={shouldReduceMotion ? false : { opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.45 }}
            className="mt-8 rounded-2xl border-l-4 border-primary bg-white/[0.06] p-5 shadow-lg shadow-black/10 backdrop-blur-sm"
          >
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary">
              <BookOpen aria-hidden="true" className="size-4" />
              Continuous learning
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Continuously advancing my skills in modern web technologies and
              AI-driven development to become an AI-Powered Full-Stack Web
              Engineer.
            </p>
          </motion.aside>
        </div>

        <div className="grid gap-5">
          {educationCards.map(
            (
              {
                title,
                subtitle,
                institution,
                location,
                grade,
                period,
                keySubjects,
              },
              index,
            ) => (
              <motion.article
                key={index}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.45,
                  delay: shouldReduceMotion ? 0 : index * 0.12,
                }}
                whileHover={shouldReduceMotion ? undefined : { y: -3 }}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045] p-5 shadow-xl shadow-black/10 backdrop-blur-md transition-colors hover:border-primary/25 hover:bg-white/[0.06] sm:p-7"
              >
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex min-w-0 items-start gap-4">
                    <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                      <GraduationCap aria-hidden="true" className="size-6" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-heading text-xl font-semibold leading-snug text-white sm:text-2xl">
                        {title}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-slate-300">
                        {subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 sm:justify-end">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary">
                      <Sparkles aria-hidden="true" className="size-3.5" />
                      {grade}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-medium text-slate-200">
                      <CalendarDays aria-hidden="true" className="size-3.5" />
                      {period}
                    </span>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-2 rounded-2xl border border-white/10 bg-[#0b1220]/35 px-4 py-3 text-sm text-slate-300 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5">
                  <span className="inline-flex min-w-0 items-center gap-2">
                    <BookOpen
                      aria-hidden="true"
                      className="size-4 shrink-0 text-primary"
                    />
                    <span>{institution}</span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="hidden size-1 rounded-full bg-slate-500 sm:block"
                  />
                  <span className="inline-flex min-w-0 items-center gap-2">
                    <MapPin
                      aria-hidden="true"
                      className="size-4 shrink-0 text-slate-400"
                    />
                    <span>{location}</span>
                  </span>
                </div>

                <div className="mt-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Key subjects &amp; highlights
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {keySubjects.map((subject) => (
                      <li
                        key={subject}
                        className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs text-slate-300"
                      >
                        {subject}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
