'use strict';

/*
 * deepFinder
 *
 * Takes an input and a test function and returns any values
 * in the input *recursively* that pass the test.
 *
 * Eg:
 *
 *   input: [ 'ant', 'baby', [ 'apple', 'banana', 'carrot' ], { foo: 'aardvark' }, 'allegory' ]
 *   test: value => /^a/i.test( value )
 *   returns: [ 'ant', 'apple', 'aardvark', 'allegory' ]
 *
 */
module.exports = ( input, test ) => {
  //define a function to call recursively for each element of a list
  //for each element,  test if the value returns true when passed to test
  //if so, add to the return list

  if(typeof(input) != "object") return null;
  if(typeof(test) != "function") return null;
  var testRet = test(['abc']);
  if(typeof(testRet) != "boolean") return null;

  var matches = [];  //elements of input array that pass test
  var testArrayElements = (arr, regexText) => {
    if (typeof(arr) == "object") {
      //loop through elements of array
      if (Array.isArray(arr) === true) {
        for (var i = 0; i != arr.length; i++) {
          testArrayElements(arr[i], regexText);
        }
      } else {
        //loop over properties of object
        for (var prop in arr) {
            if(arr.hasOwnProperty(prop) === true) {
              testArrayElements(arr[prop], regexText);
            }
        }
      }
    } else if (typeof(arr) == "string") {
      //test the string with the regex test function
      if (regexText(arr) == true) {
        matches.push(arr);
      }
    }
  };

  testArrayElements(input, test);

  return matches;
};
