var map = function(arr, fn) {
    let result = [];

    for ( let i = 0; i < arr.length; i++ ) {
        result[i] = fn(arr[i], i);
    }

    return result;
};

var square = function(x, y) {
    return x * y;
}

var numbers = [1, 2, 3, 4, 5];

console.log(map(numbers, square)); 