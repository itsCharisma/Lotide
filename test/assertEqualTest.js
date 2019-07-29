const assertEqual = require('../assertEqual');

//Test Code
assertEqual("Lighthouse Labs", "Lighthouse Labs"); //should pass
assertEqual("Lighthouse Labs", "Bootcamp"); //should fail
assertEqual(1, 1); //should pass
assertEqual(1, 2); //should fail