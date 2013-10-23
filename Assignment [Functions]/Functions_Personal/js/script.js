//Richard Mipana, 10/24/2013, Assignments_[Functions] - Personal Calculator

//Car vs. Train

//Every day, I commute from my town of Naperville, Illinois all the way to Chicago for work. I want to calculate which method of transportation would be more cost efficient, driving or taking a train over the span of a month.

//Given: The average amount of days I work in a month (23), My car's gas mileage (23 mpg), My car's gas tank capacity (17.1 gallons), How many miles I drive to and from work (75.8 miles)

function calcCost(X, Y){
	var daysWork = 23; //This is the average amount of days I work per month.
	var carMPG = 23; //This is my car's gas economy in MPG.
	var carTank = 17.1; //This is the gas capacity of my car's tank in gallons.
	var carRange = carMPG * carTank; //This is the range that my car can go on a full tank
	var milesDrive = 75.8; //This is the miles I drive each day to and from work
	
//Parameters: Price of gas per gallon (in dollars), Price of round-trip train fare (in dollars).
	var gasMonth = (milesDrive * daysWork / carRange) * carTank * X; //This is the amount of money I spend each month on gas based on the parameter of the current price per gallon on gasoline.
	var trainMonth = daysWork * Y; //This is the amount of money I spend each month on train fare based on the parameter of the cost for a round-trip train fare.
	
//Result: Print to the console, "With the gas price at $X, each month I'll spend $ 'gasMonth'. The train fare is $Y, so I would spend $'trainMonth' per month if i were to take the train."	
	
	console.log("With the gas price at $" + X + ", each month I'll spend $" + gasMonth + " on gas. Alternatively, the train fare is $" + Y +", so I would spend $" + trainMonth + " per month if i were to take the train for the month.");
	
}

calcCost(3.78, 13.50);