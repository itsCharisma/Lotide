const head = require('../head');
const assertEqual = require('../assertEqual');

//Test Code
assertEqual(head([5,6,7]), 5); //should pass
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); //should pass
assertEqual(head([5]), 3); //should fail
assertEqual(head([]), 5); //should return undefined?