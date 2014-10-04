# Random Helper

A utility script to produce random numbers

To install:
```
$ npm install random-helper
```
To use:
Load the module and use away!

```
var rh = require('random-helper');
```

Example:
```
var rh = require('random-helper');

// random integer
var randomInteger = rh.randomInt(1, 100);
// => 56

// random negative integer
var randomNegInteger = rh.randomInt(1, 100, false);
// => -24

// random float
var randomFloat = rh.randomFloat(0.12345, 5.987654, 2);
// ==> 2.21

// random negative float
var randomNegFloat = rh.randomFloat(0.12345, 5.987654, 4, false);
// ==> -1.4321

// random boolean
var randomBoolean = rh.randomBool();
// ==> true

```