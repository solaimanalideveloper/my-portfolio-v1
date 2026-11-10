import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const socialLinks = [
  {
    name: "Gmail",
    href: "mailto:solaimanalideveloper@gmail.com",
    icon: SiGmail,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/8801602101588",
    icon: FaWhatsapp,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/md-solaiman-ali",
    icon: FaLinkedinIn,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative isolate overflow-hidden px-4 py-12 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-6 md:grid-cols-[0.85fr_1.15fr] md:items-start md:gap-8 lg:gap-10">
        <div className="text-slate-100">
          <h2
            id="contact-heading"
            className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
          >
            Get in touch
          </h2>

          <div className="mt-6 space-y-4 sm:mt-8">
            <div>
              <p className="text-sm text-slate-400">Email</p>
              <a
                href="mailto:solaimanalideveloper@gmail.com"
                className="mt-1 inline-block break-all text-base font-medium transition hover:text-primary sm:text-lg"
              >
                solaimanalideveloper@gmail.com
              </a>
            </div>
            <div>
              <p className="text-sm text-slate-400">Role</p>
              <p className="mt-1 text-base font-medium sm:text-lg">
                Junior Web Developer
              </p>
            </div>
            <div>
              <p className="text-sm text-slate-400">Social profiles</p>
              <ul className="mt-3 flex flex-wrap gap-3">
                {socialLinks.map(({ name, href, icon: Icon }) => (
                  <li key={name}>
                    <a
                      href={href}
                      target={name === "Gmail" ? undefined : "_blank"}
                      rel={
                        name === "Gmail" ? undefined : "noopener noreferrer"
                      }
                      aria-label={`${name}${name === "Gmail" ? "" : " profile (opens in a new tab)"}`}
                      className="inline-flex min-h-10 items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 text-sm font-medium text-slate-200 transition hover:border-primary/30 hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                      <Icon aria-hidden="true" className="size-4" />
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div>
          <form className="grid gap-x-4 gap-y-4 sm:grid-cols-2">
            <div className="grid gap-2">
              <label
                htmlFor="contact-name"
                className="text-sm text-slate-300"
              >
                Your name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Your full name"
                className="min-h-12 rounded-xl border border-white/10 bg-white/[0.07] px-4 text-sm text-white shadow-sm shadow-black/10 transition-colors placeholder:text-slate-400/80 hover:border-white/20 focus:border-white/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              />
            </div>

            <div className="grid gap-2">
              <label
                htmlFor="contact-email"
                className="text-sm text-slate-300"
              >
                Email address
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Your email address"
                className="min-h-12 rounded-xl border border-white/10 bg-white/[0.07] px-4 text-sm text-white shadow-sm shadow-black/10 transition-colors placeholder:text-slate-400/80 hover:border-white/20 focus:border-white/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              />
            </div>

            <div className="grid gap-2">
              <label
                htmlFor="contact-phone"
                className="text-sm text-slate-300"
              >
                Phone
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="Your phone number (optional)"
                className="min-h-12 rounded-xl border border-white/10 bg-white/[0.07] px-4 text-sm text-white shadow-sm shadow-black/10 transition-colors placeholder:text-slate-400/80 hover:border-white/20 focus:border-white/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              />
            </div>

            <div className="grid gap-2">
              <label
                htmlFor="contact-subject"
                className="text-sm text-slate-300"
              >
                Subject
              </label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                placeholder="Subject"
                className="min-h-12 rounded-xl border border-white/10 bg-white/[0.07] px-4 text-sm text-white shadow-sm shadow-black/10 transition-colors placeholder:text-slate-400/80 hover:border-white/20 focus:border-white/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              />
            </div>

            <div className="grid gap-2 sm:col-span-2">
              <label
                htmlFor="contact-message"
                className="text-sm text-slate-300"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                placeholder="Write something..."
                className="resize-y rounded-xl border border-white/10 bg-white/[0.07] px-4 py-3 text-sm text-white shadow-sm shadow-black/10 transition-colors placeholder:text-slate-400/80 hover:border-white/20 focus:border-white/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              />
            </div>

            <div className="sm:col-span-2">
              <button
                type="button"
                disabled
                aria-describedby="contact-form-note"
                className="min-h-12 w-full cursor-not-allowed rounded-xl border border-white/20 bg-white/90 px-5 text-sm font-semibold text-slate-900 opacity-75"
              >
                Send message
              </button>
              <p
                id="contact-form-note"
                className="mt-2 text-xs text-slate-400"
              >
                TODO: Add a contact email or form endpoint to enable sending.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
