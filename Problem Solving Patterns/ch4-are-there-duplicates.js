function areThereDuplicates(...args) {
  // if below 2 args return false
  if (args.length < 2)
    return false;

  args.sort((a,b) => a > b);

  // for training, we will use pointers
  // create pointers
  let i = 0;
  let j = 1;
  // loop through arguments

  while (j < args.length) {
    // if there's some duplicate return true and end it here
    if (args[i] === args[j]) {
      return true;
    }
    
    i++;
    j++;
  }

  // return false if don't have duplicates
  return false;
}

console.log(areThereDuplicates(1,2,3));
console.log(areThereDuplicates(1,2,2));
console.log(areThereDuplicates('a', 'b', 'c', 'a'));
console.log(areThereDuplicates([]));
console.log(areThereDuplicates(1,2,3,2,5));