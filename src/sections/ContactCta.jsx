import { FaWhatsapp } from "react-icons/fa";
import Button from "../components/Button.jsx";
import { socials } from "../data/site.js";
import { asset } from "../utils/asset.js";

const ContactCta = () => {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <img
        src={asset("/img/foto7.jpg")}
        alt="Cabalgata al atardecer"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-bark/75" />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 text-center text-ivory">
        <h2 className="text-4xl font-semibold drop-shadow-lg sm:text-5xl">
          Tu experiencia empieza aquí
        </h2>
        <p className="mt-6 text-lg text-ivory/85 sm:text-xl">
          Preguntanos lo que quieras o animate a hacer una pre-reserva.
        </p>
        <p className="mt-3 text-lg text-ivory/85 sm:text-xl">
          Estamos disponibles para desconectarte de la ciudad y reconectarte con
          la naturaleza.
        </p>
        <div className="mt-10">
          <Button variant="secondary" size="xl" href={socials.whatsapp}>
            <FaWhatsapp className="text-xl" />
            Escribinos por WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactCta;
