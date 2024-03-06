////fibonacci sequence
const fibonacci = (n: number): number => {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
};

const numFibonacci: number = 7;
const resultFibonacci: number = fibonacci(numFibonacci);
console.log(
  `La posición ${numFibonacci} en la secuencia de Fibonacci es: ${resultFibonacci}`
);
