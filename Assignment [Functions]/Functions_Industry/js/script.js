//Richard Mipana, 10/24/2013, Assignments_[Functions] Industry Calculator

//A huge trend in the web development field right now is responsive web design. Web sites that adapt responsive web design have web pages that automatically resize its content to be optimally viewed on what ever device you are using. I want to calculate the ratio that the content is being resized to with the desktop version of the website being 100%

//Given: Screen size of the device in inches. Lets just say that the average desktop size is 23 inches

function calcScreenRatio(X){
	var desktop = 23;
	var screenSz = X / desktop * 100;
	console.log("If the size of your screen is " + X + " inches, then the percentage of the web page is " + screenSz + "% of the original desktop version.");
}

calcScreenRatio(4);
