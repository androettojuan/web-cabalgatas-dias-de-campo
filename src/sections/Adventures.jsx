import { useNavigate } from "react-router-dom";
import Button from "../components/Button.jsx";
import AdventureCard from "../components/AdventureCard.jsx";
import { catalog } from "../data/catalog.js";

const Adventures = () => {
  const navigate = useNavigate();
  const preview = catalog.slice(0, 4);

  return (
    <section id="aventuras" className="bg-ivory py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-brown">Nuestras experiencias</p>
          <h2 className="mt-4 text-4xl font-semibold text-ink sm:text-5xl">
            Elegí tu aventura
          </h2>
          <p className="mt-5 text-lg text-muted">
            Desde un primer paseo para los más chicos hasta travesías de dos
            días por las sierras. Hay una experiencia a caballo para vos.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {preview.map((adventure) => (
            <AdventureCard key={adventure.id} adventure={adventure} />
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Button size="lg" onClick={() => navigate("/catalogo")}>
            Ver todas las aventuras
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Adventures;
