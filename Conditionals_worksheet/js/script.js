//Conditional Logic

var kidHeight = 49;
var minHeight = 48;
var wParentHeight = 45


//if the child is old enough, print to the console "you can ride!"

if(kidHeight > minHeight){
	//code performed if condition is true
	console.log("you can ride the coaster!");
}else if(kidHeight >= wParentHeight){
	console.log("you can ride, but only with a parent present.");
}else{
	console.log("sorry kid, you've got some growing to do first!");
}