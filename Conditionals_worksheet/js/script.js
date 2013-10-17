//Richard Mipana, 10/17/2013, Conditionals_worksheet

//Stuff your face I
//Does the entrant meet the minimum weight qualification to enter the contest?

//Given: Competitor's Weight

var compWeight = 251

//Result: "The competitor qualifies for the heavweight division" Or "The competitor needs to gain some weight!"

if(compWeight >= 250){
	//if greater than or equal to 250 pounds
	console.log("The competitor qualifies for the heavyweight division.");
}else{
	//if less than 250 pounds
	console.log("The competitor needs to gain some weight!");
}


//Last Chance for Gas!
//A driver has to determine if they can make it across the desert with their current fuel.  They are about to past the last gas station for the next 200 miles and they need to determine whether they should stop now for gas or not.

//Given: Gas efficiency (in mpg), amount of gas in tank (in %), gas tank capacity (in gallons), distance until next gas station (in miles)

var carEcon = 32
var gasHave = 50
var tankCap = 14
var nextGas = 200 //This is the distance (in mile) until the next gas station.

var gasInTank = gasHave * tankCap / 100 //This is the amount of gas left in the tank (in gallons) based on the percentage in gasHave and the capacity in var tankCap.
var carRange = gasInTank * carEcon //This is the range that the car can travel with the gas it currently has in the tank before it reaches empty.


//Result: "Yes, you can make it without stopping for gas!" or "You only have X gallons of gas in your tank, better get gas now while you can!"

if(carRange > nextGas){
	//if the car can make it to the next gas station with the gas it currently has
	console.log("Yes, you can make it without stopping for gas!");
}else{
	//if the car cannot make it to the next gas station with the gas it currently has.
	console.log("You only have " + gasInTank + " gallons of gas in your tank, better get gas now while you can!");
}