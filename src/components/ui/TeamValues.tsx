export function TeamValues() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      <div className="rounded-2xl border border-black/5 bg-white/50 p-8 shadow-sm backdrop-blur-sm">
        <h3 className="mb-2 text-2xl font-bold">Direction</h3>
        <p className="text-muted leading-relaxed">
          Guidant la vision et la stratégie pour vous offrir les meilleures
          solutions créatives.
        </p>
      </div>
      <div className="rounded-2xl border border-black/5 bg-white/50 p-8 shadow-sm backdrop-blur-sm">
        <h3 className="mb-2 text-2xl font-bold">Création</h3>
        <p className="text-muted leading-relaxed">
          Des designers et artistes passionnés par l'innovation visuelle et
          numérique.
        </p>
      </div>
      <div className="rounded-2xl border border-black/5 bg-white/50 p-8 shadow-sm backdrop-blur-sm">
        <h3 className="mb-2 text-2xl font-bold">Développement</h3>
        <p className="text-muted leading-relaxed">
          Des ingénieurs construisant des expériences web robustes, rapides et
          évolutives.
        </p>
      </div>
    </div>
  );
}
