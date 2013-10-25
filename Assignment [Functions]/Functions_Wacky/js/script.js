//Richard Mipana, 10/24/2013, Assignments_[Functions] - Wacky Calculator

//Every November for the past 3 years, a new Call of Duty game has been released. It's quite sad to think how much time I've spent playing these games. To put things into perspective, I want to create a calculator that tells me how many hours I've played and what that hour amount equals to in money, and calories I could be burning from playing basketball instead.

//Givens: hourly wage($13.00), calories burned per hour of playing full court basketball (776)

function calcInstead(X){
	

var hourRate = 13.00; //This is my current hourly wage at work.
var bballCals = 776; //This is the amount of calories that I burn in an hour of playing full-court basketball.
//Parameters: average amount of hours per day spent playing Call Of Duty.
var moneyInstead1 = hourRate * X; //This is the amount of money I could be making during the time I play Call of Duty each day.
var moneyInstead2 = moneyInstead1 * 7; //This is the amount of money I could be making in a week with the amount of hours that I play Call of Duty per day.
var moneyInstead3 = moneyInstead2 * 4; //This is the amount of money I could be making in a month with the amount of hours that I play Call of Duty per day.
var moneyInstead4 = moneyInstead3 * 12; //This is the amount of money I could be making in a year with the amount of hours that I play Call of Duty per day.

var calsInstead1 = bballCals * X; //This is the amount of calories I could burn playing basketball with the amount of time I play Call of Duty each day.
var calsInstead2 = calsInstead1 * 7 //This is the amount of calories I could burn while playing basketball instead of playing Call of Duty within a week.
var calsInstead3 = calsInstead2 * 4 //This is the amount of calories I could burn while playing basketball instead of playing Call of Duty within a mounth.
var calsInstead4 = calsInstead3 * 12 //This is the amount of calories I could burn while playing basketball instead of playing Call of Duty within a year.
console.log("Instead of playing Call of Duty, I could be making $" + moneyInstead1 + " each day.")
console.log("Instead of playing Call of Duty, I could be burning " + calsInstead1 + "calories each day.")
}

calcInstead(1.5)
