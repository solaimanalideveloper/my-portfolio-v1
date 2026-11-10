import Link from "next/link";
import { Flower2 } from "lucide-react";

export default function Footer({ homePath = "" }) {
  return (
    <footer className="relative isolate overflow-hidden bg-[#141920] bg-[linear-gradient(rgba(11,18,32,0.5),rgba(11,18,32,0.78)),url('/22757856.jpg')] bg-cover bg-center px-4 pb-4 pt-5 sm:px-6 sm:pt-8 lg:px-8">
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

        <div className="relative isolate flex min-h-[16rem] flex-col overflow-hidden rounded-[1.5rem] border border-white/15 bg-[#2f80ff]/20 px-6 pb-4 pt-6 backdrop-blur-[2px] sm:min-h-[19rem] sm:rounded-[2rem] sm:px-10 sm:pt-7 lg:min-h-[21rem] lg:px-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(47,128,255,0)_8%,rgba(11,18,32,0.25)_46%,#141920_100%)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 opacity-30 [background-image:radial-gradient(rgba(11,18,32,0.55)_0.7px,transparent_0.7px)] [background-size:4px_4px] [mask-image:linear-gradient(to_bottom,transparent_8%,black_48%,black_78%,transparent_100%)]"
          />

          <nav
            aria-label="Footer navigation"
            className="mx-auto flex w-full max-w-4xl flex-col items-start gap-5 text-sm text-white sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-8 sm:gap-y-4 sm:text-base"
          >
            <Link
              href={`${homePath}#home`}
              className="rounded-sm transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              ↑ Back to top
            </Link>
          </nav>

          <div className="mt-auto w-full overflow-hidden">
            <h2
              aria-label="Solaiman"
              className="font-heading -mb-[0.12em] w-full whitespace-nowrap text-center text-[clamp(2rem,12vw,14rem)] font-bold leading-[0.78] tracking-[-0.085em] text-white/90 drop-shadow-lg"
            >
              SOLAIMAN
            </h2>
          </div>
        </div>

        <div className="flex flex-col gap-2 px-1 py-4 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-2 sm:py-5 sm:text-sm">
          <p>© SOLAIMAN. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
