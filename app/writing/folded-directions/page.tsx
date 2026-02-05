import ThemeToggle from "../../../components/ThemeToggle";

export default function FoldedDirections() {
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
          Folded Directions
        </h1>

        <p className="mt-4 text-[var(--muted)] leading-relaxed">
          Written piece writen about upbringing but through a navigation metaphor.
        </p>

        <div className="mt-8 rounded-2xl border border-[var(--border)] p-6">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--accent)]">
            Notes
          </h2>
          <p className="mt-4 text-[var(--muted)] leading-relaxed">
            This piece is reflective and intentionally quiet. It’s
            part of how I practice clarity, not just in interfaces, but in
            language.
          </p>

          <div className="mt-6">
            <a
              href="/writing/Folded-Directions.pdf"
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
