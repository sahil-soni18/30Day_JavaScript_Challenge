// Day 3:

// Activity 1: if-Else Statements

//Task 1:

let number = 2;

if (number > 0) console.log("number is Positive");
else if (number < 0) console.log("number is Negative");
else console.log("number is Zero");

// Task 2: 

let age = 18;

if (age >= 18) console.log("You are eligible to Vote...");
else console.log("You are not eligible to Vote...");

// Activity 2: Nested if-Else Statements

// Task 3:

let num1 = 10;
let num2 = 100;
let num3 = 1000;

if (num1 > num2) {
    if (num1 > num3) console.log(`${num1} is the largest number.`);
    else console.log(`${num3} is the largest number.`);
} else if ( num1 < num2 ) {
    if ( num2 > num3 ) console.log(`${num2} is Largest!`)
    else console.log(`${num3} is the largest number.`);
}

// Activity 3: Switch Statements

// Task 4: 

let dayName;
let dayNumber = 2;

  switch(dayNumber) {
    case 1:
      dayName = 'Sunday';
      break;
    case 2:
      dayName = 'Monday';
      break;
    case 3:
      dayName = 'Tuesday';
      break;
    case 4:
      dayName = 'Wednesday';
      break;
    case 5:
      dayName = 'Thursday';
      break;
    case 6:
      dayName = 'Friday';
      break;
    case 7:
      dayName = 'Saturday';
      break;
    default:
      dayName = 'Invalid day number';
  }

  console.log(dayName);


  // Task 5:
  let grade;
  let score = 92;

  switch(true) {
    case (score >= 90 && score <= 100):
      grade = 'A';
      break;
    case (score >= 80 && score < 90):
      grade = 'B';
      break;
    case (score >= 70 && score < 80):
      grade = 'C';
      break;
    case (score >= 60 && score < 70):
      grade = 'D';
      break;
    case (score >= 0 && score < 60):
      grade = 'F';
      break;
    default:
      grade = 'Invalid score';
  }

  console.log(grade);


  // Activity 4: Conditional Ternary Operator

  // Task 6:

  let numberToCheck = 18;
  console.log(`Given Number is ${numberToCheck % 2 == 0? "Even": "Odd"}`);

// Activity 5: Combining Conditions

// Task 7:

  let year = 2024;
  let isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  console.log(isLeap ? 'Leap year' : 'Not a leap year');