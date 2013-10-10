// Richard Mipana, 10/9/2013, Expression Worksheet

//Calculate to human years with the given, dog years
//Givens
var ageDog = 7;

var ageHuman = 5;

//multiply the number of human years to the number 7
var sparkyAge =7 * ageHuman + " " + "years old in dog years.";

console.log("Sparky is" + " " + (ageHuman) + " " + "human years old which is" + " " + sparkyAge);


//Calculate the number of slices of pizza each partygoer gets
//Givens
var numSlic = 8; //the number of slices per pizza
var numPep = 12; //the number of people at the party
var numPiz = 5; //the number of pizzas ordered

//Result Variables
//Forumla to find out how many slices each person gets: numEach = numPiz * numSlic / numPep
var numEach = numPiz * numSlic / numPep;
console.log("Each person ate" + " " + numEach + " " + "slices of pizza at the party.");


//the number of slices sparky gets to eat is variable "var numSpar". 
//formula to find the number of slices Sparky gets to eat: numspar = numPiz * numSlic % numPep
var numSpar = numPiz * numSlic % numPep;
console.log("Sparky got" + " " + numSpar + " " + "slices of pizza.");

//Calculate the average shopping bill
//Given: An array with five weekly grocery totals.
var Totals = [50.34, 63.83, 30.02, 49.32, 20.99];

//Result Variable

var grocTotal = Totals[0] + Totals[1] + Totals[2] + Totals[3] + Totals[4];
var avgTotal = grocTotal / 5;
console.log("You have spent a total of $" + grocTotal + " " + "on groceries over 5 weeks. That is an average of $" + avgTotal + " " + "per week.");

//Calculate the discounted price for an item
//Given
var orgPric = 119.99
var disRate = 15
var item = "Nike Basketball Shoes"
var taxRate = 8.5

//Result Variables
var total = orgPric - (orgPric * .15) + (orgPric * .085) //formula for finding discounted price plus tax
var totalSansTax = orgPric - (orgPric * .15) //formula for finding discounted price sans tax
//Result

console.log("Your" + " " + item + " " + "was originally $" + orgPric + " " + ",but after a " + disRate + "% discount, it is now $" + totalSansTax + " without tax, and $" + total + " with tax.");
