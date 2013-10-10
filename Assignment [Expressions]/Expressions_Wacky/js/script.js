//This is a calculator for three real-life examples. The first is a calculator for a PERSONAL day-to-day use. The second is an INDUSTRY-specific calculator; one that can be used for industry related task. The third is a calculator for FUN; something that is wacky and out there.

//Wacky - Since I am a huge fan of basketball and I've always wanted to know how high I need to jump for me to be able to dunk the ball, I'm creating a calculator that tells you the vertical leap you need to reach in order to dunk based on the user input of height.

//Given
var userMax = prompt("What is your max reach in inches? \n(max height of arms in the air, standing flat-footed)"); //This prompt ask the user's max reach height. This is the measurement of how high they can reach with with their hands in the air, standing flat-footed.
var rimHeight = 120; //Height of the basketball rim in inches

//Result Variables
var touchRim = rimHeight - userMax;
var vertDunk = touchRim + 10; //You need to reach at least 10 inches above the rim in order to get the ball over the rim and throw it down!! 
console.log("You need to jump " + touchRim + " inches in order to touch the rim and you need to jump " + vertDunk + " inches in order to dunk.");