function throwDice() {

/*
	Emulate throwing a pair of dice
	Brian Capouch
	Begun 4 February 2014 * Refactored 7 Feb 2014
*/

      // Pick one at random
      var 
      dieOne = Math.floor(Math.random() * 6) + 1,
      dieTwo = Math.floor(Math.random() * 6) + 1,

      // Connect random numbers with die images
      imageOne = "../images/die" + dieOne + ".png",
      imageTwo = "../images/die" + dieTwo + ".png";


      // Set HTML string with value of result
      var result = '<img src=\"' + imageOne + '\"><img src=\"' + imageTwo + '\">';
      // Clear out the div, and then fill it with fresh
      // This is the wonderful, invisible work of jQuery
      $('#output').empty();
      $('#output').append(result);
  };
