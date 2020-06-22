/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr) {
  //turn string into array to reverse it and join the array back together
  let reverse = someStr.split("").reverse().join("");
  console.log(reverse);
  // check to see if the reverse string equals the initial string
  if (reverse === someStr) {
    return true;
    //console.log(true);
  } else {
    return false;
    //console.log(false);
  }
}
isPalindrome("racecar");
