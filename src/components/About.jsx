import { Heart, Lightbulb, Sparkles, Terminal } from "lucide-react";
import Reveal from "@/components/Reveal";

const aboutTopics = [
  {
    title: "My journey",
    description:
      "I am building my Full Stack Web Development skills through hands-on projects, using React.js, Next.js, Express.js, MongoDB, REST APIs, and authentication.",
    icon: Terminal,
  },
  {
    title: "Work I enjoy",
    description:
      "I enjoy building modern web applications, solving problems, exploring AI-powered technologies, and continuously learning new things.",
    icon: Lightbulb,
  },
  {
    title: "Beyond the screen",
    description:
      "I enjoy exploring new technologies, learning new skills, solving challenges, spending time with nature, and discovering creative ideas beyond coding.",
    icon: Heart,
  },
  {
    title: "A little about me",
    description:
      "Curious learner, creative thinker, and passionate about technology, problem-solving, and continuous growth.",
    icon: Sparkles,
  },
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative isolate overflow-hidden px-5 py-12 sm:px-8 lg:px-12"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
        <Reveal className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Get to know me
          </p>
          <h2
            id="about-heading"
            className="font-heading mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl"
          >
            About Me
          </h2>
          <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">
            I am Solaiman Ali, an aspiring AI-Powered Full Stack Web Engineer
            currently learning through Programming Hero. I am passionate about
            building modern, responsive, and user-friendly web applications.
            <br />
            <br />
            Currently, I am learning AI (LLM) Integration, with a
            goal of becoming a skilled AI-Powered Full Stack Software Engineer.
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {aboutTopics.map(({ title, description, icon: Icon }, index) => (
            <Reveal
              key={title}
              className="h-full"
              delay={(index % 2) * 0.1}
            >
              <article className="group h-full rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition duration-200 hover:-translate-y-1 hover:border-primary/30 hover:bg-white/[0.06] sm:p-6">
                <span className="inline-flex size-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <h3 className="font-heading mt-5 text-lg font-semibold text-white">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-400">
                  {description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
