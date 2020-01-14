function countUniqueValues(array) {
  // if array < 2 return length
  if (array.length < 2)
    return array.length;

  // create pointers
  let i = 0;
  let j = 1;

  // while loop through array
  while (j !== array.length) {
    // check if value is unique
    if (array[i] !== array[j]) {
      ++i;
      array[i] = array[j];
    } else {
      ++j;
    }
  }
  
  return i + 1;
}

console.log(countUniqueValues([1,1,1,1,1,2]));
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2,-1,-1,0,1]));
