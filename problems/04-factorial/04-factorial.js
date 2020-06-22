/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */
function factorial(sumNum) {
  fact = 1;
  for (let i = 1; i <= sumNum; i++) {
    fact = fact * i;
  }
  console.log(fact);
  return fact;
}
factorial(5);
