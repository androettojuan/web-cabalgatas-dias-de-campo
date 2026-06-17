import { FaQuoteLeft } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";
import { testimonials } from "../data/site.js";
import { asset } from "../utils/asset.js";

const Testimonials = () => {
  return (
    <section id="testimonios" className="relative overflow-hidden py-20 sm:py-28">
      <img
        src={asset("/img/foto8.jpg")}
        alt="Sierras de Córdoba"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-bark/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center text-ivory">
          <p className="eyebrow text-sand">Testimonios</p>
          <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
            Lo que dicen quienes nos visitaron
          </h2>
          <p className="mt-5 text-lg text-ivory/80">
            Palabras de las personas que disfrutaron de la experiencia a caballo
            en las sierras cordobesas.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <a
              key={item.platform}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-3xl border border-ivory/15 bg-ivory/10 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-ivory/15"
            >
              <FaQuoteLeft className="text-3xl text-sand" />
              <p className="mt-6 flex-1 text-ivory/90">{item.quote}</p>
              <div className="mt-8 flex items-center justify-between border-t border-ivory/15 pt-5">
                <div className="flex items-center gap-3">
                  <img
                    src={asset(item.icon)}
                    alt={item.platform}
                    className="h-9 w-9 rounded-full object-cover"
                  />
                  <span className="text-sm font-semibold text-ivory">
                    Opiniones en {item.platform}
                  </span>
                </div>
                <HiArrowUpRight className="text-ivory/60 transition-colors group-hover:text-sand" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
