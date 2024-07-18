// Activity 1: Array creation and access

// Task 1

let arr = [1, 2, 3, 4, 5];

console.log(`array: ${arr}`);

// Task 2

console.log(`element at index 0: ${arr[0]}`);
console.log(`element at index 4: ${arr[arr.length - 1]}`);

// Activity 2: Array methods

// Task 3

arr.push(6);

console.log(`updated array: ${arr}`);

// Task 4

arr.pop();

console.log(`updated array: ${arr}`);

// Task 5

arr.shift();

console.log(`updated array: ${arr}`);

// Task 6

arr.unshift(0);

console.log(`updated array: ${arr}`);

// Activity 7: Array methods (Intermediate)

// Task 7

const doubledArray = arr.map((element) => {
    return element * 2;
});

console.log(`doubledArray is: ${doubledArray}`);

// Task 8

const evenArray = arr.filter((element) => {
    return element % 2 === 0;
});

console.log(`evenArray: ${evenArray}`);

// Task 9

const sum = arr.reduce((prev, next) => {
    console.log(prev, next)
    return prev + next
});

console.log(sum)

// Activity 4: Array Iteration

// Task 10

for (let i = 0; i < arr.length; i++) {
    console.log(`Element at index ${i} is ${arr[i]}...`);
}

// Task 11

console.log("Iteration using forEach Loop...");
arr.forEach(element => console.log(element));

// Activity 5: Multi-Dimensional Array

// Task 12

const twoDArray = [[1, 2, 3], ['a', 'b', 'c']];

console.log(`2D Array (Matrix) ${twoDArray}`);

// Task 13

console.log(`Accessing Specific Element from matrix...`);

console.log(`Accessing Element 'b' ${twoDArray[1][1]}`);





