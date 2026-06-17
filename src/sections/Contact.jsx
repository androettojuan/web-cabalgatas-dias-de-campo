import { HiPhone, HiEnvelope, HiMapPin } from "react-icons/hi2";
import { contact } from "../data/site.js";

const items = [
  {
    icon: HiPhone,
    label: "Teléfono / WhatsApp",
    value: contact.phoneDisplay,
    href: contact.whatsapp,
  },
  {
    icon: HiEnvelope,
    label: "Email",
    value: contact.email,
    href: `mailto:${contact.email}`,
  },
  {
    icon: HiMapPin,
    label: "Dónde estamos",
    value: contact.location,
    href: null,
  },
];

const Contact = () => {
  return (
    <section id="contacto" className="bg-ivory py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-brown">Contacto</p>
          <h2 className="mt-4 text-4xl font-semibold text-ink sm:text-5xl">
            Vení a vivir la aventura
          </h2>
        </div>

        <div className="mt-14 grid items-stretch gap-8 lg:grid-cols-2">
          {/* Datos de contacto */}
          <div className="flex flex-col justify-center gap-6 rounded-3xl bg-bark p-8 text-ivory shadow-card sm:p-10">
            {items.map(({ icon: Icon, label, value, href }) => {
              const content = (
                <div className="flex items-center gap-5">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-ivory/10 text-2xl text-sand">
                    <Icon />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-ivory/50">
                      {label}
                    </p>
                    <p className="text-lg font-medium">{value}</p>
                  </div>
                </div>
              );
              return href ? (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="transition-opacity hover:opacity-80"
                >
                  {content}
                </a>
              ) : (
                <div key={label}>{content}</div>
              );
            })}
          </div>

          {/* Mapa */}
          <div className="overflow-hidden rounded-3xl shadow-card">
            <iframe
              title="Ubicación en Google Maps"
              src={contact.mapsEmbed}
              className="h-full min-h-[320px] w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
