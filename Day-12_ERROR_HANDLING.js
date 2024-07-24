// Activty 1: Basic Error Handling with try catch

// Task 1:

const throwError = () => {
    throw new Error("An error occurred");
}

try {
    throwError();
} catch (error) {
    console.log(error.message);
}


// Task 2:

const divide = (a, b) => {
   try {
     return a / b;
   } catch (error) {
        console.error(`Divided by zero: ${error.message}`);
   }
}

console.log(divide(10, 0)); 

// Activity 2: Finally Block

// Task 3:

try {
    console.log(5 / a);
} catch (error) {
    console.error(`Error: ${error.message}`);
} finally {
    console.log("This will always run");
}


// Activity 3: Custom Error Objects

// Task 4:

// Define the custom error class
class CustomError extends Error {
    constructor(message) {
        super(message); // Call the parent class constructor
        this.name = this.constructor.name; // Set the error name to the class name
    }
}

// Function that throws the custom error
function doSomethingRisky() {
    throw new CustomError("Something went wrong in doSomethingRisky");
}

// Use try-catch to handle the custom error
try {
    doSomethingRisky();
} catch (error) {
    if (error instanceof CustomError) {
        console.error("Custom error caught:", error.message);
    } else {
        console.error("Unexpected error caught:", error);
    }
}


// Task 5:

function Validation(name) {
    return name ? `${name} is your name` : (function() { throw new Error("Name cannot be empty"); })();
}

console.log(Validation("John")); // Output: John is your name


// Activity 4: Error Handling in Promises

// Task 6:

function randomPromise() {
    return new Promise((resolve, reject) => {
        const randomValue = Math.random();
        if (randomValue < 0.5) {
            resolve("Promise resolved successfully!");
        } else {
            reject("Promise rejected!");
        }
    });
}

randomPromise()
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error("Error:", error);
    });


// Task 7:

async function handleRandomPromise() {
    try {
        const message = await randomPromise();
        console.log(message);
    } catch (error) {
        console.error("Error:", error);
    }
}

handleRandomPromise();



// Activity 5: Graceful Error Handling in fetch

// Task 8:

fetch("https://invalid-url.com")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error("Fetch error:", error);
    });


// Task 9:

async function fetchData() {
    try {
        const response = await fetch("https://invalid-url.com");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Fetch error:", error);
    }
}

fetchData();
