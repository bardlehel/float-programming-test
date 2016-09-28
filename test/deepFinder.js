'use strict';

const fpt = require( '../index.js' );
const test = require( 'tape' );

test( 'DEEPFINDER: exports deepFinder method', t => {
    t.ok( fpt.deepFinder, 'has deepFinder export' );
    t.equal( typeof fpt.deepFinder, 'function', 'deepFinder is a function' );
    t.end();
} );

test( 'DEEPFINDER: finds strings that start with a', t => {
    const input = [ 'ant', 'baby', [ 'apple', 'banana', 'carrot' ], {
        foo: 'aardvark'
    }, 'allegory' ];
    const result = fpt.deepFinder( input, value => /^a/i.test( value ) );

    t.ok( result, 'generated a result' );
    t.deepEqual( result, [ 'ant', 'apple', 'aardvark', 'allegory' ], 'result is correct' );
    t.end();
} );

test( 'DEEPFINDER: returns null if input is not an object', t => {
    const input = "this string is not an array/object";
    const result = fpt.deepFinder( input, value => /^a/i.test( value ) );

    t.equal( result, null, 'result is correct' );
    t.end();
} );

test( 'DEEPFINDER: returns null if tester is not a function', t => {
  const input = [ 'ant', 'baby', [ 'apple', 'banana', 'carrot' ], {
      foo: 'aardvark'
  }, 'allegory' ];
  const result = fpt.deepFinder( input, {} );

    t.equal( result, null, 'result is correct' );
    t.end();
} );

test( 'DEEPFINDER: returns null if tester does not return a boolean', t => {
  const input = [ 'ant', 'baby', [ 'apple', 'banana', 'carrot' ], {
      foo: 'aardvark'
  }, 'allegory' ];
  const result = fpt.deepFinder( input, () => { return "a"; } );

    t.equal( result, null, 'result is correct' );
    t.end();
} );
