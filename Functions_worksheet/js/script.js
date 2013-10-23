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




