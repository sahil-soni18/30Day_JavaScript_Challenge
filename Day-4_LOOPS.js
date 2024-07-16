// Activity 1: For Loop

// Task 1: Write a program to print numbers from 1 to 10 using a for loop.
let result = '';
for (let i = 1; i <= 10; i++) {
    result += `${i} `;
}
console.log(result.trim());

// Task 2: Write a program to print the multiplication table of 5 using a for loop.
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

// Activity 2: While Loop

// Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
let sum = 0;
let i = 1;
while (i <= 10) {
    sum += i++;
}
console.log(`Sum is: ${sum}`);

// Task 4: Write a program to print numbers from 10 to 1 using a while loop.
let j = 10;
let result1 = '';
while (j >= 1) {
    result1 += `${j--} `;
}
console.log(result1.trim());

// Activity 3: Do...While Loop

// Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.
let k = 1;
do {
    console.log(k++);
} while (k <= 5);

// Task 6: Write a program to calculate the factorial of a number using a do...while loop.
const num = 6;
let factorial = 1;
let l = num;
do {
    factorial *= l--;
} while (l > 0);
console.log(`Factorial of ${num} is: ${factorial}`);

// Activity 4: Nested Loops

// Task 7: Write a program to print a pattern using nested for loops.
for (let m = 1; m <= 5; m++) {
    let pattern = '';
    for (let n = 1; n <= m; n++) {
        pattern += '* ';
    }
    console.log(pattern.trim());
}

// Activity 5: Loop Control Statements

// Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
for (let o = 1; o <= 10; o++) {
    if (o === 5) continue;
    console.log(o);
}

// Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
for (let p = 1; p <= 10; p++) {
    if (p === 7) break;
    console.log(p);
}
