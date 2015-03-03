//Ryan Postma
//CMP255
//3/2/15

/*
 * pull data from the true false JSON
 */

var data = require('./trueFalse.js');
var readline = require('readline');
var rl = readline.createInterface({
	  input: process.stdin,
      output: process.stdout
});

stringToBoolean = function(string){
	switch(string.toLowerCase()){
		case "true": case "yes": case "1": return true;
		case "false": case "no": case "0": case null: return false;
		default: return Boolean(string);
	}
}

/*rl.question('line', function(line){
	    console.log(line);
	    rl.close();
})*/

//console.log(data[0].text);

var text = [];

var answers = [];
/*
for (var i = 0; i < data.length; ++i) {
	console.log(data[i].text + "\n");
}*/

console.log('Enter true or false \n');

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
	//var input = readline();
//console.log(data[i].value);
	/*if (input == data[i].value) {
		answers.push("correct");
	}
	else {
		answers.push("incorrect");
	}*/

