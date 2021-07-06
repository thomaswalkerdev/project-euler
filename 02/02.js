function sumFibionnaciNumbers(maxValue) {
  let sum = 0;
  for (let i = 0; i < maxValue; i++) {
    if (isFibonacci(i)) {
      sum += i;
    }
  }

  return sum;
}

function isPerfectSquare(x) {
  let s = parseInt(Math.sqrt(x));
  return s * s == x;
}

function isFibonacci(num) {
  return (
    isPerfectSquare(5 * num * num + 4) || isPerfectSquare(5 * num * num - 4)
  );
}

var sumOfFibionnaciNumbers = sumFibionnaciNumbers(4000000);
console.log(sumOfFibionnaciNumbers);
