'use strict';

/*
 * finder
 *
 * Takes an input and a test function and returns any values in
 * the input that pass the test.
 *
 * Eg:
 *
 *   input: [ 'ant', 'baby', [ 'apple', 'banana', 'carrot' ], { foo: 'aardvark' }, 'allegory' ]
 *   test: value => /^a/i.test( value )
 *   returns: [ 'ant', 'allegory' ]
 *
 */
module.exports = ( input, test ) => {

  if(Array.isArray(input) == false) return null;
  if(typeof(test) != "function") return null;
  var testRet = test(['abc']);
  if(typeof(testRet) != "boolean") return null;

  var matches = [];  //elements of input array that pass test

  for (var i = 0; i != input.length; i++) {
    if (typeof(input[i]) == "string") {
        //test the string with the regex test function
        if (test(input[i]) == true) {
          matches.push(input[i]);
        }
      }
    }

    return matches;
  };
