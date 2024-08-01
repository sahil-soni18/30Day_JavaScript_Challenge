

 // Activity 1: Understanding LocalStorage

// Task 1: Write a script to save a string value to `localStorage` and retrieve it. Log the retrieved value.

// Save a string value to localStorage
localStorage.setItem('myString', 'Hello, LocalStorage!');

// Retrieve the string value from localStorage
let retrievedString = localStorage.getItem('myString');
console.log('Retrieved String:', retrievedString);


// Task 2: Write a script to save an object to `localStorage` by converting it to a JSON string. Retrieve and parse the object, then log it.

// Save an object to localStorage
let myObject = { name: 'Alice', age: 25 };
localStorage.setItem('myObject', JSON.stringify(myObject));

// Retrieve and parse the object from localStorage
let retrievedObject = JSON.parse(localStorage.getItem('myObject'));
console.log('Retrieved Object:', retrievedObject);


 // Activity 2: Using LocalStorage



// Task 4: Write a script to remove an item from `localStorage`. Log the `localStorage` content before and after removal.

// Log the localStorage content before removal
console.log('Before Removal:', localStorage.getItem('myString'));

// Remove an item from localStorage
localStorage.removeItem('myString');

// Log the localStorage content after removal
console.log('After Removal:', localStorage.getItem('myString'));


 // Activity 3: Understanding SessionStorage

// Task 5: Write a script to save a string value to `sessionStorage` and retrieve it. Log the retrieved value.

// Save a string value to sessionStorage
sessionStorage.setItem('mySessionString', 'Hello, SessionStorage!');

// Retrieve the string value from sessionStorage
let retrievedSessionString = sessionStorage.getItem('mySessionString');
console.log('Retrieved String:', retrievedSessionString);


// Task 6: Write a script to save an object to `sessionStorage` by converting it to a JSON string. Retrieve and parse the object, then log it.

// Save an object to sessionStorage
let mySessionObject = { name: 'Bob', age: 30 };
sessionStorage.setItem('mySessionObject', JSON.stringify(mySessionObject));

// Retrieve and parse the object from sessionStorage
let retrievedSessionObject = JSON.parse(sessionStorage.getItem('mySessionObject'));
console.log('Retrieved Object:', retrievedSessionObject);


 // Activity 4: Using SessionStorage


// Task 8: Write a script to remove an item from `sessionStorage`. Log the `sessionStorage` content before and after removal.

// Log the sessionStorage content before removal
console.log('Before Removal:', sessionStorage.getItem('mySessionString'));

// Remove an item from sessionStorage
sessionStorage.removeItem('mySessionString');

// Log the sessionStorage content after removal
console.log('After Removal:', sessionStorage.getItem('mySessionString'));


 // Activity 5: Comparing LocalStorage and SessionStorage

// Task 9: Write a function that accepts a key and a value, and saves the value to both `localStorage` and `sessionStorage`. Retrieve and log the values from both storage mechanisms.

function saveToBothStorages(key, value) {
    localStorage.setItem(key, value);
    sessionStorage.setItem(key, value);
}

saveToBothStorages('myKey', 'Value for both storages');

// Retrieve and log the values from both storage mechanisms
console.log('LocalStorage Value:', localStorage.getItem('myKey'));
console.log('SessionStorage Value:', sessionStorage.getItem('myKey'));


// Task 10: Write a function that clears all data from both `localStorage` and `sessionStorage`. Verify that both storages are empty.

function clearBothStorages() {
    localStorage.clear();
    sessionStorage.clear();
}

clearBothStorages();

// Verify that both storages are empty
console.log('LocalStorage:', localStorage.length === 0 ? 'Empty' : 'Not Empty');
console.log('SessionStorage:', sessionStorage.length === 0 ? 'Empty' : 'Not Empty');


