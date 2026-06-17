import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Catalog from "./pages/Catalog.jsx";
import Adventure from "./pages/Adventure.jsx";

// Lleva el scroll al tope en cada cambio de ruta.
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalog />} />
        <Route path="/catalogo/:id" element={<Adventure />} />
      </Routes>
    </>
  );
}

export default App;
