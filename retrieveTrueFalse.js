//Ryan Postma
//CMP255
//3/2/15

/*
 * pull data from the true false JSON
 */

//pull my data set from origin copy
var data = require('./trueFalse.js');

//get the readline capabilities
var readline = require('readline');

//create a readline
var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

//function to change from string to a boolean type. Works fantastically!!!
stringToBoolean = function(string){
	switch(string.toLowerCase()){
		case "true": case "yes": case "1": return true;
		case "false": case "no": case "0": case null: return false;
		default: return Boolean(string);
	}
}

//test code
/*rl.question('line', function(line){
	    console.log(line);
	    rl.close();
})*/

//test code
//console.log(data[0].text);

//array i forsee the possibility of useing at some point.
var text = [];

//this will hold my answers for easy grading
var answers = [];

/*
for (var i = 0; i < data.length; ++i) {
	console.log(data[i].text + "\n");
}*/

//directions for user to follow
console.log('Enter true or false \n');

//bread and butter of alpha testing
rl.question(data[0].text + " ", function(line){
	console.log("You answered: ", line);
	console.log(typeof line);
	if (stringToBoolean(line) === data[0].value) {
		answers.push("correct");
	}
	else {
		answers.push("incorrect");
	}

	rl.close();
	console.log(answers);
});

//test code
	//var input = readline();
//console.log(data[i].value);
	/*if (input == data[i].value) {
		answers.push("correct");
	}
	else {
		answers.push("incorrect");
	}*/

