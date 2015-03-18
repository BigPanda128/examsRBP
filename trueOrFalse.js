//Ryan Postma
//CMP255
//3/18/2015
//code for buttons in HTML
var answerList = [];

var data = require('./trueFalse.js');

function trueButton() {
	if (data[0].value === true) {
		answerList.push('correct');
	} else {
		answerList.push('incorrect');
	}
	//$('#output').empty();
	$('#output').append(true);
}

function falseButton() {
	if (data[0].value === false) {
		answerList.push('correct');
	} else {
		answerList.push('incorrect');
	}
	//$('#output').empty();
	$('#output').append('false');
}

trueButton();
console.log(answerList);

