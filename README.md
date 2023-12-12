The goal was to build an interactive dashboard to explore the Belly Button Biodiversity dataset (http://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the microbial species (also called operational taxonomic units, or OTUs, in the study) that colonize human navels.

The dataset referred to above, is stored in JSON format. It has been downloaded and saved in the samples.json file, included in the repository, for reference. 

Samples were collected from several individuals and their information was stored in the dataset. Different types of data was stored for each individual, mainly including their demographics, the discovered bacteria cultures and their frequency of washes per week to name a few.  
 A dropdown menu has been provided to choose a particular individual to view their study findings. A horizontal bar chart displays the top 10 OTUs found in that individual. A bubble chart displays each sample with the following details:
Marker size  calibrated to the sample_value.
Marker colors calibrated to the otu_ids.
Text values reflect the logged otu_labels from the study.

 The majority of the code was written in JavaScript to achieve the above outcomes (static/js/app.js). The app is hosted at the following site:

https://mitajoshi.github.io/belly-button-challenge/
