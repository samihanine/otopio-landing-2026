export function TeamValues() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="p-8 bg-white/50 backdrop-blur-sm rounded-2xl shadow-sm border border-black/5">
        <h3 className="text-2xl font-bold mb-2">Direction</h3>
        <p className="text-muted leading-relaxed">
          Guidant la vision et la stratégie pour vous offrir les meilleures
          solutions créatives.
        </p>
      </div>
      <div className="p-8 bg-white/50 backdrop-blur-sm rounded-2xl shadow-sm border border-black/5">
        <h3 className="text-2xl font-bold mb-2">Création</h3>
        <p className="text-muted leading-relaxed">
          Des designers et artistes passionnés par l'innovation visuelle et
          numérique.
        </p>
      </div>
      <div className="p-8 bg-white/50 backdrop-blur-sm rounded-2xl shadow-sm border border-black/5">
        <h3 className="text-2xl font-bold mb-2">Développement</h3>
        <p className="text-muted leading-relaxed">
          Des ingénieurs construisant des expériences web robustes, rapides et
          évolutives.
        </p>
      </div>
    </div>
  );
}
