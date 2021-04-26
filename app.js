// d3.json('happiness.json').then(data=>{
//     console.log(
        
//         Object.keys(data[1])
        
        
        
//         );
// })


  d3.csv("world-happiness-report-2021.csv").then(function (data) {
      var countries = data.map(obj=>obj['Country name']).sort();
        

      countries.forEach(country => {
          d3.select('#selDataset').append('option').text(country)
        });
      });
      
      function optionChanged() {
        show();
      };
      
      show();
    
      function show() {
        d3.csv('world-happiness-report-2021.csv').then(data=>{
          var selection = d3.select('#selDataset').node().value
          

          var sample = data.filter(obj=>obj['Country name'] == selection)[0];
      
          d3.select('.charts').html('');
          Object.entries(sample).forEach(([key,val])=>{
            d3.select('.container').append('h5').text(key.toUpperCase()+': '+val)
          });
    
    
          var data = [
            {
              x: names.slice(0,10).reverse(),
              y: generosity.slice(0,10).reverse().map(y=>'OTU '+y),
              type: 'bar',
              orientation: 'h'
            }
          ];
          Plotly.newPlot('bar', data);
        
        console.log(sample);
    
        var trace1 = {
          x: names,
            y: generosity,
            type: 'bubble',
            mode: 'markers',
          marker: {
            size:  generosity
          }
        };
    
        var data = [trace1];
        
        var layout = {
          title: 'Marker Size',
          showlegend: false,
          height: 600,
          width: 600
        };
        
        Plotly.newPlot('bubble', data);
    
        var data = [
            {
              x: names,
              y: generosity,
              type: 'bubble',
              mode: 'markers',
                marker: {
    
                }}
            ];
        })
    }
    

