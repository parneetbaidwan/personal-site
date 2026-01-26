export default function Home() {
  return (
    <main className="min-h-screen px-8 py-24 max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-6">
        Parneet Baidwan
      </h1>

      <p className="text-xl text-gray-600 mb-12">
        CS + Psychology student building clean, data-driven web products.
      </p>

      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-6">Featured Work</h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-medium">
              Fund Homecare Analytics
            </h3>
            <p className="text-gray-600">
              Unified cross-platform marketing analytics dashboard.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium">
              Clean Your Room
            </h3>
            <p className="text-gray-600">
              Modular Java adventure game built with clean architecture.
            </p>
          </div>
        </div>
      </section>

      <a
        href="mailto:youremail@email.com"
        className="text-lg underline underline-offset-4"
      >
        Contact me
      </a>
    </main>
  );
}
