# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install itscharisma/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: Checks if our assertion of arrays are equal
* `assertEqual`: Checks if our assertion of statements are equal
* `assertObjectsEqual`: Checks if our assertion of objects are equal
* `countLetters`: Counts the letters in a string
* `countOnly`: Counts items in an array and adds it to an object
* `eqArrays`: Checks our array parameters are equal
* `eqObjects`: Checks to make sure our objects are equal
* `findKey`: Finds the beginning letter of a string
* `findKeyByValue`: Search for a key on an object where its value matches a given value
* `flatten`: Flattens an array
* `head`: Gets the first element of array
* `letterPositions`: Return all indices in the string where each character is found
* `map`: Return a new array based on the results of the callback function
* `middle`: Grabs the middle of an array
* `tail`: Grabs all but the first element of array
* `takeUntil`: Takes all the values out of an array or string until specified condition
* `without`: Creates an array excluding all given values