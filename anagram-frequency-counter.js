function validAnagram(str1, str2) {
  // return false if length is different
  if (str1.length !== str2.length)
    return false;

  // create counters
  const str1Counter = {};
  const str2Counter = {};

  // pass strings to counters
  for (let key1 of str1) {
    str1Counter[key1] = (str1Counter[key1] | 0) + 1;
  }

  for (let key2 of str2) {
    str2Counter[key2] = (str2Counter[key2] || 0) + 1;
  }

  // check if counters is equal
  for (let key in str1Counter) {
    if(!(key in str2Counter))
      return false;
    if(str1Counter[key] !== str2Counter[key])
      return false;
  }
  return true;
}

console.log(validAnagram('texttwisttime', 'timetwisttext'));
console.log(validAnagram('awesome', 'awesom'));
console.log(validAnagram('qwerty', 'qeywrt'));