//Richard Mipana, 10/17/2013, Assignment[Conditionals] - Personal


//Delivery, Ye or Nay?
//Living in the city provides you with many options for food. Many of the restaurants provide a delivery service but I always faced the delimma, of would it be worth it to have to food delivered or should I pick it up myself. I will create a calculator that will determine this delimma based on the distance of the restaurant from my apartment (in miles), the cost of delivery ($ per mile), the total cost of the food (in $), and the amount of people I'll be splitting the cost with. Let's say that it would be worth it to have the food delivered if the cost (per person) ends up at or below my daily food budget of 8 dollars

//Givens
var restDis = prompt("How far is the restaurant? (in miles)")
var delRate = 1 //Let's assume that all restaurants in the area charge the same $1 per mile for delivery
var foodCost = prompt("What's the cost of all the food?")
var pepSplit = prompt("How many people are eating?")

var delCost = restDis * delRate //This is the cost for delivery
var grnTotal = (delCost + foodCost) / pepSplit //This is the total dollar amount each person will have to pay.
var dayBudg = 8

//Result: "Go on and order delivery." or "Order it for take out."

if(grnTotal <= dayBudg){
	//if the cost is within my daily food budget
	console.log("Go on and order delivery.")
}else{
	//if the cost is more than my daily food budget
	console.log("Order it for take out.")
}