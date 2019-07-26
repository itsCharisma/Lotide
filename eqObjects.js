const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


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


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(obj1, obj2) {
  const obj1Entries = Object.entries(obj1); //"The Object.entries() method returns an array" Going into the object and getting the list of (key = index) and values
  const obj2Entries = Object.entries(obj2);
  const length1 = obj1Entries.length;
  const length2 = obj2Entries.length;
  //  const length2 = Object.keys(obj2).length //The Object.keys() method returns an array of a given object's own property names, in the same order as we get with a normal loop.
  if (length1 !== length2) {
    return false;
  }
  for (let [key, value] of obj1Entries) { //Object 1 Entries key, and value.
    if (Array.isArray(value) && Array.isArray(obj2[key])) {
      if (eqArrays(value, obj2[key]) === false) { //We provide the key and it will return the value.
        return false;
      }
    } else if (value !== obj2[key]) {
      return false;
    }
  }
  return true;
};

 
//if object1 key and value output === to object2 key and value
// continue looping ==> true
//else ==> false
// TEST CODE
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true
const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false
//step 3
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true
const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false