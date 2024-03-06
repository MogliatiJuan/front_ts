//factorial of a number
var factorialize = function (n) {
    if (n <= 0)
        return 1;
    return n * factorialize(n - 1);
};
var number = 5;
var factorial = factorialize(number);
console.log("El factorial de ".concat(number, " es: ").concat(factorial));
