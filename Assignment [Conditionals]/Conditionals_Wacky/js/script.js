//Richard Mipana, 10/17/2013, Assignment[Conditionals] - Wacky

//Coffee me
//I want to calculate if I will need coffee to get myself through the day based on the amount of hours I slept the night before and the amount of hours I will be working for the day.

//Given
var hourSlept = prompt("How many hours did you sleep?");
var hoursWork = prompt("How many hours will you be working today?");

//Result
(hourSlept >= 6 && hoursWork <= 5) ? console.log("You could probably manage without coffee") : console.log("Go get yourself some coffee. You're gonna need it.")