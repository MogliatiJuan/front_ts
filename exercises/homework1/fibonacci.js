////fibonacci sequence
var fibonacci = function (n) {
    if (n === 0) {
        return 0;
    }
    else if (n === 1) {
        return 1;
    }
    else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
};
var numFibonacci = 7;
var resultFibonacci = fibonacci(numFibonacci);
console.log("La posici\u00F3n ".concat(numFibonacci, " en la secuencia de Fibonacci es: ").concat(resultFibonacci));
