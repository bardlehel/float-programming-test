'use strict';

/*
 * balancedParentheses
 *
 * Takes an input string and returns true or false depending on if the string
 * has balanced parentheses.
 *
 * Eg:
 *
 *   input: '(x + y)'
 *   returns: true
 *
 *   input: '(x + y'
 *   returns: false
 *
 *   input: 'foo bar baz'
 *   returns: false
 *
 *   input: ''
 *   returns: false
 */
module.exports = ( input ) => {
	var openedCount = 0;  //number representing how many opened parantheses have been counted
	var inputIndex = 0; //an index for iterating over the characters of input
	var foundOne = false;  //flags whether a paranthesis was found

	//loop through each index of input
	while (inputIndex < input.length) {

		//increment openedCount for finding a '('
		if (input[inputIndex] == "(") {
			openedCount++;
			foundOne = true;
		}
		//decrement openedCount for finding a ')'
		else if (input[inputIndex] == ")") {
			openedCount--;
			foundOne = true;
		}

		inputIndex++;
	}

	//there shouldn't be more closes than opens:
	if (openedCount == 0 && foundOne == true)
		return true;

	return false;

};
