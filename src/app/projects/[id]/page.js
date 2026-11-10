import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Suspense } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import projects from "../../../../data/projects";

export function generateStaticParams() {
  return projects.map(({ id }) => ({ id }));
}

function DetailSection({ title, children, className = "" }) {
  return (
    <section
      className={`rounded-2xl border border-white/10 bg-white/[0.035] p-5 sm:p-6 ${className}`}
    >
      <h2 className="font-heading text-lg font-semibold text-white">{title}</h2>
      {children}
    </section>
  );
}

async function ProjectDetailsContent({ params }) {
  const { id } = await params;
  const project = projects.find((item) => item.id === id);

  return (
    project ? (
        <main className="relative isolate overflow-hidden px-5 pb-20 pt-10 sm:px-8 sm:pt-14 lg:px-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-40 top-1/4 -z-10 size-[30rem] rounded-full bg-blue-500/[0.08] blur-[110px]"
          />
          <div className="mx-auto w-full max-w-5xl">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-white"
            >
              <ArrowLeft aria-hidden="true" className="size-4" />
              Back to projects
            </Link>

            <header className="mt-7">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Project details
              </p>
              <h1 className="font-heading mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                {project.name}
              </h1>
              {project.tagline && (
                <p className="mt-2 text-lg font-medium text-slate-300">
                  {project.tagline}
                </p>
              )}
            </header>

            {project.image && (
              <div className="relative mt-8 aspect-video overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/20">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  className="object-cover"
                />
              </div>
            )}

            {(project.liveUrl ||
              project.githubUrl ||
              project.githubServerUrl) && (
              <div className="mt-5 flex flex-wrap gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    Live project
                    <ExternalLink aria-hidden="true" className="size-4" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-5 text-sm font-medium text-slate-200 transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    {project.githubServerUrl
                      ? "GitHub client repository"
                      : "GitHub repository"}
                    <ExternalLink aria-hidden="true" className="size-4" />
                  </a>
                )}
                {project.githubServerUrl && (
                  <a
                    href={project.githubServerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-5 text-sm font-medium text-slate-200 transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    GitHub server repository
                    <ExternalLink aria-hidden="true" className="size-4" />
                  </a>
                )}
              </div>
            )}

            <div className="mt-6 grid gap-3 md:grid-cols-2">
              <DetailSection title="Brief description">
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {project.description}
                </p>
              </DetailSection>

              <DetailSection title="Main technology stack">
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs text-slate-300"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </DetailSection>

              {project.features && (
                <DetailSection title="Key features">
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-400 marker:text-primary">
                    {project.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </DetailSection>
              )}

              <DetailSection title="Challenges faced">
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {project.challenges}
                </p>
              </DetailSection>

              <DetailSection
                title="Potential improvements & future plans"
                className="md:col-span-2"
              >
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {project.futurePlans}
                </p>
              </DetailSection>
            </div>
          </div>
        </main>
      ) : (
        <main className="flex min-h-[50vh] flex-col items-center justify-center px-5 py-20 text-center">
          <h1 className="font-heading text-3xl font-semibold text-white">
            Project not found
          </h1>
          <Link
            href="/#projects"
            className="mt-6 inline-flex items-center gap-2 text-primary hover:underline"
          >
            <ArrowLeft aria-hidden="true" className="size-4" />
            Back to projects
          </Link>
        </main>
      )
  );
}

function ProjectDetailsFallback() {
  return (
    <main
      aria-live="polite"
      className="flex min-h-[50vh] items-center justify-center px-5 py-20 text-sm text-slate-400"
    >
      Loading project details...
    </main>
  );
}

export default function ProjectDetails({ params }) {
  return (
    <>
      <Navbar homePath="/" />
      <Suspense fallback={<ProjectDetailsFallback />}>
        <ProjectDetailsContent params={params} />
      </Suspense>
      <Footer homePath="/" />
    </>
  );
}
