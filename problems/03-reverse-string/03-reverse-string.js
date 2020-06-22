/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseStr(someStr) {
  let backwards = someStr.split("").reverse().join("");
  console.log(backwards);
}

reverseStr("howell");
