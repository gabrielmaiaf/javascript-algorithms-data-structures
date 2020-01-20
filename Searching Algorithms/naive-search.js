function naiveStringSearch(long, str) {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (str[j] !== long[i+j])
        break;

      if (j === str.length -1)
        count++;
    }
  }

  return count;
}

console.log(naiveStringSearch('lorie loled', 'lol'));