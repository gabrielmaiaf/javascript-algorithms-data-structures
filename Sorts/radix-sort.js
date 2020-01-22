function radixSort(arr) {
  function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
  }
  
  function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
  }
  
  function mostDigits(nums) {
    let maxDigits = 0;
    for (i = 0; i < nums.length; i++) {
      maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
  }

  let largestDigits = mostDigits(arr);
  for (let k = 0; k < largestDigits; k++) {
    let tempArray = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < arr.length; i++) {
      tempArray[getDigit(arr[i], k)].push(arr[i]);
    }
    arr = [].concat(...tempArray);
  }

  return arr;
}


console.log(radixSort([12,9852,23,345,2345,5467]));