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


const without = function(source, itemsToRemove) {
  let output = [];
  for ( let i = 0; i < source.length; i++) {
    if (!isValueInArray(source[i], itemsToRemove)) {
      //we are grabbing arrays values that are not the same
      output.push(source[i]);
    }
  } 
  return output;
}

const isValueInArray = function(value, arr) {
  let found = false
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      found = true;
    }
  }
  return found
}



//Test Code

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);