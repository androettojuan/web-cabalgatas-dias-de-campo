const Experience = () => {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20">
        {/* Imagen con marco decorativo */}
        <div className="relative">
          <div className="absolute -left-4 -top-4 h-full w-full rounded-3xl border border-brown/30" />
          <img
            src="/img/foto2.jpg"
            alt="Experiencia a caballo en las sierras"
            className="relative aspect-[5/4] w-full rounded-3xl object-cover shadow-card"
          />
        </div>

        {/* Texto */}
        <div className="text-center lg:text-left">
          <p className="eyebrow text-brown">Una experiencia única</p>
          <h2 className="mt-4 text-4xl font-semibold text-ink sm:text-5xl">
            Disfrutá una experiencia inolvidable
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink/75">
            Nuestras cabalgatas son una experiencia que cambia la vida, llena de
            paisajes, gastronomía, fotografías increíbles y recuerdos
            inolvidables. Creemos que las disfrutarás.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
