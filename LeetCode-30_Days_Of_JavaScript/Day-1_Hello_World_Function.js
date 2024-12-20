var createHelloWorld = function() {
    
    return () => "Hello World";
};

const func = createHelloWorld();

console.log(func()); 