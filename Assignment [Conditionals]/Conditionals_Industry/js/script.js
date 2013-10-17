//Richard Mipana, 10/17/2013, Assignment[Conditionals] - Industry

//Post Equipment Purchase Protocol
//At my current job at the University of Illinois in Chicago, I am a property equipment manager. Professors, research assistants and graduate students make purchases on laboratory equipment and supplies using the University's funds. My job is to order and place property tags on items that are worth more than $500. Equipment that is under $500 does not require a tag and is classified as such. Lab/office supplies are also classifed under its own category but no tags are required.This calculator will decide the actions needed based on the parameters.

//Given:


var itemCost = prompt("How much does the item cost?")
var itemType = prompt("Is the item equipment or supplies?")
var item = itemType


if(item === ("equipment"||"Equipment") && itemCost >= 500){
	console.log("Order and place a property tag on this item.");

}
if(item === ("supplies"||"Supplies") && itemCost < 500){
	console.log("Classify the item as " + item +".");
}

if(item === ("equipment"||"Equipment") && itemCost < 500){
	console.log("Classify the item as sub $500 " + item +".");
}	