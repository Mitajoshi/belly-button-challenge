const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Initializes the page with a default plot
function init() {
  dropdownRef = d3.select("#selDataset");

  d3.json(url).then(function(data) {

    sampleNames = data.names
    for(let i = 0; i < sampleNames.length; i++ ) {
      dropdownRef.append("option").text(sampleNames[i]).property("value",sampleNames[i]);
    }
    first = sampleNames[0];
    metadata(first);
    createChart(first);
    
  });
  
};

// Function to print individual's metadata as per drop down menu selection
function metadata(s){
  d3.json(url).then(function(data) {
  // Fetching the metadata to be displayed in the 'Demographic Info' table
  let metaData = [];
  let selectionlMetadata = [];
  
  metaData = data.metadata;
  
  // Looping through the entire metadata set and match each set's id with selected individual.
  // Picking that metadata set for displaying in the table
  for(y = 0; y < metaData.length; y++){
    if(metaData[y].id == s){
      selectionlMetadata = metaData[y];
    }
  }
  
  // Using D3 to select the table body
  let tableSelection = d3.select('#sample-metadata'); 

  // Clearing existing content
  tableSelection.html("");

  // Appending one table row `tr` to the table body
  for (const key in selectionlMetadata) {
    if (selectionlMetadata.hasOwnProperty(key)) {
      const value = selectionlMetadata[key];
      const row = tableSelection.append('tr').text(`${key}: ${value}`);
    }
  }
});
}

// Function to create the charts 
function createChart(c){
  d3.json(url).then(function(data) {
    //Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
    // Use sample_values as the values for the bar chart. Use otu_ids as the labels for the bar chart.
    // Use otu_labels as the hovertext for the chart.
    
    //Logic - if samplesId == c, then select that sampleId's sample_values
    let samples = data.samples;
    
    let sampleValues = [];
    let otuIds = [];
    let otuLabels =[];
    for (x = 0; x < samples.length; x++){
      let samplesId = data.samples[x].id;
      
      if (samplesId == c){
          sampleValues = data.samples[x].sample_values;
          otuIds = data.samples[x].otu_ids;
          otuLabels = data.samples[x].otu_labels
          }
      }

    // Sorting the sample_values in descending order and slicing top 10
    sampleValues.sort((firstNo, secNo) => secNo - firstNo);
   
    topTensamplevals = sampleValues.slice(0,10);
    
    // Reversing the order of discovered list to accommodate Plotly's defaults
    // Creating a shallow copy of the array and then reversing it
    let reversedArraytoplot = topTensamplevals.slice().reverse();
            
    //Finding corresponding names & OTU labels for the reversedArray numbers
    let otuIdslabels = [];
    let otulabels = [];
    



    for (let j = 0; j < reversedArraytoplot.length; j++){

      // Checking if 2 consecutive numbers in the array are identical and skip finding matches
      // since both instances have been discovered and stored in arrays

      if (reversedArraytoplot[j] !== reversedArraytoplot[j+1]){
        for (let k = 0; k < sampleValues.length; k++){
          if(reversedArraytoplot[j] == sampleValues[k]){
              otuIdslabels = otuIdslabels.concat(otuIds[k]);
              otulabels = otulabels.concat(otuLabels[k]);
          }

       }
      }  
    };
    
    
   
    // Modifying the labels to desired output format for the plot
    let modifiedLables = otuIdslabels.map(element => 'OTU ' + element);
   

    let traceba ={
      x: reversedArraytoplot,
      y: modifiedLables,
      type: 'bar',
      orientation: 'h',
      marker: {
        color: 'purple' 
      },
      // Adding hover text hoverItemsforplot
      text: otulabels,  
      };
    
    let databa = [traceba];
    let layoutba ={
      title: "Top 10 OTUs for the chosen individual.",
      // Setting width and height of the bar chart
      width: 400,
      height: 600,
    };
    Plotly.newPlot("plotbar", databa, layoutba);

    
    // Create a bubble chart that displays each sample. 
    // Use otu_ids for the x values. Use sample_values for the y values. 
    // Use sample_values for the marker size. Use otu_ids for the marker colors. 
    // Use otu_labels for the text values.
    
    const tracebu = {
      x: otuIds,
      y: sampleValues,
      mode: 'markers',
      marker: {
        size: sampleValues,
        color: otuIds,  // Assigning color based on otuIds
        colorscale: 'Rainbow'
      },
      text: otuLabels,
      type: 'scatter'
    };

    const databu = [tracebu];

    const layoutbu = {
      margin: { t:0 },
      title: "Individual's Bubble Chart of Samples.",
      xaxis: { title: 'OTU ID' },
      yaxis: { title: '' },
      margin: { t:30 },
      showlegend: false
    };

    // // Create the bubble chart
    Plotly.newPlot('plotbubble', databu, layoutbu);

  });
};

// Function automatically accessed once a selection is made in the drop down menu
function optionChanged(selectedsample){
  metadata(selectedsample);
  createChart(selectedsample);
 };
  
init();




