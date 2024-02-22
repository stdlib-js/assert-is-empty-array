/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/* eslint-disable no-array-constructor */

'use strict';

// MODULES //

var tape = require( 'tape' );
var isEmptyArray = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isEmptyArray, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided an empty array', function test( t ) {
	t.strictEqual( isEmptyArray( [] ), true, 'returns true' );
	t.strictEqual( isEmptyArray( new Array() ), true, 'returns true' );
	t.end();
});

tape( 'the function returns `false` if not provided an empty array', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[ 1, 2, 3 ],
		new Array( 10 ),
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( isEmptyArray( values[i] ), false, 'returns false for when provided ' + values[i] );
	}
	t.end();
});
