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

//Create a function flatten which will take in an array of arrays and return a "flattened" version of the array.
const flatten = function(arr1) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    const currentItem = arr1[i];
    if (Array.isArray(currentItem)) {
      result = result.concat(currentItem); //this is another solution array.concat
      /*
      for (let x = 0; x < currentItem.length; x++) {
        result.push(currentItem[x])
      }*/
    } else {
      result.push(currentItem);
    }
  }
  return result;
};


//return an array
console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]