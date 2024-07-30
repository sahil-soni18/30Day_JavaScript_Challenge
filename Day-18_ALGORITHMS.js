
//  Activity 1: Sorting Algorithms

//  Task 1: Bubble Sort

function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j + 1]
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log("Sorted array:", arr);
    return arr;
}

let arr1 = [64, 34, 25, 12, 22, 11, 90];
bubbleSort(arr1);


//  Task 2: Selection Sort

function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        // Swap the found minimum element with the first element
        let temp = arr[minIdx];
        arr[minIdx] = arr[i];
        arr[i] = temp;
    }
    console.log("Sorted array:", arr);
    return arr;
}

let arr2 = [64, 25, 12, 22, 11];
selectionSort(arr2);


//  Task 3: Quicksort

function quicksort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quicksort(left), pivot, ...quicksort(right)];
}

let arr3 = [10, 7, 8, 9, 1, 5];
console.log("Sorted array:", quicksort(arr3));


//  Activity 2: Searching Algorithms

//  Task 4: Linear Search

function linearSearch(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) {
            console.log("Element found at index:", i);
            return i;
        }
    }
    console.log("Element not found");
    return -1;
}

let arr4 = [2, 3, 4, 10, 40];
linearSearch(arr4, 10);


//  Task 5: Binary Search

function binarySearch(arr, x) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === x) {
            console.log("Element found at index:", mid);
            return mid;
        } else if (arr[mid] < x) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    console.log("Element not found");
    return -1;
}

let arr5 = [2, 3, 4, 10, 40];
binarySearch(arr5, 10);


//  Activity 3: String Algorithms

//  Task 6: Count Character Occurrences

function countOccurrences(str) {
    let counts = {};
    for (let char of str) {
        counts[char] = counts[char] ? counts[char] + 1 : 1;
    }
    console.log("Character counts:", counts);
    return counts;
}

let str1 = "hello world";
countOccurrences(str1);


//  Task 7: Longest Substring Without Repeating Characters

function longestUniqueSubstring(s) {
    let n = s.length;
    let result = 0;
    let indexMap = new Map();
    for (let j = 0, i = 0; j < n; j++) {
        if (indexMap.has(s[j])) {
            i = Math.max(indexMap.get(s[j]), i);
        }
        result = Math.max(result, j - i + 1);
        indexMap.set(s[j], j + 1);
    }
    console.log("Length of longest substring without repeating characters:", result);
    return result;
}

let str2 = "abcabcbb";
longestUniqueSubstring(str2);


//  Activity 4: Array Algorithms

//  Task 8: Rotate Array

function rotateArray(arr, k) {
    k = k % arr.length;
    return arr.slice(-k).concat(arr.slice(0, -k));
}

let arr6 = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
console.log("Rotated array:", rotateArray(arr6, k));


//  Task 9: Merge Two Sorted Arrays

function mergeSortedArrays(arr1, arr2) {
    let mergedArray = [];
    let i = 0, j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }
    console.log("Merged array:", mergedArray);
    return mergedArray;
}

let sortedArr1 = [1, 3, 5, 7];
let sortedArr2 = [2, 4, 6, 8];
mergeSortedArrays(sortedArr1, sortedArr2);


//  Activity 5: Dynamic Programming (Optional)

//  Task 10: Fibonacci Sequence

function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    console.log("Fibonacci numbers:", fib);
    return fib;
}

fibonacci(10);


//  Task 11: Knapsack Problem

function knapsack(values, weights, capacity) {
    let n = values.length;
    let dp = Array(n + 1).fill().map(() => Array(capacity + 1).fill(0));
    for (let i = 1; i <= n; i++) {
        for (let w = 0; w <= capacity; w++) {
            if (weights[i - 1] <= w) {
                dp[i][w] = Math.max(values[i - 1] + dp[i - 1][w - weights[i - 1]], dp[i - 1][w]);
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }
    console.log("Maximum value that can be obtained:", dp[n][capacity]);
    return dp[n][capacity];
}

let values = [60, 100, 120];
let weights = [10, 20, 30];
let capacity = 50;
knapsack(values, weights, capacity);


