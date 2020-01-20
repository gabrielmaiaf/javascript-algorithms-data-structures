function binarySearch(arr, val) {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;
  let customPointer;

  while (leftPointer <= rightPointer) {
    customPointer = leftPointer + Math.floor((rightPointer - leftPointer) / 2);

    if (arr[customPointer] === val) {
      return customPointer;
    } else if (arr[customPointer] > val) {
      rightPointer = customPointer - 1;
    } else {
      leftPointer = customPointer + 1;
    }
  }

  return -1;
}

console.log(binarySearch([1,2,3,4,5], 2));
console.log(binarySearch([2,5,6,9,13,15,28,30], 15));