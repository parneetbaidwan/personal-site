import ThemeToggle from "../../components/ThemeToggle";

type WritingPiece = {
  title: string;
  subtitle: string;
  tags: string[];
  href: string;      // internal page
  pdfHref: string;   // public PDF
};

const writing: WritingPiece[] = [
  {
    title: "Investigating Public Attitudes Toward AI in Healthcare",
    subtitle:
      "Research paper exploring trust, ethics, perceived risk, and public acceptance of AI in healthcare.",
    tags: ["Research", "Healthcare", "AI", "Psychology"],
    href: "/writing/ai-in-healthcare",
    pdfHref: "/writing/ai-healthcare.pdf",
  },
  {
    title: "Folded Directions",
    subtitle:
      "Creative nonfiction exploring family, responsibility, and belonging through a navigation metaphor.",
    tags: ["Creative Nonfiction", "Personal Essay"],
    href: "/writing/folded-directions",
    pdfHref: "/writing/folded-directions.pdf",
  },
];

export default function WritingIndex() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="flex items-center justify-between">
          <a
            href="/"
            className="text-sm text-[var(--muted)] hover:text-[var(--accent)] transition"
          >
            ← Back
          </a>
          <ThemeToggle />
        </div>

        <h1 className="mt-12 text-4xl font-bold tracking-tight text-[var(--accent)]">
          Writing
        </h1>
        

        <section className="mt-12 grid gap-8">
          {writing.map((w) => (
            <div
              key={w.title}
              className="rounded-2xl border border-[var(--border)] p-6"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h2 className="text-lg font-semibold text-[var(--text)]">
                    {w.title}
                  </h2>
                  <p className="mt-2 text-[var(--muted)]">{w.subtitle}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {w.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={w.href}
                      className="rounded-xl bg-[var(--accent)] px-5 py-2 text-sm font-semibold text-white hover:opacity-90 transition"
                    >
                      Read online
                    </a>
                    <a
                      href={w.pdfHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl border border-[var(--accent)] px-5 py-2 text-sm font-semibold text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white transition"
                    >
                      View PDF
                    </a>
                  </div>
                </div>

                <span className="text-sm text-[var(--muted)]">↗</span>
              </div>
            </div>
          ))}
        </section>

        <footer className="mt-20 text-sm text-[var(--muted)]">
          © {new Date().getFullYear()} Parneet Baidwan
        </footer>
      </div>
    </main>
  );
}
