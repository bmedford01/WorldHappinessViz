url = "https://cors-anywhere.herokuapp.com/https://limitless-brushlands-31442.herokuapp.com"

var light = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "light-v10",
  accessToken: API_KEY
});

var dark = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "dark-v10",
  accessToken: API_KEY
});

var street = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
});

var myMap = L.map("map", {
  center: [0, 0],
  zoom: 2,
  layers: street
});

var baseMaps = {
  Light: light,
  Dark: dark,
  Street: street
};

d3.json(url).then(function (data) {
  var marker_list = [];
  
  data.forEach(({ Lat, Long, Name, Score }) => {
    marker_list.push(L.marker([Lat,Long]).bindPopup("<h3>" + Name + "</h3><hr><p>"  + "Happiness Score: " + Score + "</p"))
  });
  
  var country_list = L.layerGroup(marker_list).addTo(myMap);
  
  var overlayMaps = {
    Countries: country_list
  };
  
  L.control.layers(baseMaps,overlayMaps).addTo(myMap);
});

