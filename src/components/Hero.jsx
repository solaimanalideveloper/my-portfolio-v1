import Image from "next/image";
import { ArrowRight, Download, Eye } from "lucide-react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa6";

const socialProfiles = [
  {
    name: "GitHub",
    href: "https://github.com/solaimanalideveloper",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/md-solaiman-ali",
    icon: FaLinkedinIn,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/md.solaiman.ali.161285",
    icon: FaFacebookF,
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden px-5 pb-20 pt-24 sm:px-8 sm:pb-24 sm:pt-28 lg:min-h-[calc(100svh-5rem)] lg:px-12 lg:pb-28 lg:pt-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-25 [background-image:linear-gradient(to_right,rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-20 -z-10 size-[30rem] rounded-full bg-blue-500/10 blur-[110px] sm:right-0"
      />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 md:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="order-2 max-w-2xl md:order-1">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <span
              aria-hidden="true"
              className="size-2 rounded-full bg-primary shadow-[0_0_14px_var(--primary)]"
            />
            Available for Freelance & Key Projects
          </p>

          <h1
            id="hero-heading"
            className="font-heading mt-7 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            SOLAIMAN
          </h1>
          <p className="font-heading mt-3 text-xl font-semibold text-primary sm:text-2xl">
            AI-Powered Full-Stack Web Engineer
          </p>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
            Full-stack developer with experience in React, Next.js, TypeScript,
            Node.js and MongoDB. Seeking junior full-stack​ ​position to develop
            secure, scalable web apps and learn on real projects.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition duration-200 hover:-translate-y-0.5 hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              <Eye aria-hidden="true" className="size-4" />
              View Projects
              <ArrowRight aria-hidden="true" className="size-4" />
            </a>
            <a
              href="/solaimanalideveloper.pdf"
              download
              className="glass inline-flex min-h-12 items-center gap-2 rounded-full border-white/20 px-6 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              <Download aria-hidden="true" className="size-4" />
              Download Resume
            </a>
          </div>

          <div className="mt-9 border-t border-white/10 pt-5">
            <p className="text-sm font-medium text-slate-300">
              Social profiles
            </p>
            <ul className="mt-3 flex flex-wrap gap-3">
              {socialProfiles.map(({ name, href, icon: Icon }) => (
                <li key={name}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${name} profile (opens in a new tab)`}
                    className="glass inline-flex min-h-10 items-center gap-2 rounded-full border-white/15 px-4 text-sm font-medium text-slate-200 transition hover:-translate-y-0.5 hover:bg-white/15 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    <Icon aria-hidden="true" className="size-4" />
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="order-1 mx-auto w-full max-w-lg md:order-2">
          <div className="group/image relative mx-auto aspect-[4/3] w-full">
            <div
              aria-hidden="true"
              className="absolute inset-[12%] rounded-[2rem] bg-gradient-to-br from-blue-400/20 via-primary/10 to-violet-500/20 opacity-70 blur-2xl transition duration-700 group-hover/image:scale-110 group-hover/image:rotate-6 group-hover/image:opacity-100 motion-reduce:transition-none"
            />
            <div
              aria-hidden="true"
              className="absolute inset-[3%] rounded-[2.2rem] border border-dashed border-primary/0 transition-colors duration-500 group-hover/image:border-primary/45 group-hover/image:animate-[spin_16s_linear_infinite] motion-reduce:animate-none"
            />
            <div className="glass absolute inset-[6%] overflow-hidden rounded-[2rem] border-white/15 bg-gradient-to-br from-white/[0.08] to-white/[0.02] transition duration-500 group-hover/image:scale-[1.02] group-hover/image:border-primary/30 motion-reduce:transition-none">
              <div
                aria-hidden="true"
                className="absolute inset-x-8 bottom-0 h-2/3 rounded-full bg-gradient-to-t from-blue-500/15 to-transparent blur-2xl"
              />
              <Image
                src="/hero.png"
                alt="Professional portrait of the portfolio owner seated in a suit"
                width={577}
                height={432}
                priority
                sizes="(max-width: 768px) 90vw, 42vw"
                className="absolute inset-0 size-full object-contain object-bottom"
              />
            </div>
            <span className="absolute -left-3 top-8 size-3 rounded-full bg-primary shadow-[0_0_20px_var(--primary)] sm:-left-5 sm:top-12" />
            <span className="absolute -right-2 bottom-12 size-2 rounded-full bg-violet-300 shadow-[0_0_18px_rgba(196,181,253,0.8)] sm:-right-4 sm:bottom-16" />
          </div>
        </div>
      </div>
    </section>
  );
}
