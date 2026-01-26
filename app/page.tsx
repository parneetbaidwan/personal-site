type Project = {
  title: string;
  role: string;
  description: string;
  tags: string[];
  href: string;
};

const projects: Project[] = [
  {
    title: "Fund Homecare Analytics",
    role: "Software Project Manager",
    description:
      "A unified cross-platform marketing analytics dashboard used to track demographics, donations, and optimal posting times.",
    tags: ["Next.js", "GA4", "APIs", "Analytics"],
    href: "#",
  },
  {
    title: "Clean Your Room",
    role: "Developer",
    description:
      "A modular Java adventure game built with clean architecture, documentation, and structured design.",
    tags: ["Java", "OOP", "Design"],
    href: "#",
  },
  {
    title: "Personal Website",
    role: "Designer + Developer",
    description:
      "Minimal, fast, and intentional — built to present work clearly and professionally.",
    tags: ["Next.js", "Tailwind", "Design"],
    href: "#",
  },
];

const experience = [
  { title: "Software Project Manager", org: "Fund Homecare Canada" },
  { title: "Co-Chair", org: "SheHacks+" },
  { title: "Web / Product Work", org: "Tech for Social Impact" },
  { title: "Supervisor", org: "Starbucks" },
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
            <a href="#work" className="hover:text-[var(--accent)] transition">
              Work
            </a>
            <a href="#about" className="hover:text-[var(--accent)] transition">
              About
            </a>
            <a href="/writing" className="hover:text-[var(--accent)] transition">
              Writing
            </a>
            <a href="#contact" className="hover:text-[var(--accent)] transition">
              Contact
            </a>
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

          <p className="mt-4 max-w-2xl text-[var(--muted)] italic">
            Calm interface. Clear metrics. Quiet power.
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
                    <p className="mt-1 text-sm text-[var(--muted)]">{p.role}</p>

                    <p className="mt-3 text-[var(--muted)]">{p.description}</p>

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
            calm, fast, and intentional. I care deeply about clarity — in code,
            in design, and in decisions — and I’m especially interested in work
            that sits at the intersection of technology, data, and human
            behaviour.
          </p>

          {/* Leadership & Impact */}
          <div className="mt-10 grid gap-8 max-w-3xl">
            <div className="rounded-2xl border border-[var(--border)] p-6">
              <h3 className="text-sm font-semibold text-[var(--accent)] uppercase tracking-wide">
                Leadership
              </h3>
              <p className="mt-3 text-[var(--muted)] leading-relaxed">
                Co-Chair of SheHacks+, Canada’s largest all-female and
                non-binary hackathon. Led cross-functional planning, sponsor
                outreach, and execution across teams to deliver a high-stakes,
                high-visibility event.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--border)] p-6">
              <h3 className="text-sm font-semibold text-[var(--accent)] uppercase tracking-wide">
                Product & Project Management
              </h3>
              <p className="mt-3 text-[var(--muted)] leading-relaxed">
                Software Project Manager for Fund Homecare Canada, leading a
                team of four building analytics systems used for real-world
                decision-making. I like shipping features that are measurable,
                maintainable, and easy to use.
              </p>
            </div>
          </div>
        </section>

        {/* SELECTED EXPERIENCE */}
        <section className="py-20 border-t border-[var(--border)]">
          <h2 className="text-xl font-semibold tracking-tight text-[var(--accent)]">
            Selected Experience
          </h2>
          <div className="w-12 h-[2px] bg-[var(--accent)] mt-2 mb-10" />

          <ul className="space-y-3 text-[var(--muted)]">
            {experience.map((e) => (
              <li key={`${e.title}-${e.org}`} className="flex flex-wrap gap-2">
                <span className="text-[var(--text)] font-medium">{e.title}</span>
                <span className="text-[var(--muted)]">—</span>
                <span className="hover:text-[var(--accent)] transition">
                  {e.org}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="py-20 border-t border-[var(--border)]"
        >
          <h2 className="text-xl font-semibold tracking-tight text-[var(--accent)]">
            Contact
          </h2>
          <div className="w-12 h-[2px] bg-[var(--accent)] mt-2 mb-10" />

          <div className="flex flex-col gap-2 text-[var(--muted)]">
            <a
              href="mailto:you@email.com"
              className="hover:text-[var(--accent)] transition"
            >
              you@email.com
            </a>
            <a
              href="https://www.linkedin.com/in/your-link/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[var(--accent)] transition"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/your-user"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[var(--accent)] transition"
            >
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
