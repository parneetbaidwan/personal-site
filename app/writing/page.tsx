
import ThemeToggle from "../../components/ThemeToggle";


type WritingItem = {
    title: string;
    description: string;
    href: string;
  };
  
  const writing: WritingItem[] = [
    {
      title: "Folded Directions",
      description:
        "Reflective essay on uncertainty, navigation, and family dynamics.",
      href: "/writing/folded-directions.pdf",
    },
    {
      title: "Attitudes & Persuasion",
      description:
        "Academic paper analyzing attitude change theories and real-world persuasion.",
      href: "/writing/attitudes-paper.pdf",
    },
    {
      title: "Work Analysis & Individual Differences",
      description:
        "A structured piece connecting O*NET traits, work analysis, and applied implications.",
      href: "/writing/work-analysis.pdf",
    },
  ];
  
  export default function WritingPage() {
    return (
      <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
        <div className="mx-auto max-w-3xl px-6 py-20">
        <div className="flex items-center justify-between">
  <a
    href="/"
    className="text-sm text-[var(--muted)] hover:text-[var(--accent)] transition"
  >
    ← Back
  </a>

  <ThemeToggle />
</div>

  
          <h1 className="mt-12 text-4xl font-bold text-[var(--accent)]">
            Writing
          </h1>
  
          <p className="mt-4 text-[var(--muted)] max-w-xl">
            Selected academic and reflective writing from psychology and
            interdisciplinary coursework.
          </p>
  
          <section className="mt-16 grid gap-8">
            {writing.map((w) => (
              <a
                key={w.title}
                href={w.href}
                className="group block rounded-2xl border border-[var(--border)] p-6 hover:border-[var(--accent)] transition"
              >
                <h2 className="text-lg font-semibold">{w.title}</h2>
                <p className="mt-2 text-[var(--muted)]">{w.description}</p>
                <div className="mt-4 text-sm text-[var(--muted)] group-hover:text-[var(--accent)] transition">
                  Open PDF →
                </div>
              </a>
            ))}
          </section>
  
          <footer className="mt-20 text-sm text-[var(--muted)]">
            © {new Date().getFullYear()} Parneet Baidwan
          </footer>
        </div>
      </main>
    );
  }
  