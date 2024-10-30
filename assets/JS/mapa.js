const mapa = L.map('mapa').setView([-13.15878, -74.22321], 13); //modificar coordenadas

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: '© OpenStreetMap contributors'
}).addTo(mapa);

const marcador = L.marker([-13.15878, -74.22321]).addTo(mapa);
marcador.bindPopup('<b>¡Aquí estamos!</b><br>Ayacucho').openPopup();

