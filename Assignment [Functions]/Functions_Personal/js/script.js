//Richard Mipana, 10/24/2013, Assignments_[Functions] - Personal Calculator

//Car vs. Train

//Every day, I commute from my town of Naperville, Illinois all the way to Chicago for work. I want to calculate which method of transportation would be more cost efficient, driving or taking a train over the span of a month.

//Given: The average amount of days I work in a month (23), My car's gas mileage (23 mpg), My car's gas tank capacity (17.1 gallons), How many miles I drive to and from work (75.8 miles)

function calcCost(X){
	var daysWork = 23;
	var carMPG = 23;
	var carTank = 17.1;
	var carRange = carMPG * carTank;
	var milesDrive = 75.8;
	
//Parameters: Price of gas per gallon (in dollars), Price of round-trip train fair (in dollars).
	var gasMonth = (milesDrive * daysWork / carRange) * carTank * X;
	console.log(gasMonth);
	
}

calcCost(3.45)