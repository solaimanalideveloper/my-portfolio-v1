<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project: Personal Portfolio Website

## Stack and dependencies
- Next.js App Router, Tailwind CSS, Motion, and shadcn/ui.
- Reuse installed packages and existing UI patterns. Ask before installing any package.
- Rare UI components may be used sparingly (at most 2-3); do not introduce a competing component system for the same UI.

## Design direction: Spatial UI
- Use a dark navy base (`#0b1220`) with soft blue/purple gradient blobs behind the content.
- Use glass styling for the navbar, cards, and buttons: translucent white surface, backdrop blur, subtle white border, generous rounded corners, and a soft shadow.
- Keep text high-contrast and readable. Limit glass blur to 3-4 elements per viewport and keep the experience smooth on mobile.
- Use subtle hover lift/scale with smooth Motion transitions where appropriate.
- Use no more than one 3D element in the hero; keep any model under 2 MB.
- Do not use Apple logos, icons, or fonts.

## Owner information
- Name: TODO — ask the owner.
- Professional designation: TODO — ask the owner (for example, Frontend Developer or Full Stack Developer).
- Never invent personal facts, photos, contact details, education, work history, or social profiles.

## Portfolio requirements
Build the following in order:
1. **Navbar:** fully responsive, with keyboard-accessible mobile hamburger navigation and links to all portfolio sections.
2. **Hero:** professional designation, short introduction, professional photo, and a clearly visible Resume button linking to `/resume.pdf`. Keep the link clickable if the resume is not available; do not invent resume content.
3. **Social links:** buttons for the owner's available GitHub, LinkedIn, Twitter/X, and Facebook profiles; do not fabricate profile URLs.
4. **About Me:** programming journey, preferred work, hobbies/interests, and personality, using owner-provided details only.
5. **Skills:** visually appealing, optionally categorized as Frontend, Backend, and Tools; show only confirmed skills.
6. **Education:** detailed qualifications above HSC, if applicable and provided.
7. **Experience:** include only when the owner provides relevant experience.
8. **Projects:** at least three cards, each with a project name, image, and View More/Details link. Each link opens `/projects/[id]`. Detail pages include the technology stack, description, live link, client-only GitHub repository link, development challenges, and potential improvements/future plans. Keep project data in `data/projects.js`.
9. **Contact:** show the owner's provided email and phone; WhatsApp is optional.
10. **Footer:** optional, simple, and elegant.
- Make every section responsive across mobile, tablet, laptop, and desktop.

## Working rules
- Work on **one section at a time**. After completing a section, stop and wait for the owner's confirmation before continuing.
- Keep reusable components in `/components` and content in `/data`.
- Use clearly marked TODO placeholders for missing information, photos, and project images. Never present placeholders as real personal details.
- Use semantic HTML, meaningful image alt text, and keyboard-friendly interactions.
- Keep implementation simple, readable, and performant; do not add unrequested features.
- **Current authorized step only:** Step 1 — update `src/app/globals.css` with global design tokens, the Spatial background, and a reusable `.glass` utility. Stop after this step.

## Fonts
Use exactly two fonts, loaded and configured via next/font/google (set up everything yourself, including the Tailwind config for my installed version):

1. Inter: body font
   Use for: paragraphs, About Me text, descriptions, navbar links, buttons, form inputs and labels, skill names, education/experience details, project descriptions and challenge/improvement text, footer, small captions.

2. Plus Jakarta Sans: heading font
   Use for: hero name and designation, all section titles (About, Skills, Projects, etc.), project card titles, project detail page titles, the logo/brand text in the navbar, and large stat/number displays.

Rules:
- Inter is the default (font-sans) for the whole site. Plus Jakarta Sans is applied only through a font-heading utility class on headings.
- No other fonts anywhere. Do not add any extra font family.