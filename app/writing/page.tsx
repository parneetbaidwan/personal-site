export default function Writing() {
    return (
      <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
        <div className="mx-auto max-w-3xl px-6 py-20">
  
          <a
            href="/"
            className="text-sm text-[var(--muted)] hover:text-[var(--accent)] transition"
          >
            ← Back
          </a>
  
          <h1 className="mt-12 text-4xl font-bold text-[var(--accent)]">
            Writing
          </h1>
  
          <p className="mt-4 text-[var(--muted)] max-w-xl">
            Selected academic and reflective writing from psychology and interdisciplinary coursework.
          </p>
  
          <div className="mt-16 grid gap-10">
            <a
              href="/writing/folded-directions.pdf"
              className="block group border border-[var(--border)] rounded-2xl p-6 hover:border-[var(--accent)] transition"
            >
              <h2 className="text-lg font-semibold">
                Folded Directions
              </h2>
              <p className="mt-2 text-[var(--muted)]">
                Reflective essay on uncertainty, navigation, and family dynamics.
              </p>
            </a>
  
            <a
              href="/writing/attitudes-paper.pdf"
              className="block group border border-[var(--border)] rounded-2xl p-6 hover:border-[var(--accent)] transition"
            >
              <h2 className="text-lg font-semibold">
                Attitudes & Persuasion
              </h2>
              <p className="mt-2 text-[var(--muted)]">
                Academic paper analyzing attitude change theories and real-world persuasion.
              </p>
            </a>
          </div>
  
        </div>
      </main>
    );
  }
  