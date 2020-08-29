"use strict";

//Coordonnées choisies pour l'affichage de la map (Toulouse)
var mymap = L.map("map").setView([43.6043, 1.4437], 12.5);

//Affichage de la carte au coordonnées sélectionnées
L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYnNhbzE3IiwiYSI6ImNrYXJyNzUwNTBpNjMycHFmZ2ZueXNhb2wifQ.Rcq6-hBxG6yxYIb86GBAVA",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 20,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      "pk.eyJ1IjoiYnNhbzE3IiwiYSI6ImNrYXJyNzUwNTBpNjMycHFmZ2ZueXNhb2wifQ.Rcq6-hBxG6yxYIb86GBAVA",
  }
).addTo(mymap);

/**Icons */

let greenIcon = L.icon({
  iconUrl: '../pictures/icones/greenIcone.webp',
  // shadowUrl: 'leaf-shadow.png',
  iconSize:     [30, 55], // size of the icon
  iconAnchor:   [15, 80], // point of the icon which will correspond to marker's location
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

let redIcon = L.icon({
  iconUrl: '../pictures/icones/redIcon.webp',
  // shadowUrl: 'leaf-shadow.png',
  iconSize:     [30, 55], // size of the icon
  iconAnchor:   [15, 80], // point of the icon which will correspond to marker's location
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});