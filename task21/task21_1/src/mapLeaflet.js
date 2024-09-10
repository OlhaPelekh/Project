export function getMapLeaflet() {
  const mapLeaflet = L.map("mapLeaflet").setView([51.505, -0.09], 13);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(mapLeaflet);

  L.marker([49.84, 24.03])
    .addTo(mapLeaflet)
    .bindPopup("Lviv, <br> Ukraine")
    .openPopup();
}
