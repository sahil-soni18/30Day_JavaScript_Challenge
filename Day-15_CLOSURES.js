// Activity 1:  Understanding Closures

// Task 1:

function outerFunction() {
    let outerVariable = 'Hello, World!';

    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction;
}

const func = outerFunction();
func(); 

// Task 2:

function createCounter() {
    let counter = 0;

    return {
        increment: function() {
            counter++;
        },
        getValue: function() {
            return counter;
        }
    };
}

const counter = createCounter();
counter.increment();
console.log(counter.getValue());
counter.increment();
console.log(counter.getValue());


console.log("_____________________________________________________________");
// Activity 2: Practical Closures

// Task 3:

function createUniqueIdGenerator() {
    let lastId = 0;

    return function() {
        lastId++;
        return lastId;
    };
}

const generateUniqueId = createUniqueIdGenerator();
console.log(generateUniqueId()); 
console.log(generateUniqueId()); 
console.log(generateUniqueId());




// Task 4:

function createGreeting(name) {
    return function() {
        console.log(`Have, ${name}..??`);
    };
}

const haveChai = createGreeting('Chai');
haveChai();

const haveCoffee = createGreeting('Coffee');
haveCoffee();


// Activity 3: Closures in Loops

// Task 5:

function createFunctionArray() {
    let functions = [];

    for (let i = 0; i < 5; i++) {
        functions[i] = (function(index) {
            return function() {
                console.log(index);
            };
        })(i);
    }

    return functions;
}

const functionArray = createFunctionArray();
functionArray[0](); 
functionArray[1](); 
functionArray[2](); 


// Activity 4: Module Pattern

// Task 6:

const ItemManager = (function() {
    let items = [];

    return {
        addItem: function(item) {
            items.push(item);
        },
        removeItem: function(item) {
            const index = items.indexOf(item);
            if (index > -1) {
                items.splice(index, 1);
            }
        },
        listItems: function() {
            return items;
        }
    };
})();

ItemManager.addItem('Item1');
ItemManager.addItem('Item2');
console.log(ItemManager.listItems());
ItemManager.removeItem('Item1');
console.log(ItemManager.listItems());



// Activity 5: Memoization

// Task 7:


function memoize(fn) {
    const cache = {};

    return function(...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            return cache[key];
        } else {
            const result = fn(...args);
            cache[key] = result;
            return result;
        }
    };
}

function add(a, b) {
    return a + b;
}

const memoizedAdd = memoize(add);
console.log(memoizedAdd(1, 2)); 
console.log(memoizedAdd(1, 2)); 



// Task 8:

function memoizefactorial(fn) {
    const cache = {};

    return function(...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            return cache[key];
        } else {
            const result = fn(...args);
            cache[key] = result;
            return result;
        }
    };
}

function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

const memoizedFactorial = memoizefactorial(factorial);
console.log(memoizedFactorial(5)); 
console.log(memoizedFactorial(5));





