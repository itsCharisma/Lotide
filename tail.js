/*const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};*/
const assertEqual = require('./assertEqual');

const tail = function(input) {
  let result = [];
  for (let i = 1; i < input.length; i++) {
    result.push(input[i]); //each time through the array we are grabbing a value, which is the index value of the input array. We call this by using the letter i
  }
  return result;
};


module.exports = tail;