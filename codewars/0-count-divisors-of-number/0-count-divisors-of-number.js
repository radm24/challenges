function getDivisorsCnt(n){
  // General formula: 
  // n = p1^exp1 * p2^exp2 * ... * pk^expk;  p - prime number, exp - exponent
  // d(n) = (exp1 + 1)(exp2 + 1) * ... * (expk + 1)
  
  let numDivisors = 1;
  let factor = 2;
  
  // if n is not a prime number then it must have 
  // one factor which is <= sqrt(n)
  while (factor * factor <= n) {
    if (n % factor === 0) {
      // 'factor' is prime factor of n, determine the exponent
      let exponent = 0;
      while (n % factor === 0) {
        n /= factor;
        exponent++;
      }
      // 'factor^exponent' is one term in prime factorization of n,
      // this contributes as factor 'exponent + 1'
      numDivisors *= exponent + 1;
    }
    factor = factor === 2 ? 3 : factor + 2;
  }
  
  // Now n is either 1 or a prime number. 
  // In the latter case, it contributes as factor 2 (exponent + 1 = 1 + 1)
  if (n > 1) {
    numDivisors *= 2;
  }
  
  return numDivisors;
}