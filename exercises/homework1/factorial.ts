//factorial of a number
const factorialize = (n: number): number => {
  if (n <= 0) return 1;
  return n * factorialize(n - 1);
};

const number: number = 5;
const factorial: number = factorialize(number);
console.log(`El factorial de ${number} es: ${factorial}`);
