/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
function isEven(someNum) {
  if (someNum / 2 - Math.floor(someNum / 2) === 0) {
    console.log("true");

    return true;
  } else {
    console.log("false");

    return false;
  }
}

isEven(60);
