const middle = function(input) {
  let result = [];
  //For arrays with one or two elements, there is no middle. Return an empty array.
  if (input.length === 0 || input.length === 1 || input.length === 2) {
    return result;
  //For arrays with odd number of elements, an array containing a single middle element should be returned.
  } else if (input.length % 2 === 1) {
    let midIndex = Math.floor(input.length / 2);
    //console.log(input[midIndex]);
    return [input[midIndex]];
  //For arrays with an even number of elements, an array containing the two elements in the middle should be returned
  } else {
    let secondArr = (input.length / 2);
    let firstArr = (input.length / 2) - 1;
    //push values into result
    result.push(input[firstArr], input[secondArr]);
    return result;
  }
};

module.exports = middle;