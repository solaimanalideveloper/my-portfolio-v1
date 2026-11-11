import Image from "next/image";
import { Award, ExternalLink } from "lucide-react";
import Reveal from "@/components/Reveal";

const certificates = [
  {
    title: "5-Minute Typing Test",
    issuer: "typing.com",
    description:
      "Awarded by typing.com for completing the 5-minute Kindergarten-level typing test. Achieved a speed of 34 words per minute with 94% accuracy on November 11, 2026.",
    image: "/solaimanalideveloper%20typing%20certificate.png",
    imageAlt: "Typing certificate",
    certificateUrl:
      "https://drive.google.com/file/d/10SXBZvRbjeRrXbxdN8crt83uvXdeTiZC/view?usp=sharing",
  },
];

export default function Certificates() {
  return (
    <section
      id="certificates"
      aria-labelledby="certificates-heading"
      className="relative isolate overflow-hidden px-5 py-12 sm:px-8 lg:px-12"
    >
      <div className="mx-auto w-full max-w-7xl">
        <Reveal className="mb-5 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Learning milestones
          </p>
          <h2
            id="certificates-heading"
            className="font-heading mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl"
          >
            Certificates
          </h2>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {certificates.map(
            ({ title, issuer, description, image, imageAlt, certificateUrl }, index) => (
              <Reveal
                key={title}
                className="h-full"
                delay={(index % 3) * 0.1}
              >
            <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#151d2b]/80 shadow-xl shadow-black/10 transition duration-200 hover:-translate-y-1 hover:border-primary/30 hover:bg-[#192438]/90">
              <div className="relative aspect-[3/2] overflow-hidden border-b border-white/10 bg-[#0b1220]/70">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="font-heading text-xl font-semibold text-white">
                  {title}
                </h3>
                <p className="mt-2 text-sm font-medium text-primary">{issuer}</p>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {description}
                </p>
                <a
                  href={certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex min-h-11 w-fit items-center gap-2 rounded-xl bg-primary px-4 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  <Award aria-hidden="true" className="size-4" />
                  View certificate
                  <ExternalLink aria-hidden="true" className="size-4" />
                </a>
              </div>
            </article>
              </Reveal>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
