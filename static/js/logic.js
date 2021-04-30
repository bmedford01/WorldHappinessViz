url = "http://ygroza.com/results.json"

d3.json(url).then(function(data) {
  console.log(data);

  var newCountryName = []

  for (var i = 0; i < data.length; i++) {
    newCountryName.push(
      data[i].Countryname
    );

    console.log(newCountryName);
}
});


// function createMap(happinessData) {

//   // Define a function we want to run once for each feature in the features array
//   // Give each feature a popup describing the place and time of the earthquake
//   function onEachFeature(data, layer) {
//     layer.bindPopup("<h3>" + data.Countryname +
//       "</h3><hr><p>" + data.Ladderscore + "</p>");
//   }

//   // Create a GeoJSON layer containing the features array on the earthquakeData object
//   // Run the onEachFeature function once for each piece of data in the array
//   var happiness = L.geoJSON(happinessData, {
//     onEachFeature: onEachFeature
//   });

//   // Sending our earthquakes layer to the createMap function
//   createMap(happiness);
// }

var countries = [
    {
      name: "Finland",
      Happiness_Score: 7.842,
      Rank: "1st of 149",
      location: [61.9241, 25.7482]
    },
    {
      name: "Denmark",
      Happiness_Score: 7.620,
      Rank: "2nd of 149",
      location: [56.2639, 9.5018]
    },
    {
      name: "Switzerland",
      Happiness_Score: 7.571,
      Rank: "3rd of 149",
      location: [46.8182, 8.2275]
    },
    {
      name: "Iceland",
      Happiness_Score: 7.554,
      Rank: "4th of 149",
      location: [64.9631, -19.0208]
    },
    {
        name: "Netherlands",
        Happiness_Score: 7.464,
        Rank: "5th of 149",
        location: [52.1326, 5.2913]
      },
      {
        name: "Norway",
        Happiness_Score: 7.392,
        Rank: "6th of 149",
        location: [60.4720, 8.4689]
      },
      {
        name: "Sweden",
        Happiness_Score: 7.363,
        Rank: "7th of 149",
        location: [60.1282, 18.6435]
      },
      {
        name: "Luxembourg",
        Happiness_Score: 7.324,
        Rank: "8th of 149",
        location: [49.8153, 6.1296]
      },
      {
        name: "New Zealand",
        Happiness_Score: 7.277,
        Rank: "9th of 149",
        location: [-40.9006, 174.8860]
      },
      {
        name: "Austria",
        Happiness_Score: 7.268,
        Rank: "10th of 149",
        location: [47.5162, 14.5501]
      },
      {
        name: "Australia",
        Happiness_Score: 7.183,
        Rank: "11th of 149",
        location: [-25.2744, 133.7751]
      },
      {
        name: "Israel",
        Happiness_Score: 7.157,
        Rank: "12th of 149",
        location: [31.0461, 34.8516]
      },
      {
        name: "Germany",
        Happiness_Score: 7.155,
        Rank: "13th of 149",
        location: [51.1657, 10.4515]
      },
      {
        name: "Canada",
        Happiness_Score: 7.103,
        Rank: "14th of 149",
        location: [56.1304, -106.3468]
      },
      {
        name: "Ireland",
        Happiness_Score: 7.085,
        Rank: "15th of 149",
        location: [53.1424, -7.6921]
      },
      {
        name: "Costa Rica",
        Happiness_Score: 7.069,
        Rank: "16th of 149",
        location: [9.7489, -83.7534]
      },
      {
        name: "United Kingdom",
        Happiness_Score: 7.064,
        Rank: "17th of 149",
        location: [55.3781, -3.4360]
      },
      {
        name: "Czech Republic",
        Happiness_Score: 6.965,
        Rank: "18th of 149",
        location: [49.8175, 15.4730]
      },
      {
        name: "United States",
        Happiness_Score: 6.951,
        Rank: "19th of 149",
        location: [37.0902, -95.7129]
      },
      {
        name: "Belgium",
        Happiness_Score: 6.834,
        Rank: "20th of 149",
        location: [50.5039, 4.4699]
      },
      {
        name: "France",
        Happiness_Score: 6.690,
        Rank: "21st of 149",
        location: [46.2276, 2.2137]
      },
      {
        name: "Bahrain",
        Happiness_Score: 6.647,
        Rank: "22nd of 149",
        location: [26.0667, 50.5577]
      },
      {
        name: "Malta",
        Happiness_Score: 6.602,
        Rank: "23rd of 149",
        location: [35.9375, 14.3754]
      },
      {
        name: "Taiwan",
        Happiness_Score: 6.584,
        Rank: "24th of 149",
        location: [23.6978, 120.9605]
      },
      {
        name: "United Arab Emirates",
        Happiness_Score: 6.561,
        Rank: "25th of 149",
        location: [23.4241, 53.8478]
      },
      {
        name: "Saudi Arabia",
        Happiness_Score: 6.494,
        Rank: "26th of 149",
        location: [23.8859, 45.0792]
      },
      {
        name: "Spain",
        Happiness_Score: 6.491,
        Rank: "27th of 149",
        location: [40.4637, -3.7492]
      },
      {
        name: "Italy",
        Happiness_Score: 6.483,
        Rank: "28th of 149",
        location: [41.8719, 12.5674]
      },
      {
        name: "Slovenia",
        Happiness_Score: 6.461,
        Rank: "29th of 149",
        location: [46.1512, 14.9955]
      },
      {
        name: "Guatemala",
        Happiness_Score: 6.435,
        Rank: "30th of 149",
        location: [15.7835, -90.2308]
      },
      {
        name: "Uruguay",
        Happiness_Score: 6.431,
        Rank: "31st of 149",
        location: [-32.5228, -55.7658]
      },
      {
        name: "Singapore",
        Happiness_Score: 6.377,
        Rank: "32nd of 149",
        location: [1.3521, 103.8198]
      },
      {
        name: "Kosovo",
        Happiness_Score: 6.372,
        Rank: "33rd of 149",
        location: [42.6026, 20.9030]
      },
      {
        name: "Slovakia",
        Happiness_Score: 6.331,
        Rank: "34th of 149",
        location: [48.6690, 19.6990]
      },
      {
        name: "Brazil",
        Happiness_Score: 6.330,
        Rank: "35th of 149",
        location: [-14.2350, -51.9253]
      },
      {
        name: "Mexico",
        Happiness_Score: 6.317,
        Rank: "36th of 149",
        location: [23.6345, -102.5528]
      },
      {
        name: "Jamaica",
        Happiness_Score: 6.309,
        Rank: "37th of 149",
        location: [18.1096, -77.2975]
      },
      {
        name: "Lithuania",
        Happiness_Score: 6.255,
        Rank: "38th of 149",
        location: [55.1694, 23.8813]
      },
      {
        name: "Cyprus",
        Happiness_Score: 6.223,
        Rank: "39th of 149",
        location: [35.1264, 33.4299]
      },
      {
        name: "Estonia",
        Happiness_Score: 6.189,
        Rank: "40th of 149",
        location: [58.5953, 25.0136]
      },
      {
        name: "Panama",
        Happiness_Score: 6.180,
        Rank: "41st of 149",
        location: [8.5380, -80.7821]
      },
      {
        name: "Uzbekistan",
        Happiness_Score: 6.179,
        Rank: "42nd of 149",
        location: [41.3775, 64.5853]
      },
      {
        name: "Chile",
        Happiness_Score: 6.172,
        Rank: "43rd of 149",
        location: [-35.6751, -71.5430]
      },
      {
        name: "Poland",
        Happiness_Score: 6.166,
        Rank: "44th of 149",
        location: [51.9194, 19.1451]
      },
      {
        name: "Kazakhstan",
        Happiness_Score: 6.152,
        Rank: "45th of 149",
        location: [48.0196, 66.9237]
      },
      {
        name: "Romania",
        Happiness_Score: 6.140,
        Rank: "46th of 149",
        location: [45.9432, 24.9668]
      },
      {
        name: "Kuwait",
        Happiness_Score: 6.106,
        Rank: "47th of 149",
        location: [29.3117, 47.4818]
      },
      {
        name: "Serbia",
        Happiness_Score: 6.078,
        Rank: "48th of 149",
        location: [44.0165, 21.0059]
      },
      {
        name: "El Salvador",
        Happiness_Score: 6.061,
        Rank: "49th of 149",
        location: [13.7942, -88.8965]
      },
      {
        name: "Mauritius",
        Happiness_Score: 6.049,
        Rank: "50th of 149",
        location: [-20.3484, 57.5522]
      },
      {
        name: "Latvia",
        Happiness_Score: 6.032,
        Rank: "51st of 149",
        location: [56.8796, 24.6032]
      },
      {
        name: "Colombia",
        Happiness_Score: 6.012,
        Rank: "52nd of 149",
        location: [4.5709, -74.2973]
      },
      {
        name: "Hungary",
        Happiness_Score: 5.992,
        Rank: "53rd of 149",
        location: [47.1625, 19.5033]
      },
      {
        name: "Thailand",
        Happiness_Score: 5.985,
        Rank: "54th of 149",
        location: [15.8700, 100.9925]
      },
      {
        name: "Nicaragua",
        Happiness_Score: 5.972,
        Rank: "55th of 149",
        location: [12.8654, -85.2072]
      },
      {
        name: "Japan",
        Happiness_Score: 5.940,
        Rank: "56th of 149",
        location: [36.2048, 138.2529]
      },
      {
        name: "Argentina",
        Happiness_Score: 5.929,
        Rank: "57th of 149",
        location: [-38.4161, -63.6167]
      },
      {
        name: "Portugal",
        Happiness_Score: 5.929,
        Rank: "58th of 149",
        location: [39.3999, -8.2245]
      },
      {
        name: "Honduras",
        Happiness_Score: 5.919,
        Rank: "59th of 149",
        location: [15.2000, -86.2419]
      },
      {
        name: "Croatia",
        Happiness_Score: 5.882,
        Rank: "60th of 149",
        location: [45.1000, 15.2000]
      },
      {
        name: "Philippines",
        Happiness_Score: 5.880,
        Rank: "61st of 149",
        location: [12.8797, 121.7740]
      },
      {
        name: "South Korea",
        Happiness_Score: 5.845,
        Rank: "62nd of 149",
        location: [35.9078, 127.7669]
      },
      {
        name: "Peru",
        Happiness_Score: 5.840,
        Rank: "63rd of 149",
        location: [-9.1900, -75.0152]
      },
      {
        name: "Bosnia and Herzegovina",
        Happiness_Score: 5.813,
        Rank: "64th of 149",
        location: [43.9159, 17.6791]
      },
      {
        name: "Moldova",
        Happiness_Score: 5.766,
        Rank: "65th of 149",
        location: [47.4116, 28.3699]
      },
      {
        name: "Ecuador",
        Happiness_Score: 5.764,
        Rank: "66th of 149",
        location: [-1.8312, -78.1834]
      },
      {
        name: "Kyrgyzstan",
        Happiness_Score: 5.744,
        Rank: "67th of 149",
        location: [41.2044, 74.7661]
      },
      {
        name: "Greece",
        Happiness_Score: 5.723,
        Rank: "68th of 149",
        location: [39.0742, 21.8243]
      },
      {
        name: "Bolivia",
        Happiness_Score: 5.716,
        Rank: "69th of 149",
        location: [-16.2902, -63.5887]
      },
      {
        name: "Mongolia",
        Happiness_Score: 5.677,
        Rank: "70th of 149",
        location: [46.8625, 103.8467]
      },
      {
        name: "Paraguay",
        Happiness_Score: 5.653,
        Rank: "71st of 149",
        location: [-23.4425, -58.4438]
      },
      {
        name: "Montenegro",
        Happiness_Score: 5.581,
        Rank: "72nd of 149",
        location: [42.7087, 19.3744]
      },
      {
        name: "Dominican Republic",
        Happiness_Score: 5.545,
        Rank: "73rd of 149",
        location: [18.7357, -70.1627]
      },
      {
        name: "North Cyprus",
        Happiness_Score: 5.536,
        Rank: "74th of 149",
        location: [35.2480, 33.6577]
      },
      {
        name: "Belarus",
        Happiness_Score: 5.534,
        Rank: "75th of 149",
        location: [53.7098, 27.9534]
      },
      {
        name: "Russia",
        Happiness_Score: 5.477,
        Rank: "76th of 149",
        location: [61.5240, 105.3188]
      },
      {
        name: "Hong Kong",
        Happiness_Score: 5.477,
        Rank: "77th of 149",
        location: [22.3193, 114.1694]
      },
      {
        name: "Tajikistan",
        Happiness_Score: 5.466,
        Rank: "78th of 149",
        location: [38.8610, 71.2761]
      },
      {
        name: "Vietnam",
        Happiness_Score: 5.411,
        Rank: "79th of 149",
        location: [14.0583, 108.2772]
      },
      {
        name: "Libya",
        Happiness_Score: 5.410,
        Rank: "80th of 149",
        location: [26.3351, 17.2283]
      },
      {
        name: "Malaysia",
        Happiness_Score: 5.384,
        Rank: "81st of 149",
        location: [4.2105, 101.9758]
      },
      {
        name: "Indonesia",
        Happiness_Score: 5.345,
        Rank: "82nd of 149",
        location: [-0.7893, 113.9213]
      },
      {
        name: "Congo",
        Happiness_Score: 5.342,
        Rank: "83rd of 149",
        location: [-4.0383, 21.7587]
      },
      {
        name: "China",
        Happiness_Score: 5.339,
        Rank: "84th of 149",
        location: [35.8617, 104.1954]
      },
      {
        name: "Ivory Coast",
        Happiness_Score: 5.306,
        Rank: "85th of 149",
        location: [7.5400, -5.5471]
      },
      {
        name: "Armenia",
        Happiness_Score: 5.283,
        Rank: "86th of 149",
        location: [40.0691, 45.0382]
      },
      {
        name: "Nepal",
        Happiness_Score: 5.269,
        Rank: "87th of 149",
        location: [28.3949, 84.1240]
      },
      {
        name: "Bulgaria",
        Happiness_Score: 5.266,
        Rank: "88th of 149",
        location: [42.7339, 25.4858]
      },
      {
        name: "Maldives",
        Happiness_Score: 5.198,
        Rank: "89th of 149",
        location: [3.2028, 73.2207]
      },
      {
        name: "Azerbaijan",
        Happiness_Score: 5.171,
        Rank: "90th of 149",
        location: [40.1431, 47.5769]
      },
      {
        name: "Cameroon",
        Happiness_Score: 5.142,
        Rank: "91st of 149",
        location: [7.3697, 12.3547]
      },
      {
        name: "Senegal",
        Happiness_Score: 5.132,
        Rank: "92nd of 149",
        location: [14.4974, -14.4524]
      },
      {
        name: "Albania",
        Happiness_Score: 5.117,
        Rank: "93rd of 149",
        location: [41.1533, 20.1683]
      },
      {
        name: "North Macedonia",
        Happiness_Score: 5.101,
        Rank: "94th of 149",
        location: [41.6086, 21.7453]
      },
      {
        name: "Ghana",
        Happiness_Score: 5.088,
        Rank: "95th of 149",
        location: [7.9465, -1.0232]
      },
      {
        name: "Niger",
        Happiness_Score: 5.074,
        Rank: "96th of 149",
        location: [17.6078, 8.0817]
      },
      {
        name: "Turkmenistan",
        Happiness_Score: 5.066,
        Rank: "97th of 149",
        location: [38.9697, 59.5563]
      },
      {
        name: "Gambia",
        Happiness_Score: 5.051,
        Rank: "98th of 149",
        location: [13.4432, -15.3101]
      },
      {
        name: "Benin",
        Happiness_Score: 5.045,
        Rank: "99th of 149",
        location: [9.3077, 2.3158]
      },
      {
        name: "Laos",
        Happiness_Score: 5.030,
        Rank: "100th of 149",
        location: [19.8563, 102.4955]
      },
      {
        name: "Bangladesh",
        Happiness_Score: 5.025,
        Rank: "101st of 149",
        location: [23.6850, 90.3563]
      },
      {
        name: "Guinea",
        Happiness_Score: 4.984,
        Rank: "102nd of 149",
        location: [9.9456, -9.6966]
      },
      {
        name: "South Africa",
        Happiness_Score: 4.956,
        Rank: "103rd of 149",
        location: [-30.5595, 22.9375]
      },
      {
        name: "Turkey",
        Happiness_Score: 4.948,
        Rank: "104th of 149",
        location: [38.9637, 35.2433]
      },
      {
        name: "Pakistan",
        Happiness_Score: 4.934,
        Rank: "105th of 149",
        location: [30.3753, 69.3451]
      },
      {
        name: "Morocco",
        Happiness_Score: 4.918,
        Rank: "106th of 149",
        location: [31.7917, -7.0926]
      },
      {
        name: "Venezuela",
        Happiness_Score: 4.892,
        Rank: "107th of 149",
        location: [6.4238, -66.5897]
      },
      {
        name: "Georgia",
        Happiness_Score: 4.891,
        Rank: "108th of 149",
        location: [42.3154, 43.3569]
      },
      {
        name: "Algeria",
        Happiness_Score: 4.887,
        Rank: "109th of 149",
        location: [28.0339, 1.6596]
      },
      {
        name: "Ukraine",
        Happiness_Score: 4.875,
        Rank: "110th of 149",
        location: [48.3794, 31.1656]
      },
      {
        name: "Iraq",
        Happiness_Score: 4.854,
        Rank: "111th of 149",
        location: [33.2232, 43.6793]
      },
      {
        name: "Gabon",
        Happiness_Score: 4.852,
        Rank: "112th of 149",
        location: [-0.8037, 11.6094]
      },
      {
        name: "Burkina Faso",
        Happiness_Score: 4.834,
        Rank: "113th of 149",
        location: [12.2383, -1.5616]
      },
      {
        name: "Cambodia",
        Happiness_Score: 4.830,
        Rank: "114th of 149",
        location: [12.5657, 104.9910]
      },
      {
        name: "Mozambique",
        Happiness_Score: 4.794,
        Rank: "115th of 149",
        location: [-18.6657, 35.5296]
      },
      {
        name: "Nigeria",
        Happiness_Score: 4.759,
        Rank: "116th of 149",
        location: [9.0820, 8.6753]
      },
      {
        name: "Mali",
        Happiness_Score: 4.723,
        Rank: "117th of 149",
        location: [17.5707, -3.9962]
      },
      {
        name: "Iran",
        Happiness_Score: 4.721,
        Rank: "118th of 149",
        location: [32.4279, 53.6880]
      },
      {
        name: "Uganda",
        Happiness_Score: 4.636,
        Rank: "119th of 149",
        location: [1.3733, 32.2903]
      },
      {
        name: "Liberia",
        Happiness_Score: 4.625,
        Rank: "120th of 149",
        location: [6.4281, -9.4295]
      },
      {
        name: "Kenya",
        Happiness_Score: 4.607,
        Rank: "121st of 149",
        location: [-0.0236, 37.9062]
      },
      {
        name: "Tunisia",
        Happiness_Score: 4.596,
        Rank: "122nd of 149",
        location: [33.8869, 9.5375]
      },
      {
        name: "Lebanon",
        Happiness_Score: 4.584,
        Rank: "123rd of 149",
        location: [33.8547, 35.8623]
      },
      {
        name: "Namibia",
        Happiness_Score: 4.574,
        Rank: "124th of 149",
        location: [-22.9576, 18.4904]
      },
      {
        name: "Palestinian Territories",
        Happiness_Score: 4.517,
        Rank: "125th of 149",
        location: [31.9522, 35.2332]
      },
      {
        name: "Myanmar",
        Happiness_Score: 4.426,
        Rank: "126th of 149",
        location: [21.9162, 95.9560]
      },
      {
        name: "Jordan",
        Happiness_Score: 4.395,
        Rank: "127th of 149",
        location: [30.5852, 36.2384]
      },
      {
        name: "Chad",
        Happiness_Score: 4.355,
        Rank: "128th of 149",
        location: [15.4542, 18.7322]
      },
      {
        name: "Sri Lanka",
        Happiness_Score: 4.325,
        Rank: "129th of 149",
        location: [7.8731, 80.7718]
      },
      {
        name: "Swaziland",
        Happiness_Score: 4.308,
        Rank: "130th of 149",
        location: [-26.5225, 31.4659]
      },
      {
        name: "Comoros",
        Happiness_Score: 4.289,
        Rank: "131st of 149",
        location: [-11.6455, 43.3333]
      },
      {
        name: "Egypt",
        Happiness_Score: 4.283,
        Rank: "132nd of 149",
        location: [26.8206, 30.8025]
      },
      {
        name: "Ethiopia",
        Happiness_Score: 4.275,
        Rank: "133rd of 149",
        location: [9.1450, 40.4897]
      },
      {
        name: "Mauritania",
        Happiness_Score: 4.227,
        Rank: "134th of 149",
        location: [21.0079, -10.9408]
      },
      {
        name: "Madagascar",
        Happiness_Score: 4.208,
        Rank: "135th of 149",
        location: [-18.7669, 46.8691]
      },
      {
        name: "Togo",
        Happiness_Score: 4.107,
        Rank: "136th of 149",
        location: [8.6195, 0.8248]
      },
      {
        name: "Zambia",
        Happiness_Score: 4.073,
        Rank: "137th of 149",
        location: [-13.1339, 27.8493]
      },
      {
        name: "Sierra Leone",
        Happiness_Score: 3.849,
        Rank: "138th of 149",
        location: [8.4606, -11.7799]
      },
      {
        name: "India",
        Happiness_Score: 3.819,
        Rank: "139th of 149",
        location: [20.5937, 78.9629]
      },
      {
        name: "Burundi",
        Happiness_Score: 3.775,
        Rank: "140th of 149",
        location: [-3.3731, 29.9189]
      },
      {
        name: "Yemen",
        Happiness_Score: 3.658,
        Rank: "141st of 149",
        location: [15.5527, 48.5164]
      },
      {
        name: "Tanzania",
        Happiness_Score: 3.623,
        Rank: "142nd of 149",
        location: [-6.3690, 34.8888]
      },
      {
        name: "Haiti",
        Happiness_Score: 3.615,
        Rank: "143nd of 149",
        location: [18.9712, -72.2852]
      },
      {
        name: "Malawi",
        Happiness_Score: 3.600,
        Rank: "144th of 149",
        location: [-13.2543, 34.3015]
      },
      {
        name: "Lesotho",
        Happiness_Score: 3.512,
        Rank: "145th of 149",
        location: [-29.6100, 28.2336]
      },
      {
        name: "Botswana",
        Happiness_Score: 3.467,
        Rank: "146th of 149",
        location: [-22.3285, 24.6849]
      },
      {
        name: "Rwanda",
        Happiness_Score: 3.415,
        Rank: "147th of 149",
        location: [-1.9403, 29.8739]
      },
      {
        name: "Zimbabwe",
        Happiness_Score: 3.145,
        Rank: "148th of 149",
        location: [-19.0154, 29.1549]
      },
      {
        name: "Afghanistan",
        Happiness_Score: 2.523,
        Rank: "149th of 149",
        location: [33.9391, 67.7100]
      },
  ];

  var countryMarkers = [];

  for (var i = 0; i < countries.length; i++) {
      countryMarkers.push(
          L.marker(countries[i].location).bindPopup("<h3>" + countries[i].name + "</h3><hr><p>" + "Rank: " + countries[i].Rank + "</p><p>" + "Happiness Score: " + countries[i].Happiness_Score + "</p")
      );
  }

  var countryLayer = L.layerGroup(countryMarkers);

  // Define variables for our tile layers
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

  var baseMaps = {
    Light: light,
    Dark: dark,
    Street: street
  };

  var overlayMaps = {
    Countries: countryLayer
  };

  var myMap = L.map("map", {
    center: [0, 0],
    zoom: 2,
    layers: [street, countryLayer]
  });

  L.control.layers(baseMaps, overlayMaps).addTo(myMap);
