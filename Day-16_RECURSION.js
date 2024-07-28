// Activity 1: Basic Rescursion

// Task 1:

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5)); 

// Task 2:

function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

console.log(fibonacci(18));


// Activty 2: Recursion with Array

// Task 3:

function arraySum (arr) {
    if (arr.length === 0) {
        return 0;
    } else {
        return arr[0] + arraySum(arr.slice(1));
    }
}

console.log(arraySum([1, 2, 3, 4, 5]));


// Task 4:

function findMax(arr) {
    if (arr.length === 1) {
        return arr[0];
    }

    const restMax = findMax(arr.slice(1));
    return arr[0] > restMax ? arr[0] : restMax;
}


const array = [3, 1, 4, 1, 5, 9, 2, 6, 52, 3, 5];
console.log(findMax(array)); 


// Activity 3: String Manipulation with Recursion

// Task 5:

function reverseString(str) {
    if (str === "") {
        return "";
    }
    return reverseString(str.substr(1)) + str[0];
}


console.log(reverseString("hello")); 
console.log(reverseString("world")); 
console.log(reverseString("abcde")); 




// Task 6:

function isPalindrome(str) {
    if (str.length <= 1) {
        return true;
    }
    if (str[0] !== str[str.length - 1]) {
        return false;
    }
    return isPalindrome(str.substring(1, str.length - 1));
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));   
console.log(isPalindrome("level"));   



// Activity 4: Recursive Search


// Task 7:

function binarySearch(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) {
        return -1;
    }

    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] > target) {
        return binarySearch(arr, target, left, mid - 1);
    } else {
        return binarySearch(arr, target, mid + 1, right);
    }
}


const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binarySearch(sortedArray, 5)); 
console.log(binarySearch(sortedArray, 11));
console.log(binarySearch(sortedArray, 1)); 

// Task 8:

function countOccurrences(arr, target) {
    if (arr.length === 0) {
        return 0;
    }
    return (arr[0] === target ? 1 : 0) + countOccurrences(arr.slice(1), target);
}


const numbers = [1, 2, 3, 4, 1, 1, 2, 3, 1];
console.log(countOccurrences(numbers, 1)); 
console.log(countOccurrences(numbers, 2)); 
console.log(countOccurrences(numbers, 5)); 


console.log("Doing Optional Task...");
// Activity 5: Tree Traversal (Optional)

// Task 9:

class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function inOrderTraversal(node) {
    if (node === null) {
        return;
    }
    inOrderTraversal(node.left);
    console.log(node.value);
    inOrderTraversal(node.right);
}


const root = new TreeNode(1, new TreeNode(2), new TreeNode(3, new TreeNode(4), new TreeNode(5)));
inOrderTraversal(root); 


console.log(" ")
console.log("Task 10...");
console.log(" ")
// Task 10:

function calculateDepth(node) {
    if (node === null) {
        return 0;
    }
    const leftDepth = calculateDepth(node.left);
    const rightDepth = calculateDepth(node.right);
    return Math.max(leftDepth, rightDepth) + 1;
}


const rootDepth = new TreeNode(1, new TreeNode(2), new TreeNode(3, new TreeNode(4), new TreeNode(5)));
console.log(calculateDepth(rootDepth)); 





