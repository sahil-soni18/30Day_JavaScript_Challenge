// Activity 1: Creating and Exporting Modules

// Task 1:

import { add } from "../../Day-13_MODULES.js";

const result = add(5, 10);

console.log(result); 

// Task  2:

import { person } from "../../Day-13_MODULES.js";

person.greet();

// Activity 2: Named and Default Exports

// Task 3:

import { Whatisthis as intro, todayTopic as topic } from "../../Day-13_MODULES.js";

intro();

topic();

// Task 4:

import  defaultExport  from "../../Day-13_MODULES.js"

defaultExport();


// Activity 3: Importing Entire Module

// Task 5:



// Import the entire module as an object
import * as myModule from '../../Day-13_EXPORT_ENTIRE_MODULE.js';


console.log('PI:', myModule.PI); 
console.log('E:', myModule.E); 
console.log('Add:', myModule.add(5, 3)); 
console.log('Multiply:', myModule.multiply(5, 3)); 




