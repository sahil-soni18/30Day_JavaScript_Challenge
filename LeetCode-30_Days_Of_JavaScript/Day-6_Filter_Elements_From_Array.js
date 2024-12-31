var filter = function(arr, fn) {
    let filteredArray = [];

    for ( let i = 0; i < arr.length; i++ ) {
        if ( fn( arr[i], i )) {
            filteredArray.push(arr[i]);
        }
    }

    return filteredArray;
};

var isEven = function(x) {
    if ( x % 2 === 0 ) {
        return x;
    }
}

var arr = [1, 2, 3, 4, 5, 6];

console.log(filter(arr, isEven)); // [2, 4, 6]