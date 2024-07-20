// Activity 1: Template Literals

// Task 1:

let name = "John Doe";
let age = 30;

console.log(`My name is ${name} and I am ${age} years old.`);

// Task 2: Create a multi line string using template literals and log it to the console

let multiLineString = `This is a multi-line
string with multiple lines.
This is the end.`;

console.log(multiLineString);


// Activity 2: Destructuring

// Task 3:

let arr = [1, 2, 3, 4, 5];

const [firstElement, secondElement] = arr;

console.log(`First element: ${firstElement}`);

console.log(`Second element: ${secondElement}`);

// Task 4:

import book  from './Day-7_OBJECTS.js';



const { title, Author, Year } = book;

console.log(`Title: ${title}`);

console.log(`Author: ${Author}`);

console.log(`Year: ${Year}`);


// Actitivty 3: Spread and Rest Operators

// Task 5:

const newArray = [...arr, "a", "b", "c"];

console.log(newArray);

// Task 6:

const sum = (...args) => {
    return args.reduce((acc, val) => acc + val, 0);
}

console.log(`Sum: ${sum(1, 2, 3, 4, 5)}`);


// Actitivty 4: Default Parameters

// Task 7:

function multiply(a, b=1) {
    return a * b;
}

console.log(`Multiplication Without default: ${multiply(5, 3)}`);

console.log(`Multiplication With Default value 1: ${multiply(2)}`);


// Actitvity 5: Enhanced Object Literals

// Task 8:

const myName = "Sahil";

const greet = (Name) => {
    return `Hello, ${Name}`;
};

const object = {myName, greet};

console.log("Object Created using enhanced object literals...");
console.log(object);

console.log(object.greet(object.myName));


// Task 9:

const propName = 'dynamicProp';
const propValue = 'This is a dynamic property';

const dynamicObject = {
  [propName]: propValue,
  method() {
    console.log('This is a method inside the dynamic object.');
  }
};

console.log(dynamicObject);
dynamicObject.method();






