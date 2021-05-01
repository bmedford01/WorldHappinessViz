// url = "https://cors-anywhere.herokuapp.com/https://limitless-brushlands-31442.herokuapp.com/"

url = "https://ygroza.com/results.json"

d3.json(url).then(function (data) {
  var countries = data.map(obj => obj['Name']).sort();
  countries.forEach(country => {
    d3.select('#selDataset').append('option').text(country)
  });
});
createCharts();
function createCharts() {
  d3.select('#charts').html('');
  d3.json(url).then(function (data) {
    // d3.json("happiness.json").then(function(data){
    var gen = data.map(obj => obj.Generocity)
    gen = gen.reduce((a, b) => a + b) / gen.length;
    var health = data.map(obj => obj.LifeExp)
    health = health.reduce((a, b) => a + b) / health.length;
    var ladder = data.map(obj => obj.Score)
    ladder = ladder.reduce((a, b) => a + b) / ladder.length;
    var capita = data.map(obj => obj.GDP)
    capita = capita.reduce((a, b) => a + b) / capita.length;
    var corruption = data.map(obj => obj.Corruption)
    corruption = corruption.reduce((a, b) => a + b) / corruption.length;
    var social = data.map(obj => obj.Support)
    social = social.reduce((a, b) => a + b) / social.length;
    var selection = d3.select('#selDataset').node().value;
    var sample = data.filter(obj => obj['Name'] == selection)[0];
    test = data;
    // console.log(data.Name);
    // console.log(sample);
    var x_val = [];
    var y_val = [];
    Object.entries(sample).forEach(([key, val]) => {
      if (key == 'Generocity') {
        x_val.push(key)
        y_val.push(val)
      };
      if (key == 'LifeExp') {
        x_val.push(key)
        y_val.push(val)
      };
      if (key == 'GDP') {
        x_val.push(key)
        y_val.push(val)
      };
      if (key == 'Corruption') {
        x_val.push(key)
        y_val.push(val)
      };
      if (key == 'Support') {
        x_val.push(key)
        y_val.push(val)
      };
      if (key == 'Score') {
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
      y: [corruption, capita, gen, health, ladder, social],
      //y: [gen, health, ladder, capita, corruption, social],
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
      x: data.map(obj => obj.Generocity),
      y: data.map(obj => obj.Score),
      text: data.map(row => row.Name),
      mode: 'markers',
      type: 'scatter'
    };
    var dataGen = [traceGen];
    var layoutGen = {
        title: "Generosity vs. Overall Happiness",
        xaxis: { title: "Generosity"},
        yaxis: { title: "Happiness Score"}
    };
    Plotly.newPlot('scatter-plot-gen', dataGen, layoutGen);

//life expectancy chart
    var traceLife = {
      x: data.map(obj => obj.LifeExp),
      y: data.map(obj => obj.Score),
      text: data.map(row => row.Name),
      mode: 'markers',
      type: 'scatter'
    };
    var dataLife = [traceLife];
    var layoutLife = {
        title: "Life Expectancy vs. Overall Happiness",
        xaxis: { title: "Life Expectancy"},
        yaxis: { title: "Happiness Score"}
    };
    Plotly.newPlot('scatter-plot-life', dataLife, layoutLife);

//GDP Chart
    var traceGDP = {
      x: data.map(obj => obj.GDP),
      y: data.map(obj => obj.Score),
      text: data.map(row => row.Name),
      mode: 'markers',
      type: 'scatter'
    };
    var dataGDP = [traceGDP];
    var layoutGDP = {
        title: "GDP per Capita vs. Overall Happiness",
        xaxis: { title: "GDP"},
        yaxis: { title: "Happiness Score"}
    };
    Plotly.newPlot('scatter-plot-gdp', dataGDP, layoutGDP);

//Social Support Chart
    var traceSocial = {
        x: data.map(obj => obj.Support),
        y: data.map(obj => obj.Score),
        text: data.map(row => row.Name),
        mode: 'markers',
        type: 'scatter'
      };
    var dataSocial = [traceSocial];
    var layoutSocial = {
        title: "Social Support vs. Overall Happiness",
        xaxis: { title: "Social Support"},
        yaxis: { title: "Happiness Score"}
    };
      Plotly.newPlot('scatter-plot-social', dataSocial, layoutSocial);

//Corruption Chart
    var traceCorruption = {
        x: data.map(obj => obj.Corruption),
        y: data.map(obj => obj.Score),
        text: data.map(row => row.Name),
        mode: 'markers',
        type: 'scatter'
      };
      var dataCorruption = [traceCorruption];
      var layoutCorruption = {
        title: "Perception of Corruption vs. Overall Happiness",
        xaxis: { title: "Corruption"},
        yaxis: { title: "Happiness Score"}
    };
      Plotly.newPlot('scatter-plots-corruption', dataCorruption, layoutCorruption);


    // ######################DON'T GO BELOW#######################
  });
};
function optionChanged() {
  createCharts();
}
