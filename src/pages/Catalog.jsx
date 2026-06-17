import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import AdventureCard from "../components/AdventureCard.jsx";
import { catalog } from "../data/catalog.js";

const Catalog = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-ivory pt-28 pb-20 sm:pt-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow text-brown">El catálogo</p>
            <h1 className="mt-4 text-4xl font-semibold text-ink sm:text-6xl">
              Elegí tu aventura
            </h1>
            <p className="mt-5 text-lg text-muted">
              Cada experiencia está pensada para distintos gustos, edades y
              niveles. Tocá una para ver todos los detalles.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
            {catalog.map((adventure) => (
              <AdventureCard key={adventure.id} adventure={adventure} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Catalog;
