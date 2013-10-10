//This is a calculator for three real-life examples. The first is a calculator for a PERSONAL day-to-day use. The second is an INDUSTRY-specific calculator; one that can be used for industry related task. The third is a calculator for FUN; something that is wacky and out there.

//Industry - I want to create a caluclator that uses the given information by the user of age to track the average age demographic of the people that visit a particular site.

//Givens

var userInput = prompt("Please tell us your age."); 
alert("Thank you!"); 
var hourInputs = [19, 26, 48, 35, 21, 30, 18, 29, 31]; //Arbitrary set of userInput ages throughout an hour.

//Result Variables
var avgHourly = (hourInputs[0] + hourInputs[1] + hourInputs[2] + hourInputs[3] + hourInputs[4] + hourInputs[5] + hourInputs[6] + hourInputs[7] + hourInputs[8]) / 9

console.log(avgHourly);