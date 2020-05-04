const mapboxgl = require("mapbox-gl");
const buildMarker = require('./marker');

mapboxgl.accessToken = "pk.eyJ1IjoiZ2lsYmVydHZlbGV6OTYiLCJhIjoiY2s5c3d1b3F0MTZqZjNtcDVwZWtvMG1oeCJ9.kHdRXKDMF0y8kx96v73ELw";
const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates. Chicago: [-87.641, 41.895]
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available
});


const marker = buildMarker('activity', [-74.009, 40.705]);

marker.addTo(map);