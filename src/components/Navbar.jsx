import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { asset } from "../utils/asset.js";

const Navbar = ({ overlay = false }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Barra sólida si no estamos en modo overlay o si ya se hizo scroll.
  const solid = !overlay || scrolled;

  const links = [
    { label: "Inicio", to: "/" },
    { label: "Elegí tu aventura", to: "/catalogo" },
    ...(isHome
      ? [
          { label: "Testimonios", href: "#testimonios" },
          { label: "Contacto", href: "#contacto" },
        ]
      : []),
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-ivory/90 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <button
          onClick={() => navigate("/")}
          aria-label="Inicio"
          className="flex items-center"
        >
          <img
            src={asset(solid ? "/img/logo.png" : "/img/logo-blanco.png")}
            alt="Cabalgatas y Días de Campo"
            className="h-12 w-auto object-contain transition-all duration-300"
          />
        </button>

        {/* Navegación de escritorio */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) =>
            link.to ? (
              <Link
                key={link.label}
                to={link.to}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-brown ${
                  solid ? "text-ink" : "text-ivory"
                }`}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-brown ${
                  solid ? "text-ink" : "text-ivory"
                }`}
              >
                {link.label}
              </a>
            )
          )}
        </div>

        {/* Botón de menú móvil */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Menú"
          className={`md:hidden text-3xl transition-colors ${
            solid ? "text-bark" : "text-ivory"
          }`}
        >
          {open ? <HiXMark /> : <HiBars3 />}
        </button>
      </nav>

      {/* Panel móvil */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-80 border-t border-sand/40" : "max-h-0"
        }`}
      >
        <div className="flex flex-col bg-ivory/95 px-6 py-2 backdrop-blur-md">
          {links.map((link) =>
            link.to ? (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setOpen(false)}
                className="border-b border-sand/30 py-4 text-base font-medium text-ink last:border-0"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-sand/30 py-4 text-base font-medium text-ink last:border-0"
              >
                {link.label}
              </a>
            )
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
