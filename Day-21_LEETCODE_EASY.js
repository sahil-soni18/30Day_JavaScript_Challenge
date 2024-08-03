
// Activity 1: Two Sum

function twoSum(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}

console.log(twoSum([2, 7, 11, 15], 9)); 
console.log(twoSum([3, 2, 4], 6));     
console.log(twoSum([3, 3], 6));         


//Activity 2: Reverse Integer

function reverseInteger(x) {
    let reversed = parseInt(x.toString().split('').reverse().join('')) * Math.sign(x);
    return (reversed < Math.pow(2, 31) - 1 && reversed > Math.pow(-2, 31)) ? reversed : 0;
}

console.log(reverseInteger(123));  
console.log(reverseInteger(-123)); 
console.log(reverseInteger(120));   
console.log(reverseInteger(0));     

// Activity 3: Palindrome Number

function isPalindrome(x) {
    if (x < 0) return false;
    let str = x.toString();
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}

console.log(isPalindrome(121));     
console.log(isPalindrome(-121));     
console.log(isPalindrome(10));       
console.log(isPalindrome(-101));     


//Activity 4: Merge Two Sorted Lists


function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function mergeTwoLists(l1, l2) {
    let dummy = new ListNode();
    let current = dummy;

    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    current.next = l1 === null ? l2 : l1;
    return dummy.next;
}

// Helper function to create linked lists from arrays
function createLinkedList(arr) {
    let dummy = new ListNode();
    let current = dummy;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

let l1 = createLinkedList([1, 2, 4]);
let l2 = createLinkedList([1, 3, 4]);
let mergedList = mergeTwoLists(l1, l2);

while (mergedList !== null) {
    console.log(mergedList.val); 
    mergedList = mergedList.next;
}


// Activity 5: Valid Parentheses

function isValid(s) {
    let stack = [];
    let map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let char of s) {
        if (map[char]) {
            stack.push(map[char]);
        } else {
            if (stack.pop() !== char) {
                return false;
            }
        }
    }
    return stack.length === 0;
}
console.log(isValid("()"));       
console.log(isValid("()[]{}"));  
console.log(isValid("(]"));       
console.log(isValid("([)]"));     
console.log(isValid("{[]}"));     
