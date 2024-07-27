
// Activity 1: Creating and Exporting Modules

// Task 1:

export function add (a, b) {
    try {
        return a + b;
    } catch (error) {
        throw error;
    }
}

// Task 2

export const person = {
    name: "Sahil",
    age: 22,
    greet() {
        console.log(`Hello, my name is ${this.name}!`);
    }
}

// Activity 2: Named and Default Exports

// Task 3:

const Whatisthis = () => {
    console.log("This is Day 13 Of  30 Day Javascript Challenge...");
}

const todayTopic = () => {
    console.log("Today's Topic: Modules, Named and Default Exports...");
}

export { Whatisthis, todayTopic };


// Task 4:

const defaultExport = () => {
    console.log("This is the default export.");
}

export default defaultExport;



// Activity 4: Using Third-Party Modules

// Task 6:

import lodash from 'lodash';

const array = [1, 2, 3, 4, 5];

console.log(`Sum of array elements: ${lodash.sum(array)}`);

const chunkedArray = lodash.chunk(array, 3);
console.log('Chunks:', chunkedArray);

// Task 7:

// Using Jokes API https://v2.jokeapi.dev/joke/Programming,Dark?amount=4 to fetch Jokes...

import axios from 'axios';

const fetchJokes = async () => {
    try {
        const response = await axios.get('https://v2.jokeapi.dev/joke/Programming,Dark?amount=4');
        console.log('Jokes:', response.data);
    } catch (error) {
        console.error('Error fetching jokes:', error);
    }
}

fetchJokes();
