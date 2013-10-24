//Richard Mipana, 10/24/2013, Assignments_[Functions] - Wacky Calculator

//Doggie Boot Camp.

//My dog Nigel is fat. I want him to loose 5 pounds but I only have a limited amount of time each day after work that I can walk him. I want to calculate how long it will take for him to lose 5 pounds just from taking daily walks while doing it in a healthy fashion. I did some research on Google and found that for my dog's weight (77 lbs.), a healthy daily caloric intake is around 1800 calories. I also found that in order to lose a single pound, he'd have to burn 3500 calories.

//Given: Nigel's Weight (77 lbs.), healthy daily caloric intake (1800 calories), the number of calories being burned from walking at a pace of 4 mph and @80lbs per hour (192)

function calcWeightLoss(X){
	var nigWeight = 80;
	var calIntake = 1800;
	var calsPerHour = 192;
	var calsPerPound = 3500;
	
//Parameters: How many hours per day I want to walk Nigel or the distance I want to walk Nigel every day.	
	var calBurnGoal = calsPerPound * 5; // This is the target goal of 5 pounds in calories.
	var timeToGoal = calBurnGoal / calsPerHour; //This is the number of hours it will take to burn the calories.
	var hoursPerWeek = X; //This is the X number of hours per week I am willing to walk Nigel
	var weeksToGoal = timeToGoal/hoursPerWeek 
	console.log(weeksToGoal);

}

calcWeightLoss(9);