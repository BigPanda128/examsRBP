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
rl.question('line', function(line){
	    console.log(line);
	    rl.close();
})

//console.log(data[0].text);

var text = [];

var answers = [];

for (var i = 0; i < data.length; ++i) {
	console.log(data[i].text);
	console.log("true or false? \n");
	var input = readline();
	console.log(data[i].value);
	if (input == data[i].value) {
		answers.push("correct");
	}
	else {
		answers.push("incorrect");
	}
}

