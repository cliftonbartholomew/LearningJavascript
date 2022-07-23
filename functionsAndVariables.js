//==================================================================================
//==================================================================================
//VARIABLES
//Old way of declaring variables
var num = 5;
//new way of declaring variables
let name = "Clifton";
//const - is a constant (cannot be changed)
const PI = 3.14;

//==================================================================================
//==================================================================================
//FUNCTIONS
//Normal function declaration
function printMyName(name) {
  console.log(name);
}

//arroqw function declaration (can also be let)
const printMyName2 = (name, age) => {
  console.log(name, age);
};

//one parameter doesnt need parenthesis
const printMyName3 = (name) => {
  console.log(name);
};

const doubleNum = (num) => {
  return num * 2;
};

//a one line return function doesn't need return keyword and {}
const doubleNum2 = (num) => num * 2;

//full version
function doubleNum3(num) {
  return num * 2;
}

//==================================================================================
//==================================================================================
//PACKAGING (imports and exports)
//see person.js, utility.js and app.js on how to expose variables to outside of the class
//export is essentially java's "public" keyword

//==================================================================================
//==================================================================================
//SPREAD AND REST
//spread can be used in objects and arrays, it copies all the values from the previosu object into the new object
//i.e. it expands a variable into its components
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];

//rest does the opposite (with the same operator), getOnlyOnes can take in many args
//these are condensed into an array and array functions can be used on the paramter

function getOnlyOnes(...args) {
  return args.filter((el) => el === 1);
}

//==================================================================================
//==================================================================================
//DESTRUCTURING
//values in arrays can be pulled into individual variables
const numbers2 = [1, 2, 3];
[num1, num2] = numbers2; //destructuring the first and second number
[a, , c] = numbers2; //destructuring the first and third number

//values in objects can be pulled into single variables
//{ name } = { name: "Max", age: 28 };

//==================================================================================
//==================================================================================
//NOTE: Primitive and object references are the same in javascript as it is in java

//==================================================================================
//==================================================================================
//ARRAY FUNCTIONS
const numbers3 = [1, 2, 3];

//map takes in an anonymous array which operates on each element in the array
//and returns a new array with the new values
const doubleArray = numbers3.map((num) => {
  return num * 2;
});
