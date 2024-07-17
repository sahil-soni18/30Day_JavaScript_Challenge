// Activity 1: Function Declaration

// Task 1:

const checkNumber = (number) => {
    console.log(`${number % 2 === 0 ? "Even": "Odd"} `)
}

checkNumber(5);

// Task 2:

const calculateSqaure = (number) => {
    return number * number;
}

console.log(`The Sqaure is: ${calculateSqaure(2)}`);

// Activity 2: Function Expression

// Task 3:

function findMax(...args) {
    return Math.max(...args);
}

console.log(`The Maximum number is: ${findMax(50, 10, 3, 8, 2)}`);

// Task 4:

function concatenate(str1, str2) {
    return str1 + str2;
}

console.log(`Concatenated String: ${concatenate("Hello", " World")}`);

// Activity 3: Arrow Functions

// Task 5:

const sum = (num1, num2) => num1 + num2;

console.log(`Sum: ${sum(5, 3)}`);


// Task 6:

const checkString = (str1, character) => {
    return str1.includes(character);
}

console.log(`Character Found: ${checkString("Hello World", "O")}`);

// Activity 4: Function Parameter and default value

// Task 7:

const multiplication = (a, b=2) => a * b;

console.log(`Multiplication: ${multiplication(5, 3)}`);

// Task 8:

const greet = (name, age=22) => `Hello ${name}, I Know your age is ${age}`;

console.log(`Greeting: ${greet("Sahil")}`);

// Activity 9: Higher-order function

// Task 9:

function higher(lower, number) {
    while (number > 0) {
        lower();
        number--;
    }
}

let calling = 0;

const lower = () => {
    calling++;
    console.log(`Called: ${calling} Time`);
}

higher(lower, 5);

// Task 10:

function higherFunc (lowerFunc1, lowerFunc2, number) {
    const result = lowerFunc1(number);
    lowerFunc2(result);
}

const lowerFunc1 = (number) => {
    return number * Math.PI;
}

const lowerFunc2 = (result) => {
    console.log(`The result is: ${result}...`);
}

higherFunc(lowerFunc1, lowerFunc2, 2);