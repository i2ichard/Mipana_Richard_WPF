//Functions_worksheet

//Circumference - Calculate the circumference of a circle.
//Given - Radius of the circle

function circum(radius){
	var radius = prompt("Enter the radius of the circle ");
	var circle = 2 * Math.PI * radius;
	alert("The circumference is " + circle)
}

circum()