"use client";

import emailjs from "@emailjs/browser";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";

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
  const formRef = useRef(null);
  const honeypotRef = useRef(null);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (!status) return;

    const timeoutId = window.setTimeout(() => setStatus(null), 5000);
    return () => window.clearTimeout(timeoutId);
  }, [status]);

  async function handleSubmit(event) {
    event.preventDefault();

    if (honeypotRef.current?.value) return;

    setIsSending(true);
    setStatus(null);

    try {
      const formData = new FormData(event.currentTarget);

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone") || "Not provided",
          subject: formData.get("subject"),
          message: formData.get("message"),
          time: new Date().toLocaleString(),
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      );

      formRef.current.reset();
      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative isolate overflow-hidden px-4 py-12 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-6 md:grid-cols-[0.85fr_1.15fr] md:items-start md:gap-8 lg:gap-10">
        <Reveal className="text-slate-100">
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
        </Reveal>

        <Reveal>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="grid gap-x-4 gap-y-4 sm:grid-cols-2"
          >
            <input
              ref={honeypotRef}
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="new-password"
              readOnly
              aria-hidden="true"
              className="sr-only"
            />
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
                placeholder="Enter your name"
                required
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
                placeholder="you@example.com"
                required
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
                placeholder="Phone number (optional)"
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
                placeholder="e.g. Project inquiry"
                required
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
                placeholder="Tell me about your project or inquiry..."
                required
                className="resize-y rounded-xl border border-white/10 bg-white/[0.07] px-4 py-3 text-sm text-white shadow-sm shadow-black/10 transition-colors placeholder:text-slate-400/80 hover:border-white/20 focus:border-white/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              />
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={isSending}
                className="min-h-12 w-full cursor-pointer rounded-xl border border-white/20 bg-white/90 px-5 text-sm font-semibold text-slate-900 disabled:cursor-not-allowed disabled:opacity-75"
              >
                {isSending ? "Sending..." : "Send message"}
              </button>
              {status && (
                <p
                  role="status"
                  className={`mt-2 text-xs font-bold ${
                    status === "success" ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {status === "success"
                    ? "Your mail is sent successfully"
                    : "Your mail is failed to send, try again"}
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
