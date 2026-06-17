// Resuelve la ruta de un asset de la carpeta public/ respetando el `base`
// configurado en Vite (necesario al publicar bajo un subpath de GitHub Pages).
// asset("/img/logo.png") -> "/web-cabalgatas-dias-de-campo/img/logo.png"
export const asset = (path) =>
  `${import.meta.env.BASE_URL}${String(path).replace(/^\//, "")}`;
