const projects = [
  {
    title: "Fund Homecare Analytics",
    description:
      "A unified cross-platform marketing analytics dashboard used to track demographics, donations, and optimal posting times.",
    tags: ["Next.js", "GA4", "APIs", "Analytics"],
    href: "#",
  },
  {
    title: "Clean Your Room",
    description:
      "A modular Java adventure game built with clean architecture, documentation, and structured design.",
    tags: ["Java", "OOP", "Design"],
    href: "#",
  },
  {
    title: "Personal Website",
    description:
      "This site. Designed and built to be minimal, fast, and intentional.",
    tags: ["Next.js", "Tailwind", "Design"],
    href: "#",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <div className="mx-auto max-w-5xl px-6 py-16">

        {/* NAV */}
        <nav className="flex items-center justify-between">
          <span className="text-sm font-semibold tracking-tight text-[var(--text)]">
            Parneet Baidwan
          </span>
          <div className="flex gap-6 text-sm text-[var(--muted)]">
            <a href="#work" className="hover:text-[var(--accent)] transition">Work</a>
            <a href="#about" className="hover:text-[var(--accent)] transition">About</a>
            <a href="#contact" className="hover:text-[var(--accent)] transition">Contact</a>
            <a href="/writing" className="hover:text-[var(--accent)] transition">Writing</a>
          </div>
        </nav>

        {/* HERO */}
        <section className="pt-24 pb-24">
          <h1 className="text-5xl sm:text-6xl font-bold leading-[1.05] tracking-tight text-[var(--accent)]">
            I build systems that turn complexity into clarity.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-[var(--muted)]">
            CS + Psychology student focused on frontend, analytics, and product
            thinking. I care about clean UX, strong architecture, and measurable
            outcomes.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="#work"
              className="rounded-xl bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition"
            >
              View work
            </a>
            <a
              href="/resume.pdf"
              className="rounded-xl border border-[var(--accent)] px-6 py-3 text-sm font-semibold text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white transition"
            >
              Resume
            </a>
          </div>
        </section>

        {/* WORK */}
        <section id="work" className="py-20 border-t border-[var(--border)]">
          <h2 className="text-xl font-semibold tracking-tight text-[var(--accent)]">
            Selected Work
          </h2>
          <div className="w-12 h-[2px] bg-[var(--accent)] mt-2 mb-10" />

          <div className="grid gap-8">
            {projects.map((p) => (
              <a
                key={p.title}
                href={p.href}
                className="group rounded-2xl border border-[var(--border)] p-6 hover:border-[var(--accent)] transition"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--text)]">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-[var(--muted)]">
                      {p.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted)]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <span className="text-sm text-[var(--muted)] group-hover:text-[var(--accent)] transition">
                    →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-20 border-t border-[var(--border)]">
          <h2 className="text-xl font-semibold tracking-tight text-[var(--accent)]">
            About
          </h2>
          <div className="w-12 h-[2px] bg-[var(--accent)] mt-2 mb-10" />

          <p className="max-w-2xl text-[var(--muted)] leading-relaxed">
            I’m a CS + Psychology student who enjoys building products that feel
            calm, fast, and intentional. I’ve led technical teams, shipped
            real-world projects, and care deeply about clarity — in code, in
            design, and in decisions. I’m especially interested in work that
            sits at the intersection of technology, data, and human behaviour.
          </p>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-20 border-t border-[var(--border)]">
          <h2 className="text-xl font-semibold tracking-tight text-[var(--accent)]">
            Contact
          </h2>
          <div className="w-12 h-[2px] bg-[var(--accent)] mt-2 mb-10" />

          <div className="flex flex-col gap-2 text-[var(--muted)]">
            <a href="mailto:you@email.com" className="hover:text-[var(--accent)] transition">
              you@email.com
            </a>
            <a href="https://www.linkedin.com/in/your-link/" target="_blank" rel="noreferrer" className="hover:text-[var(--accent)] transition">
              LinkedIn
            </a>
            <a href="https://github.com/your-user" target="_blank" rel="noreferrer" className="hover:text-[var(--accent)] transition">
              GitHub
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-12 text-sm text-[var(--muted)]">
          © {new Date().getFullYear()} Parneet Baidwan
        </footer>

      </div>
    </main>
  );
}
