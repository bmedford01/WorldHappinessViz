url = "http://ygroza.com/happiness.json"

d3.json(url).then(function (data) {
  var countries = data.map(obj => obj['Countryname']).sort();
  countries.forEach(country => {
    d3.select('#selDataset').append('option').text(country)
  });
});

createCharts();

function createCharts() {
  d3.select('#charts').html('');

  d3.json(url).then(function (data) {
    // d3.json("happiness.json").then(function(data){
    var gen = data.map(obj => obj.Generosity)
    gen = gen.reduce((a, b) => a + b) / gen.length;

    var health = data.map(obj => obj.Healthylifeexpectancy)
    health = health.reduce((a, b) => a + b) / health.length;

    var ladder = data.map(obj => obj.Ladderscore)
    ladder = ladder.reduce((a, b) => a + b) / ladder.length;

    var capita = data.map(obj => obj.LoggedGDPpercapita)
    capita = capita.reduce((a, b) => a + b) / capita.length;

    var corruption = data.map(obj => obj.Perceptionsofcorruption)
    corruption = corruption.reduce((a, b) => a + b) / corruption.length;

    var social = data.map(obj => obj.Socialsupport)
    social = social.reduce((a, b) => a + b) / social.length;

    var selection = d3.select('#selDataset').node().value;
    var sample = data.filter(obj => obj['Countryname'] == selection)[0];
    test = data;
    // console.log(data.Countryname);
    // console.log(sample);
    var x_val = [];
    var y_val = [];
    Object.entries(sample).forEach(([key, val]) => {
      if (key == 'Generosity') {
        x_val.push(key)
        y_val.push(val)
      };
      if (key == 'Healthylifeexpectancy') {
        x_val.push(key)
        y_val.push(val)
      };
      if (key == 'LoggedGDPpercapita') {
        x_val.push(key)
        y_val.push(val)
      };
      if (key == 'Perceptionsofcorruption') {
        x_val.push(key)
        y_val.push(val)
      };
      if (key == 'Socialsupport') {
        x_val.push(key)
        y_val.push(val)
      };
      if (key == 'Ladderscore') {
        x_val.push(key)
        y_val.push(val)
      };
    })
    // console.log(x_val, y_val);
    // console.log(expectancy);
    // var values = sample.sample_values.slice(0, 10).reverse();
    // var ids = sample.otu_ids.slice(0, 10).reverse().map(x => 'OTU ' + x);
    var bartrace1 = {
      x: x_val,
      y: y_val,
      //text:
      name: "Happiness Scores",
      type: "bar",
      // orientation: "h"
    };
    var bartrace2 = {
      x: x_val,
      y: [gen, health, ladder, capita, corruption, social],
      name: "World's Happiness",
      type: "bar",
    };
    var bardata = [bartrace1, bartrace2];
    var layout = {
      title: "Happiness Scores",
      xaxis: { title: "Happiness Factor" },
      yaxis: { title: "Score" }
    };

    Plotly.newPlot("charts", bardata, layout);

//generosity chart
    var traceGen = {
      x: data.map(obj => obj.Generosity),
      y: data.map(obj => obj.Ladderscore),
      mode: 'markers',
      type: 'scatter'
    };

    var data = [traceGen];


    Plotly.newPlot('scatter-plot-gen', data);

//life expectancy chart
    var traceLife = {
      x: data.map(obj => obj.Healthylifeexpectancy),
      y: data.map(obj => obj.Ladderscore),
      mode: 'markers',
      type: 'scatter'
    };

    var dataLife = [traceLife];


    Plotly.newPlot('scatter-plot-life', dataLife);




    var traceLife = {
      x: data.map(obj => obj.Healthylifeexpectancy),
      y: data.map(obj => obj.Ladderscore),
      mode: 'markers',
      type: 'scatter'
    };

    var data = [traceLife];


    Plotly.newPlot('scatter-plot-life', data);

    // ######################DON'T GO BELOW#######################
  });
};





function optionChanged() {
  createCharts();
}
