// Activity 1: Variable Declaration:

// Task 1:

var number = 18;

console.log(number);

// Task 2:

let word = "30 Day JavaScript Challenge";

console.log(word);

// Activity 2: Constant Declaration:

// Task 3:

const boolVariable = true;

console.log(boolVariable);

// Activity 3: Data Types:

// Task 4:

let var1 = 10;

let var2 = "20";

let var3 = false;

let var4 = {
    name: "John Doe",
    age: 30
};

let var5 = [1, "Hello World!", true, [2, "Hello World"], { Day: 1}];

console.log(typeof var1); // Output: number

console.log(typeof var2); // Output: string

console.log(typeof var3); // Output: boolean

console.log(typeof var4); // Output: object

console.log(typeof var5); // Output: object


// In JavaScript, arrays are a special type of object. When you use the typeof operator on an array, it returns "object" because arrays are objects in JavaScript. However, you can distinguish an array from a regular object using the Array.isArray() method.

console.log(Array.isArray(var5));


// Activity 4: Reassinging Variables in JavaScript

// Task 5:

let x = 10;

console.log("Before reassigning x: ", x);

x = 20;

console.log("After reassigning x: ", x);


// Activity 5: Understanding constants in JavaScript:

// Task 6:

const PI = 3.14;

console.log("PI value: ", PI);

PI = 3.15;

console.log("Trying to reassign PI value: ", PI); // Output: Uncaught TypeError: Assignment to constant variable.