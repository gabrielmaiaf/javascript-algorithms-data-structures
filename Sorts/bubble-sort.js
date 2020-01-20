function bubbleSort(arr) {
  let noSwaps;
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    noSwaps = false;
  }

  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j+1])
        swap(arr, j, j+1);
    }

    if (noSwaps)
      break;
  }

  return arr;
}

console.log(bubbleSort([5,2,1,3,6,4]));