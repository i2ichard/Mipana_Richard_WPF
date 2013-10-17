//Richard Mipana, 10/17/2013, Assignment[Conditionals] - Industry

//At my current job at the University of Illinois in Chicago, I am a property equipment manager. Professors, research assistants and graduate students make purchases on laboratory equipment and supplies using the University's funds. My job is to order and place property tags on items that are worth more than $500. Equipment that is under $500 does not require a tag and is classified as such. Lab/office supplies are also classifed under its own category but no tags are required.This calculator will decide the actions needed based on the parameters.

//Given:


var itemCost = prompt("How much does the item cost?")
var itemType = prompt("Is the item equipment or supplies?")
var item = itemType

/*if(itemCost >= 500 && itemType === "Equipment"){
	console.log("Order and place a property tag on this item.");
}else{
	console.log("Classify item as Supplies");
}
if(itemCost < 500 && itemType === "Equipment"){
	console.log("Classify item as sub $500 equipment");
}*/

(itemCost >= 500 && item === "equipment") ? console.log("Order and place a property tag on this item.") : console.log("Classify item as Supplies");