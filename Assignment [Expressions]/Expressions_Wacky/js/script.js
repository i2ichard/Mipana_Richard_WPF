//This is a calculator for three real-life examples. The first is a calculator for a PERSONAL day-to-day use. The second is an INDUSTRY-specific calculator; one that can be used for industry related task. The third is a calculator for FUN; something that is wacky and out there.

//Wacky - Since I am a huge fan of basketball and I've always wanted to know how high I need to jump for me to be able to dunk the ball, I'm creating a calculator that tells you the vertical leap you need to reach in order to dunk based on the user input of height.

//Given
var userHeight = prompt("What is your height in feet? (don't include inches)");
var userHeight2 = prompt("How many inches remain?");
var userArm = prompt("How long is one of your arms from shoulder to finger-tip in inches?");

var rimHeight = 120; //Standart height of the basketball rim in inches

//Result Variables
var totalHeight = userHeight * 12 + Number(userHeight2); //This is the total height of the user in inches.
var maxHeight = Number(totalHeight) + Number(userArm); //This is the max height reach of the user in inches.
var touchRim = rimHeight - maxHeight; //The height in inches that the user needs to jump vertically to touch a standard height basketball rim.
var vertDunk = touchRim + 10; //You need to reach at least 10 inches above the rim to get the ball over and throw it down!!
alert("You need to jump at least " + touchRim + " inches vertically in order to touch the rim and jump at least " + vertDunk + " inches vertically in order to throw it down!!!" )

console.log(vertDunk)