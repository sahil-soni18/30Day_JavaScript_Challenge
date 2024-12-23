var expect = function(val) {
    return {
        toBe: (arg) => {
            if(arg === val) return true
            else throw "Not Equal"
        },
        notToBe: (arg) => {
            if(arg !== val) return true
            else throw "Equal"
        }
    }
};

// Test Cases


console.log(expect(5).toBe(5)); // Pass
console.log(expect(5).notToBe(6)); // Pass

console.log(expect("hello").toBe("Hello")); // Not Equal
console.log(expect("hello").notToBe("world")); // Pass