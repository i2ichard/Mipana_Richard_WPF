//Richard Mipana, 10/21/2013, Functions_worksheet


//Circumference - Calculate the circumference of a circle.


function calcCirc(r){
	//Parameter: Radius of the circle
	var pi = Math.PI;
	//Return: The calculated circumference of a circle using the parameter, radius.
	var circum = 2*pi*r; //The formula for calculating the circumference of a circle is 2*pi*radius.
	//Result: Print to the console, "The circumference of the circle is X"
	console.log("The circumference of the circle is " + circum + ".");
}
calcCirc(9);
calcCirc(1);



//Stung! - It takes 8.666666667 bee stings per pound to kill an animal. Calculate how many bee stings are needed to kill an animal in a function
function calcLethal(X){
	//Parameter(s): Victim's weight (in pounds)
	var vicWeight = X;
	//Return: The number of bee stings
	var stings = X / 8.66666666667; //The formula for calculating how many stings it would take to kill an animal is "X(vitim's weight)" / 8.66666666667
	//Result: Print to the console, "It takes X bee stings to kill an animal that weights Y pounds."
	console.log("It takes " + stings + " bee stings to kill an animal that weighs " + vicWeight + " pounds.")
}

calcLethal(80);
calcLethal(156);


