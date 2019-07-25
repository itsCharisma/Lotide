const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  }
  return true;
};

let assertArraysEqual = function(actual, expected) {
  const result = eqArrays(actual, expected);
  if (result === true) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const middle = function(input) {
  let result = [];
  //For arrays with one or two elements, there is no middle. Return an empty array.
  if (input.length === 0 || input.length === 1 || input.length === 2) {
    return result;
  //For arrays with odd number of elements, an array containing a single middle element should be returned.
  } else if (input.length % 2 === 1) {
    let midIndex = Math.floor(input.length / 2);
    //console.log(input[midIndex]);
    return input[midIndex];
  //For arrays with an even number of elements, an array containing the two elements in the middle should be returned
  } else {
    let secondArr = (input.length / 2);
    let firstArr = (input.length / 2) - 1; 
    //push values into result
    result.push(input[firstArr], input[secondArr]);
    return result;
  }
};


console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []

console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]

console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]