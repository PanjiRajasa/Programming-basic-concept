// 1. Javascript variable
let vraiable = "some data"; // keyword "let" can create a flexible variable, i.e. its  data value can be changed at any time
const variable2 = "some data"; // keyword "const" can create a rigid variable, because the variable data cannot be changed (constant)
var variable3 = "some data"; // keyword "var" same as keyword "let", Variables declared by var are available throughout the function in which they're declared, and Variables declared by let are only available inside the block where they're defined.
// So the best practice is use "let" keyword instead use "var" keyword

// 2. Conditional statements
let x = true
if (x === true) {
  //some code
} else if (x === true) {
  // some code
} else {
  // some code
};

// 3. Loopings and iteration javascript

// for loop

for (let i = 1; i < 6; i++) {
  console.log(i);
};

// while loop

let i = 1;
while (i < 6) {
  console.log(i);
  i++;
};

// for in loop
// The JavaScript for in statement loops through the properties of an Object

const person = {
  name: 'Panji ',
  age: 15,
  unknown:' is true'
};
let text = "";

for (let x in person) {
  text += person[x]
};
  console.log(text)

// example explanation :
// The for in loop iterates over a person object
// Each iteration returns a key (x)
// The key is used to access the value of the key
// The value of the key is person[x]

// for of loop
//The JavaScript for of statement loops through the values of an iterable object.
//It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more.

const cars = ["BMW ", "Volvo ", "Mini"];
let text2 = "";
for (let x of cars) {
  text2 += x;
};
console.log(text2);

// The different between for of and for in :
// for of : loops through the values of an iterable object
// for in : loops through the properties in object 


// do while loop

// The do while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.

let index = 1;
do {
  console.log(index);
  index++;
} while (index < 11);

