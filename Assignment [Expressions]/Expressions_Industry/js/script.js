//This is a calculator for three real-life examples. The first is a calculator for a PERSONAL day-to-day use. The second is an INDUSTRY-specific calculator; one that can be used for industry related task. The third is a calculator for FUN; something that is wacky and out there.

//Industry - I want to create a caluclator that uses the given information by the user of age to track the average age demographic of the people that visit a particular site throughout the span of a week.

//Givens

var userInput = prompt("Please tell us your age."); //Irrelevent to the final data at the moment. Still trying to find a way to store userInput throughout the span of an hour and use that data to calculate the average age.
alert("Thank you!"); 
var hourInputs = [19, 26, 48, 35, 21, 30, 18, 29, 31]; //Arbitrary set of userInput ages throughout an hour.
var weekHours = 168; //This is the number of hours there are in a week.

//Result Variables
var avgHourly = (hourInputs[0] + hourInputs[1] + hourInputs[2] + hourInputs[3] + hourInputs[4] + hourInputs[5] + hourInputs[6] + hourInputs[7] + hourInputs[8]) / 9;

console.log("The average age demographic of this website is " + avgHourly);