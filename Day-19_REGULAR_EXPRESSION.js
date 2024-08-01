// Activity 1: Basic Regular Expressions
//Task 1: Write a regular expression to match a simple pattern (e.g., match all occurrences of the word "JavaScript" in a string). Log the matches.

const text1 = "JavaScript is a versatile language. JavaScript can be used for both front-end and back-end development.";
const pattern1 = /JavaScript/g;

const matches1 = text1.match(pattern1);
console.log("Matches for Task 1:", matches1);


//Task 2: Write a regular expression to match all digits in a string. Log the matches

const text2 = "The year 2024 marks a new era. My phone number is 123-456-7890.";
const pattern2 = /\d+/g;

const matches2 = text2.match(pattern2);
console.log("Matches for Task 2:", matches2);


// Activity 2: Character Classes and Quantifiers
//Task 3: Write a regular expression to match all words in a string that start with a capital letter. Log the matches.

const text3 = "JavaScript is a versatile language. The Year 2024 marks a New Era.";
const pattern3 = /\b[A-Z][a-z]*\b/g;

const matches3 = text3.match(pattern3);
console.log("Matches for Task 3:", matches3);


//Task 4: Write a regular expression to match all sequences of one or more digits in a string. Log the matches.
const text4 = "There are 365 days in a year. My phone number is 123-456-7890.";
const pattern4 = /\d+/g;

const matches4 = text4.match(pattern4);
console.log("Matches for Task 4:", matches4);

// Activity 3: Grouping and Capturing
//Task 5: Write a regular expression to capture the area code, central office code, and line number from a US phone number format (e.g., (123) 456-7890). Log the captures.

const text5 = "My phone number is (123) 456-7890.";
const pattern5 = /\((\d{3})\)\s(\d{3})-(\d{4})/;

const matches5 = text5.match(pattern5);
console.log("Matches for Task 5:", matches5);


//Task 6: Write a regular expression to capture the username and domain from an email address. Log the captures.

const text6 = "Contact me at example@example.com.";
const pattern6 = /(\w+)@(\w+\.\w+)/;

const matches6 = text6.match(pattern6);
console.log("Matches for Task 6:", matches6);


// Activity 4: Assertions and Boundaries
//Task 7: Write a regular expression to match a word only if it is at the beginning of a string. Log the matches.
const text7 = "JavaScript is a versatile language.";
const pattern7 = /^\w+/;

const matches7 = text7.match(pattern7);
console.log("Matches for Task 7:", matches7);


//Task 8: Write a regular expression to match a word only if it is at the end of a string. Log the matches.

const text8 = "JavaScript is a versatile language";
const pattern8 = /\w+$/;

const matches8 = text8.match(pattern8);
console.log("Matches for Task 8:", matches8);


// Activity 5: Practical Applications
//Task 9: Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character). Log whether the password is valid.
const password = "P@ssw0rd";
const pattern9 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const isValidPassword = pattern9.test(password);
console.log("Is the password valid?", isValidPassword);

//Task 10: Write a regular expression to validate a URL. Log whether the URL is valid.

const url = "https://www.example.com";
const pattern10 = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9]+)(\.[a-zA-Z]{2,})(\/\w*)*\/?$/;

const isValidURL = pattern10.test(url);
console.log("Is the URL valid?", isValidURL);