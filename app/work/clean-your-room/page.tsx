export default function CleanYourRoomCaseStudy() {
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
  
            <span className="text-xs text-[var(--muted)]">Case study</span>
          </div>
  
          <h1 className="mt-12 text-4xl sm:text-5xl font-bold tracking-tight text-[var(--accent)]">
            Clean Your Room
          </h1>
  
          <p className="mt-4 text-[var(--muted)] leading-relaxed">
            A modular Java adventure game designed with clean architecture,
            documentation, and strong separation of concerns.
          </p>
  
          <div className="mt-8 flex flex-wrap gap-2">
            {["Java", "OOP", "Architecture", "Documentation", "Design"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted)]"
              >
                {t}
              </span>
            ))}
          </div>
  
          <div className="mt-8 rounded-2xl border border-[var(--border)] p-5 text-sm text-[var(--muted)] leading-relaxed">
            <span className="text-[var(--text)] font-medium">Note:</span> The repo is
            hosted on my school GitLab and may not be publicly accessible. This case
            study summarizes the architecture and implementation decisions.
          </div>
  
          <section className="mt-16">
            <h2 className="text-xl font-semibold text-[var(--accent)]">Overview</h2>
            <p className="mt-4 text-[var(--muted)] leading-relaxed">
              Clean Your Room is a Java adventure game focused on maintainable
              structure: clear modules, readable interfaces, and documentation that
              makes the codebase easy to understand and extend.
            </p>
          </section>
  
          <section className="mt-12">
            <h2 className="text-xl font-semibold text-[var(--accent)]">What I focused on</h2>
            <ul className="mt-4 list-disc list-inside space-y-2 text-[var(--muted)]">
              <li>Clean separation between game logic, UI flow, and data models.</li>
              <li>Consistent naming, code style, and Javadoc documentation.</li>
              <li>Design choices that make it easy to add new scenes and interactions.</li>
            </ul>
          </section>
  
          
  
          <footer className="mt-16 pt-10 border-t border-[var(--border)] text-sm text-[var(--muted)]">
            <a href="/" className="hover:text-[var(--accent)] transition">
              Return home →
            </a>
          </footer>
        </div>
      </main>
    );
  }
  