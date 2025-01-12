// script.js

document.addEventListener('DOMContentLoaded', function() {
  // Skapa en karta, koppla den till div "map"
  const map = L.map('map').setView([56.0, 14.0], 6);

  // Lägg in en tileLayer (OpenStreetMap som exempel)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  // Lägg in en markör
  L.marker([56.0, 14.0])
    .addTo(map)
    .bindPopup('Hej från Leaflet!')
    .openPopup();
});
