import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaTripadvisor,
  FaGoogle,
} from "react-icons/fa";
import { socials } from "../data/site.js";
import { asset } from "../utils/asset.js";

const socialLinks = [
  { icon: FaFacebookF, url: socials.facebook, label: "Facebook" },
  { icon: FaGoogle, url: socials.google, label: "Google" },
  { icon: FaTripadvisor, url: socials.tripadvisor, label: "Tripadvisor" },
  { icon: FaWhatsapp, url: socials.whatsapp, label: "WhatsApp" },
  { icon: FaInstagram, url: socials.instagram, label: "Instagram" },
];

const Footer = () => {
  return (
    <footer className="bg-bark text-ivory">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 py-16 text-center">
        <p className="eyebrow text-sand">Viví la aventura</p>

        <img
          src={asset("/img/logo-blanco.png")}
          alt="Cabalgatas y Días de Campo"
          className="h-28 w-auto object-contain sm:h-32"
        />

        <div className="flex flex-wrap items-center justify-center gap-4">
          {socialLinks.map(({ icon: Icon, url, label }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-ivory/25 text-lg text-ivory transition-all duration-300 hover:-translate-y-1 hover:border-sand hover:bg-sand hover:text-bark"
            >
              <Icon />
            </a>
          ))}
        </div>

        <p className="text-sm text-ivory/60">
          © {new Date().getFullYear()} Cabalgatas y Días de Campo · Alta Gracia,
          Córdoba, Argentina
        </p>
      </div>
    </footer>
  );
};

export default Footer;
