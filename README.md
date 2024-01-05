# Javascript Challenge

## Overview
In this particular study, the Belly Button Biodiversity dataset was explored, which catalogs the microbes that colonize human navels.

The dataset revealed that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.


## Purpose

The goal was to build an interactive dashboard to present the visualization in line with the findings of the above study. 

The dataset referred to above, is stored in JSON format. It has been downloaded and saved in the samples.json file, included in the repository, for reference. 

## Instructions
Please follow following steps to run the code succesfully:
    1. clone "belly-button-challenge" repo on your local machine.
    2. open the code on VS Code.
    3. open index.html file and run the code by clicking Go Live option
    4. This action should open and navigate to a web browser "Belly Button Biodiversity Dashboard".
    5. Select different Subject IDs to verify the code and it's functionalities.
Samples were collected from several individuals and their information was stored in the dataset. Different types of data was stored for each individual, mainly including their demographics, the discovered bacteria cultures and their frequency of washes per week to name a few.  
 A dropdown menu has been provided to choose a particular individual to view their study findings. A horizontal bar chart displays the top 10 OTUs found in that individual. A bubble chart displays each sample with the following details:
Marker size  calibrated to the sample_value.
Marker colors calibrated to the otu_ids.
Text values reflect the logged otu_labels from the study.

 The majority of the code was written in JavaScript to achieve the above outcomes (static/js/app.js). The app is hosted at the following site:

https://mitajoshi.github.io/belly-button-challenge/
