import { Link, useNavigate, useParams } from "react-router-dom";
import { BiTimeFive, BiUserVoice } from "react-icons/bi";
import { GiHorseshoe } from "react-icons/gi";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaUtensils, FaWater } from "react-icons/fa";
import { HiArrowLeft } from "react-icons/hi2";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Button from "../components/Button.jsx";
import { getAdventure, formatPrice } from "../data/catalog.js";

const iconMap = {
  time: BiTimeFive,
  age: GiHorseshoe,
  level: BiUserVoice,
  group: BsFillPeopleFill,
  meal: FaUtensils,
  river: FaWater,
};

const Adventure = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const adventure = getAdventure(id);

  if (!adventure) {
    return (
      <>
        <Navbar />
        <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-ivory px-6 text-center">
          <h1 className="text-3xl font-semibold text-ink">
            No encontramos esa aventura
          </h1>
          <Button onClick={() => navigate("/catalogo")}>
            Volver al catálogo
          </Button>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-ivory pt-28 pb-20 sm:pt-32">
        <div className="mx-auto max-w-6xl px-6">
          <Link
            to="/catalogo"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-brown"
          >
            <HiArrowLeft /> Volver al catálogo
          </Link>

          <header className="mt-6 text-center">
            <p className="eyebrow text-brown">Experiencia</p>
            <h1 className="mt-3 text-4xl font-semibold text-ink sm:text-6xl">
              {adventure.title}
            </h1>
            {adventure.price && (
              <p className="mt-5 inline-flex items-baseline gap-2 rounded-full bg-brown px-6 py-2 text-ivory">
                <span className="text-2xl font-semibold">
                  {formatPrice(adventure.price)}
                </span>
                {adventure.priceNote && (
                  <span className="text-sm text-ivory/75">
                    {adventure.priceNote}
                  </span>
                )}
              </p>
            )}
          </header>

          {/* Galería */}
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {adventure.gallery.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${adventure.title} ${i + 1}`}
                className="aspect-square w-full rounded-3xl object-cover shadow-card"
              />
            ))}
          </div>

          {/* Descripción */}
          <div className="mx-auto mt-12 max-w-3xl rounded-3xl bg-cream p-8 text-center sm:p-10">
            <p className="text-lg leading-relaxed text-bark">
              {adventure.description}
            </p>
          </div>

          {/* Specs */}
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {adventure.specs.map((spec) => {
              const Icon = iconMap[spec.icon];
              return (
                <div
                  key={spec.title}
                  className="flex w-full max-w-xs flex-col items-center gap-3 rounded-3xl bg-white/60 p-6 text-center shadow-soft sm:w-64"
                >
                  <span className="text-4xl text-brown">
                    {Icon && <Icon />}
                  </span>
                  <p className="text-lg font-semibold text-ink">{spec.title}</p>
                  <p className="text-sm text-muted">{spec.value}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-14 flex justify-center">
            <Button size="xl" onClick={() => navigate("/catalogo")}>
              Explorar más aventuras
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Adventure;
