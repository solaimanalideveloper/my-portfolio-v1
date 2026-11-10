export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative isolate overflow-hidden bg-background px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-14 lg:px-8 lg:pb-24 lg:pt-16"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-start md:gap-10 lg:gap-16">
        <div className="text-slate-100">
          <h2
            id="contact-heading"
            className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
          >
            Get in touch
          </h2>

          <div className="mt-8 space-y-6 sm:mt-10">
            <div>
              <p className="text-sm text-slate-400">Email</p>
              <p className="mt-1 break-all text-base font-medium sm:text-lg">
                TODO: Add your email address
              </p>
            </div>
            <div>
              <p className="text-sm text-slate-400">Role</p>
              <p className="mt-1 text-base font-medium sm:text-lg">
                TODO: Add your professional designation
              </p>
            </div>
            <div>
              <p className="text-sm text-slate-400">Social profiles</p>
              <p className="mt-1 text-sm text-slate-300">
                TODO: Add links to your available profiles
              </p>
            </div>
          </div>
        </div>

        <div>
          <form className="grid gap-x-4 gap-y-5 sm:grid-cols-2">
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
