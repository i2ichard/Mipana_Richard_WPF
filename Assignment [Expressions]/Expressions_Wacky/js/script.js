//This is a calculator for three real-life examples. The first is a calculator for a PERSONAL day-to-day use. The second is an INDUSTRY-specific calculator; one that can be used for industry related task. The third is a calculator for FUN; something that is wacky and out there.

//Wacky - Since I am a huge fan of basketball and I've always wanted to know how high I need to jump for me to be able to dunk the ball, I'm creating a calculator that tells you the vertical leap you need to reach in order to dunk based on the user input of height.

//Given
var userHeight = prompt("What is your height in feet? (don't include inches)")
var userHeight2 = prompt("How many inches remain?")
var userArm = prompt("How long is one of your arms from shoulder to finger-tip in inches?")

var rimHeight = 120; //Height of the basketball rim in inches

//Result Variables
var totalHeight = userHeight * 12 + Number(userHeight2)
var maxHeight = Number(totalHeight) + Number(userArm)
var touchRim = rimHeight - maxHeight

console.log(touchRim)