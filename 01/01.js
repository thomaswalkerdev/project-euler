/* 
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

function sumFactors(belowNumber, firstFactor, secondFactor) {
  let total = 0;
  for (let i = 0; i < belowNumber; i++) {
    if (i % firstFactor == 0 || i % secondFactor == 0) {
      total += i;
    }
  }

  return total;
}

var sumOf3and5Factors = sumFactors(10, 3, 5);
console.log(sumOf3and5Factors);
