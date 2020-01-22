function pivotHelper(arr, start=0, end=arr.length - 1) {
  let pivot = arr[start];
  let swapIdx = start;
  let i = start + 1;
  for(i; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      [arr[swapIdx], arr[i]] = [arr[i], arr[swapIdx]];
    }
  }

  [arr[swapIdx], arr[start]] = [arr[start], arr[swapIdx]];

  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {    
    let pivotIndex = pivotHelper(arr, left, right);
    
    quickSort(arr, left, pivotIndex - 1);
    
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
}

console.log(quickSort([4,8,2,1,5,7,6,3]));