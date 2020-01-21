function selectionSort(arr) {
  let minIndex;

  for (let i = 0; i < arr.length; i++) {
    minIndex = i;
    for (let j = i+1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex])
        minIndex = j;
    }

    if (minIndex !== i)
      [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
  }

  return arr;
}

console.log(selectionSort([5,2,1,3,6,4]));