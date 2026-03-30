import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/maintenance")({
  head: () => ({
    meta: [{ title: "OTOPIO | Maintenance" }],
  }),
  component: MaintenancePage,
});

function MaintenancePage() {
  return (
    <main className="bg-dark flex min-h-screen items-center justify-center px-6 py-16 text-white">
      <section className="w-full max-w-3xl rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur md:p-12">
        <p className="text-primary text-label mb-4 font-semibold tracking-[0.3em] uppercase">
          Nous revenons bientôt
        </p>

        <div className="space-y-6">
          <div>
            <p className="text-primary font-heading text-3xl font-semibold md:text-4xl">
              Otopio.
            </p>
            <h1 className="font-heading mt-4 text-4xl leading-tight font-semibold uppercase md:text-6xl">
              Maintenance en cours
            </h1>
          </div>

          <p className="text-base-body max-w-2xl text-white/80 md:text-lg">
            Le site est actuellement en maintenance. Pendant ce temps, vous
            pouvez consulter notre offre de service en cliquant sur le bouton
            ci-dessous.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/offer-en.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn-primary inline-flex items-center justify-center px-6 py-3 text-sm font-semibold"
            >
              Voir notre offre de service
            </a>

            <span className="text-sm-body text-white/50">
              Le document s&apos;ouvre dans un nouvel onglet.
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
