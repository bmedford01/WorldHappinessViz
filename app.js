url = "http://ygroza.com/happiness.json"

d3.json(url).then(function(data){

// d3.json("happiness.json").then(function(data){
    // console.log(data[10]);
    var countries = data.map(obj=>obj['Countryname']).sort();
    countries.forEach(country => {
        d3.select('#selDataset').append('option').text(country)
    });
    var gdp = data.map(obj=>obj["Logged GDP per capita"]);
    // console.log(gdp);
    var social = data.map(obj=>obj["Social support"]);
    // console.log(social);
    var expectancy = data.map(obj=>obj["Healthy life expectancy"]);
    // console.log(expectancy);
  })
  createCharts();
function createCharts() {
  d3.select('#charts').html('');

  d3.json(url).then(function(data){
    // d3.json("happiness.json").then(function(data){
    var gen = data.map(obj=>obj.Generosity)
    gen = gen.reduce((a,b)=>a+b)/gen.length;
    
    var health = data.map(obj=>obj.Healthylifeexpectancy)
    health = health.reduce((a,b)=>a+b)/health.length;
    
    var ladder = data.map(obj=>obj.Ladderscore)
    ladder = ladder.reduce((a,b)=>a+b)/ladder.length;
    
    var capita = data.map(obj=>obj.LoggedGDPpercapita)
    capita = capita.reduce((a,b)=>a+b)/capita.length;
    
    var corruption = data.map(obj=>obj.Perceptionsofcorruption)
    corruption = corruption.reduce((a,b)=>a+b)/corruption.length;
    
    var social = data.map(obj=>obj.Socialsupport)
    social = social.reduce((a,b)=>a+b)/social.length;

    var selection = d3.select('#selDataset').node().value;
    var sample = data.filter(obj => obj['Countryname'] == selection)[0];
    test = data;
    console.log(data.Countryname);
    console.log(sample);
    var x_val = [];
    var y_val = [];
    Object.entries(sample).forEach(([key,val])=>{
        if (key=='Generosity') {
            x_val.push(key)
            y_val.push(val)
        };
        if (key=='Healthylifeexpectancy') {
            x_val.push(key)
            y_val.push(val)
        };
        if (key=='LoggedGDPpercapita') {
            x_val.push(key)
            y_val.push(val)
        };
        if (key=='Perceptionsofcorruption') {
            x_val.push(key)
            y_val.push(val)
        };
        if (key=='Socialsupport') {
            x_val.push(key)
            y_val.push(val)
        };
        if (key=='Ladderscore') {
          x_val.push(key)
          y_val.push(val)
      };
    })
    console.log(x_val,y_val);
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
        y: [gen,health,ladder,capita,corruption,social],
        name: "World's Happiness",
        type: "bar",
    };
    var bardata = [bartrace1,bartrace2];
    var layout = {
        title: "Happiness Scores",
        xaxis: { title: "Happiness Factor" },
        yaxis: { title: "Score" }
    };
    
    Plotly.newPlot("charts", bardata, layout);
    
    var margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page


var svg = d3.select("#charts")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");
//Read the data

  // Add X axis
  var x = d3.scaleLinear()
    .domain([-.5, .7])
    .range([ 0, width ]);
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

  // Add Y axis
  var y = d3.scaleLinear()
    .domain([0, 10])
    .range([ height, 0]);
  svg.append("g")
    .call(d3.axisLeft(y));

  
  svg.append('g')
    .selectAll("dot")
    .data(data)
    .enter()
    .append("circle")
      .attr("cx", function (d) { return x(d.Generosity); } )
      .attr("cy", function (d) { return y(d.Ladderscore); } )
      .attr("r", 1.5)
      .style("fill", "#69b3a2")
    });
    
}
function optionChanged() {
    createCharts();
}
