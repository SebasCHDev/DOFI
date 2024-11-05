const mapa = L.map("mapa").setView([6.26706, -75.56941], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,
  attribution: "© OpenStreetMap contributors",
}).addTo(mapa);

const marcador = L.marker([6.26706, -75.56941]).addTo(mapa);
marcador.bindPopup("<b>¡Aquí estamos!</b><br>UdeA").openPopup();
