import Link from "next/link";
import { ArrowUpRight, Flower2 } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer({ homePath = "" }) {
  return (
    <footer className="relative isolate overflow-hidden bg-[#0b1220]/80 px-4 pb-4 pt-5 sm:px-6 sm:pt-8 lg:px-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 left-1/2 -z-10 size-[30rem] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[110px]"
      />
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-4 grid grid-cols-2 items-end gap-3 px-1 text-xs text-slate-400 sm:mb-5 sm:grid-cols-[1fr_auto_1fr] sm:px-2 sm:text-sm">
          <p className="max-w-40">Thanks for visiting my portfolio.</p>
          <div
            aria-hidden="true"
            className="col-span-2 row-start-1 flex h-16 items-end justify-center gap-2 text-blue-500 sm:col-span-1 sm:row-auto sm:h-20 sm:gap-3"
          >
            {[8, 12, 9, 14, 8, 11, 9].map((size, index) => (
              <span
                key={`${size}-${index}`}
                className="footer-flower inline-flex shrink-0"
                style={{ animationDelay: `${index * -0.35}s` }}
              >
                <Flower2
                  aria-hidden="true"
                  size={size * 4}
                  strokeWidth={1.8}
                  className={index % 2 === 0 ? "mb-0" : "mb-2"}
                />
              </span>
            ))}
          </div>
          <p className="justify-self-end text-right">Let&apos;s stay connected</p>
        </div>

        <div className="relative isolate overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.035] px-6 pb-8 pt-6 shadow-2xl shadow-black/20 sm:rounded-[2rem] sm:px-10 sm:pb-10 sm:pt-8 lg:px-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-blue-500/[0.08] via-transparent to-violet-500/[0.08]"
          />

          <div className="flex flex-col gap-6 border-b border-white/10 pb-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="font-heading text-xl font-semibold tracking-tight text-white">
                &lt; SOLAIMAN /&gt;
              </p>
              <p className="mt-2 text-sm text-slate-400">
                Junior Web Developer
              </p>
            </div>
            <nav
              aria-label="Footer navigation"
              className="flex max-w-2xl flex-wrap gap-2"
            >
              {footerLinks.map(({ label, href }) => (
                <Link
                  key={href}
                  href={`${homePath}${href}`}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-slate-300 transition hover:border-primary/30 hover:bg-white/[0.08] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-slate-500">
              © SOLAIMAN. All rights reserved.
            </p>
            <Link
              href={`${homePath}#home`}
              className="inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              Back to top
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
          </div>

          <div className="mt-8 w-full overflow-hidden">
            <h2
              aria-label="Solaiman"
              className="font-heading w-full whitespace-nowrap text-center text-[clamp(2rem,12vw,14rem)] font-bold leading-[0.9] tracking-[-0.085em] text-white/90 drop-shadow-lg"
            >
              SOLAIMAN
            </h2>
          </div>
        </div>
      </div>
    </footer>
  );
}
