import { useNavigate } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi2";
import Button from "../components/Button.jsx";
import { socials } from "../data/site.js";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Fondo */}
      <img
        src="/img/portada.jpg"
        alt="Cabalgata por las sierras de Córdoba"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-bark/70 via-bark/40 to-bark/80" />

      {/* Contenido */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center text-ivory">
        <p className="eyebrow mb-6 text-sand">Es momento de</p>
        <h1 className="text-5xl font-semibold leading-tight drop-shadow-lg sm:text-6xl md:text-7xl">
          Cabalgatas y Días de Campo
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ivory/85 sm:text-xl">
          Turismo ecuestre en las sierras de Alta Gracia, Córdoba. Desconectá de
          la ciudad y reconectá con la naturaleza, a caballo.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Button size="xl" onClick={() => navigate("/catalogo")}>
            Elegí tu aventura
          </Button>
          <Button variant="outline" size="xl" href={socials.whatsapp}>
            <FaWhatsapp className="text-xl" />
            Escribinos
          </Button>
        </div>
      </div>

      {/* Indicador de scroll */}
      <a
        href="#aventuras"
        aria-label="Ver más"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-2xl text-ivory/80"
      >
        <HiArrowDown />
      </a>
    </section>
  );
};

export default Hero;
