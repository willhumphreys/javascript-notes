const args = process.argv;

let isPrime = num => {
  if (num === 2 || num === 3) return true;
  if (num % 2 === 0) return false;

  let [divisor, limit] = [3, Math.sqrt(num)];

  while (divisor <= limit) {
    if (num % divisor === 0) return false;

    divisor += 2;
  }
  return true;
};

const possiblePrime = Number(args[2]);

console.log("Using argument " + possiblePrime);
console.log(isPrime(possiblePrime));
