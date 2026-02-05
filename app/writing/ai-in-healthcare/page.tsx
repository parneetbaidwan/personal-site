import ThemeToggle from "../../../components/ThemeToggle";

export default function AIInHealthcare() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <div className="flex items-center justify-between">
          <a
            href="/writing"
            className="text-sm text-[var(--muted)] hover:text-[var(--accent)] transition"
          >
            ← Back to Writing
          </a>
          <ThemeToggle />
        </div>

        <h1 className="mt-12 text-4xl font-bold tracking-tight text-[var(--accent)]">
          Investigating Public Attitudes Toward AI in Healthcare
        </h1>

        <p className="mt-4 text-[var(--muted)] leading-relaxed">
          A research paper exploring how trust, ethics, perceived risk, and human
          oversight shape public acceptance of AI in healthcare.
        </p>

        <div className="mt-8 rounded-2xl border border-[var(--border)] p-6">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--accent)]">
            Highlights
          </h2>
          <ul className="mt-4 space-y-2 text-[var(--muted)]">
            <li>• Frames AI acceptance through trust, transparency, and accountability.</li>
            <li>• Discusses perceived benefits vs concerns (bias, privacy, safety).</li>
            <li>• Focuses on how people interpret “AI decisions” in high-stakes contexts.</li>
          </ul>

          <div className="mt-6">
            <a
              href="/writing/ai-healthcare.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-[var(--accent)] px-5 py-2 text-sm font-semibold text-white hover:opacity-90 transition"
            >
              View PDF
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
