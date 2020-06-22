/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {
  n = numArray.length;
  temp = 0;

  for (i = 0; i < n; i++) {
    for (j = 1; j < n - i; j++) {
      if (numArray[j - 1] > numArray[j]) {
        temp = numArray[j - 1];
        numArray[j - 1] = numArray[j];
        numArray[j] = temp;
      }
    }
  }
  console.log(temp);
}
bubbleSort([1, 0, 3, 8, 10, 8, 15]);
