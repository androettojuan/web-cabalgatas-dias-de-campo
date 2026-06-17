import { Link } from "react-router-dom";
import { HiArrowUpRight } from "react-icons/hi2";
import { formatPrice } from "../data/catalog.js";

// Tarjeta de experiencia con imagen, título sobre degradado y zoom al hover.
const AdventureCard = ({ adventure }) => {
  return (
    <Link
      to={`/catalogo/${adventure.id}`}
      className="group relative block aspect-[4/5] overflow-hidden rounded-2xl shadow-soft transition-shadow duration-300 hover:shadow-card"
    >
      <img
        src={adventure.image}
        alt={adventure.title}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bark/85 via-bark/20 to-transparent" />

      {adventure.price && (
        <span className="absolute right-3 top-3 rounded-full bg-ivory/90 px-3 py-1 text-sm font-semibold text-bark backdrop-blur-sm">
          {formatPrice(adventure.price)}
        </span>
      )}

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
        <h3 className="text-xl font-semibold text-ivory drop-shadow sm:text-2xl">
          {adventure.title}
        </h3>
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ivory/15 text-ivory backdrop-blur-sm transition-all duration-300 group-hover:bg-sand group-hover:text-bark">
          <HiArrowUpRight />
        </span>
      </div>
    </Link>
  );
};

export default AdventureCard;
