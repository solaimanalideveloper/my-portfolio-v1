"use client";

import {
  BriefcaseBusiness,
  Award,
  CodeXml,
  FolderKanban,
  GraduationCap,
  House,
  Mail,
  Menu,
  UserRound,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const sections = [
  { label: "Home", href: "#home", icon: <House aria-hidden="true" /> },
  { label: "About", href: "#about", icon: <UserRound aria-hidden="true" /> },
  { label: "Skills", href: "#skills", icon: <CodeXml aria-hidden="true" /> },
  {
    label: "Education",
    href: "#education",
    icon: <GraduationCap aria-hidden="true" />,
  },
  {
    label: "Projects",
    href: "#projects",
    icon: <FolderKanban aria-hidden="true" />,
  },
  {
    label: "Certificates",
    href: "#certificates",
    icon: <Award aria-hidden="true" />,
  },
  { label: "Contact", href: "#contact", icon: <Mail aria-hidden="true" /> },
];

const linkClassName =
  "rounded-full px-3 py-2 text-sm text-slate-200 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

export default function Navbar({ homePath = "" }) {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="sticky top-4 z-50 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="glass relative flex min-h-16 items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href={`${homePath}#home`}
          className="font-heading shrink-0 rounded-md text-lg font-semibold tracking-tight text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          onClick={closeMenu}
        >
         {`< SOLAIMAN />`}
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 xl:flex"
        >
          {sections.map((section) => (
            <Link
              key={section.href}
              href={`${homePath}${section.href}`}
              className={`${linkClassName} inline-flex items-center gap-2`}
            >
              {section.icon}
              {section.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary xl:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

        <div
          id="mobile-navigation"
          className={`absolute inset-x-0 top-[calc(100%+0.75rem)] xl:hidden ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <nav
            aria-label="Mobile navigation"
            className="glass flex flex-col gap-1 border-white/20 bg-[#111b2e]/95 p-3"
          >
            {sections.map((section) => (
              <Link
                key={section.href}
                href={`${homePath}${section.href}`}
                className={`${linkClassName} flex items-center gap-3`}
                onClick={closeMenu}
              >
                {section.icon}
                {section.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
