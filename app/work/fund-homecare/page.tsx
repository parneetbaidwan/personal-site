export default function FundHomecareCaseStudy() {
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
  
            <span className="text-xs text-[var(--muted)]">
              Case study
            </span>
          </div>
  
          <h1 className="mt-12 text-4xl sm:text-5xl font-bold tracking-tight text-[var(--accent)]">
            Fund Homecare Analytics
          </h1>
  
          <p className="mt-4 text-[var(--muted)] leading-relaxed">
            A cross-platform marketing analytics dashboard built to centralize
            performance insights and support better fundraising decisions.
          </p>
  
          <div className="mt-8 flex flex-wrap gap-2">
            {["Next.js", "GA4", "APIs", "Analytics", "Product Thinking"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted)]"
              >
                {t}
              </span>
            ))}
          </div>
  
          <div className="mt-8 rounded-2xl border border-[var(--border)] p-5 text-sm text-[var(--muted)] leading-relaxed">
            <span className="text-[var(--text)] font-medium">Note:</span> The source
            code is not publicly available because it’s owned by the organization.
            This case study focuses on decisions, structure, and outcomes.
          </div>
  
          {/* Overview */}
          <section className="mt-16">
            <h2 className="text-xl font-semibold text-[var(--accent)]">Overview</h2>
            <p className="mt-4 text-[var(--muted)] leading-relaxed">
              Fund Homecare needed a clearer view of what was working across social
              channels and donation activity. Reporting was fragmented across
              platforms and hard to compare week to week. The goal was to unify key
              metrics into a single, calm interface that supports quick decisions:
              what to post, when to post, and which campaigns actually convert.
            </p>
          </section>
  
          {/* Problem */}
          <section className="mt-12">
            <h2 className="text-xl font-semibold text-[var(--accent)]">The problem</h2>
            <ul className="mt-4 list-disc list-inside space-y-2 text-[var(--muted)]">
              <li>Metrics were split across platforms with inconsistent naming and definitions.</li>
              <li>Reporting was manual and time-consuming, making it hard to maintain.</li>
              <li>Campaign decisions were harder to justify without consistent comparisons.</li>
              <li>It wasn’t obvious how engagement related to donations and outcomes.</li>
            </ul>
          </section>
  
          {/* Role */}
          <section className="mt-12">
            <h2 className="text-xl font-semibold text-[var(--accent)]">My role</h2>
            <p className="mt-4 text-[var(--muted)] leading-relaxed">
              I served as <span className="text-[var(--text)] font-medium">Software Project Manager</span>{" "}
              leading a team of four. I drove requirements gathering, defined what
              “success” meant for stakeholders, prioritized scope, and supported
              implementation across the frontend and data layer.
            </p>
  
            <div className="mt-6 grid gap-4">
              <div className="rounded-2xl border border-[var(--border)] p-5">
                <h3 className="text-sm font-semibold text-[var(--accent)] uppercase tracking-wide">
                  Responsibilities
                </h3>
                <ul className="mt-3 list-disc list-inside space-y-2 text-[var(--muted)]">
                  <li>Translate stakeholder questions into measurable KPIs.</li>
                  <li>Define dashboard sections and information hierarchy.</li>
                  <li>Coordinate tasks, timelines, and review cycles across the team.</li>
                  <li>Ensure the output stayed usable, not “feature-heavy.”</li>
                </ul>
              </div>
            </div>
          </section>
  
          {/* Solution */}
          <section className="mt-12">
            <h2 className="text-xl font-semibold text-[var(--accent)]">Solution</h2>
            <p className="mt-4 text-[var(--muted)] leading-relaxed">
              We designed a single dashboard that makes performance readable at a
              glance, with consistent metric definitions and a structure that
              supports weekly decision-making.
            </p>
  
            <div className="mt-6 grid gap-4">
              {[
                {
                  title: "Unify the data story",
                  body:
                    "Centralize campaign performance views so leadership doesn’t have to cross-reference multiple platforms to answer simple questions.",
                },
                {
                  title: "Make metrics comparable",
                  body:
                    "Use consistent naming, time ranges, and definitions so week-over-week trends are reliable and not misleading.",
                },
                {
                  title: "Design for calm scanning",
                  body:
                    "Prioritize readability: clear hierarchy, muted supporting text, and only the most useful charts and KPIs.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-[var(--border)] p-5">
                  <h3 className="font-semibold text-[var(--text)]">{item.title}</h3>
                  <p className="mt-2 text-[var(--muted)] leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </section>
  
          {/* Outcomes */}
          <section className="mt-12">
            <h2 className="text-xl font-semibold text-[var(--accent)]">Outcomes</h2>
            <ul className="mt-4 list-disc list-inside space-y-2 text-[var(--muted)]">
              <li>Reduced the effort required to prepare recurring performance updates.</li>
              <li>Improved clarity around what content and timing performed best.</li>
              <li>Created a shared “source of truth” for stakeholders and the team.</li>
            </ul>
  
            
          </section>
  
          {/* Reflection */}
          <section className="mt-12">
            <h2 className="text-xl font-semibold text-[var(--accent)]">What I learned</h2>
            <p className="mt-4 text-[var(--muted)] leading-relaxed">
              The biggest lesson was that analytics products only work when the
              metrics match the decisions people actually need to make. Clean UI
              matters, but clarity in definitions and stakeholder alignment matters
              more. I also learned how quickly scope can grow in “dashboard” projects,
              and how important it is to protect usability.
            </p>
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
  