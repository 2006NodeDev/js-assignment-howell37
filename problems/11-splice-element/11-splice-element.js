/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
function spliceElement(someArr, index) {
  newArr = someArr.splice(index);
  console.log(newArr);
  return newArr;
}

spliceElement([1, 2, 3, 4, 5, 6], 3);
