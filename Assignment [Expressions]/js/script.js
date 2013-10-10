//This is a calculator for three real-life examples. The first is a calculator for a PERSONAL day-to-day use. The second is an INDUSTRY-specific calculator; one that can be used for industry related task. The third is a calculator for FUN; something that is wacky and out there.

//Personal - I want to create a calculator that can track how much money I spend annually on eating out. My givens will be the amount of money I spend on food each week for 5 weeks.

//Given


var eatWeek = [23.99, 32.83, 38.50, 27.33, 40.21];

//Result Variables

var eatTotal = eatWeek[0] + eatWeek[1] + eatWeek[2] + eatWeek[3] + eatWeek[4];
var eatAvg = eatTotal / 5;
var eatAnnual = 52.1775 * eatAvg;


//Print out how much money I spend annually on eating out using console.log.
console.log("Based on the amount of money I spend on eating out each week for 5 weeks ($" + eatAvg + ")," + " I spend about $" + eatAnnual + " each year on eating out.");

