'use strict';

const fpt = require( '../index.js' );
const test = require( 'tape' );

test( 'FINDER: exports finder method', t => {
    t.ok( fpt.finder, 'has finder export' );
    t.equal( typeof fpt.finder, 'function', 'finder is a function' );
    t.end();
} );

test( 'FINDER: returns null if input is not an array', t => {
    const input = "this string is not an array";
    const result = fpt.finder( input, value => /^a/i.test( value ) );

    t.equal( result, null, 'result is correct' );
    t.end();
} );

test( 'FINDER: returns null if tester is not a function', t => {
  const input = [ 'ant', 'baby', [ 'apple', 'banana', 'carrot' ], {
      foo: 'aardvark'
  }, 'allegory' ];
  const result = fpt.finder( input, {} );

    t.equal( result, null, 'result is correct' );
    t.end();
} );

test( 'FINDER: returns null if tester does not return a boolean', t => {
  const input = [ 'ant', 'baby', [ 'apple', 'banana', 'carrot' ], {
      foo: 'aardvark'
  }, 'allegory' ];
  const result = fpt.finder( input, () => { return "a"; } );

    t.equal( result, null, 'result is correct' );
    t.end();
} );

test( 'FINDER: finds strings that start with a', t => {
    const input = [ 'ant', 'baby', [ 'apple', 'banana', 'carrot' ], {
        foo: 'aardvark'
    }, 'allegory' ];
    const result = fpt.finder( input, value => /^a/i.test( value ) );

    t.ok( result, 'generated a result' );
    t.deepEqual( result, [ 'ant', 'allegory' ], 'result is correct' );
    t.end();
} );
