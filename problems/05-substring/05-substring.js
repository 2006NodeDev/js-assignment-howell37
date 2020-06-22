/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function findSubString(someStr, startIndex, endIndex) {
  let newWord = someStr.substring(startIndex, endIndex);
  if (startIndex !== typeof Number && endIndex !== typeof Number) {
    console.error("bad request");
  } else {
    console.log(newWord);
  }
}
findSubString("friends", 2, 6);
