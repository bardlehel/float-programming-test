'use strict';

/*
 * fizzBuzz
 *
 * Takes an input length and returns an array of the specified length
 * where the values are:
 *  1) the index + 1, eg: [ 1, 2 ], array[ 0 ] === 1, array[ 1 ] === 2
 *  2) values that would be multiples of 3 are replaced with 'fizz', eg: [ 1, 2, 'fizz' ]
 *  3) values that would be multiples of 5 are replaced with 'buzz', eg: [ 1, 2, 'fizz', 4, 'buzz' ]
 *  4) values that would be multiples of both 3 and 5 are replaced with 'fizzbuzz', eg: [ 1, 2, 'fizz', ... 14, 'fizzbuzz' ]
 *
 * Eg:
 *
 *   input: 10
 *   returns: [ 1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz' ]
 *
 */
module.exports = ( length ) => {
  var retArray = [];
  var value = 0;

  for (var i = 0; i != length; i++) {
    value = i + 1;
    if (value % 5 === 0 && value % 3 === 0 && value >= 15)
      retArray.push("fizzbuzz");
    else if (value % 5 === 0)
      retArray.push("buzz");
    else if (value % 3 === 0)
      retArray.push("fizz");
    else retArray.push(value);
  }

  return retArray;

};
