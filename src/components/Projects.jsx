import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ExternalLink, FolderKanban } from "lucide-react";
import projects from "../../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative isolate overflow-hidden bg-background px-5 pb-12 pt-20 sm:px-8 sm:pb-14 sm:pt-24 lg:px-12 lg:pb-16 lg:pt-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/4 -z-10 size-[30rem] rounded-full bg-blue-500/10 blur-[110px]"
      />

      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-10 max-w-2xl sm:mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Selected work
          </p>
          <h2
            id="projects-heading"
            className="font-heading mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl"
          >
          Projects
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-400">
            TODO: Add a short introduction to your projects.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#151d2b]/80 shadow-xl shadow-black/10 transition duration-200 hover:-translate-y-1 hover:border-primary/30 hover:bg-[#192438]/90"
            >
              <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden border-b border-white/10 bg-[#0b1220]/70">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-3 text-center text-slate-500">
                    <FolderKanban
                      aria-hidden="true"
                      className="size-9 text-primary/70"
                    />
                    <span className="text-sm">{project.imageAlt}</span>
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="font-heading text-xl font-semibold text-white">
                  {project.name}
                </h3>
                <p className="mt-3 min-h-12 text-sm leading-6 text-slate-400">
                  {project.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs text-slate-300"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap gap-3 pt-6">
                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-primary px-4 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    View details
                    <ArrowUpRight aria-hidden="true" className="size-4" />
                  </Link>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-4 text-sm font-medium text-slate-200 transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                      Live
                      <ExternalLink aria-hidden="true" className="size-4" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-4 text-sm font-medium text-slate-200 transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                      {project.githubServerUrl ? "GitHub client" : "GitHub"}
                      <ExternalLink aria-hidden="true" className="size-4" />
                    </a>
                  )}
                  {project.githubServerUrl && (
                    <a
                      href={project.githubServerUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-4 text-sm font-medium text-slate-200 transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                      GitHub server
                      <ExternalLink aria-hidden="true" className="size-4" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
