function sameFrequency(num1, num2) {
  // create failsafe to different length of numbers
  const number1 = num1.toString();
  const number2 = num2.toString();
  if (number1.length !== number2.length)
    return false;

  const counter1 = {};
  const counter2 = {};

  // pass to counters
  for (let key1 of number1) {
    counter1[key1] = (counter1[key1] || 0) + 1;
  }

  for (let key2 of number2) {
    counter2[key2] = (counter2[key2] || 0) + 1;
  }

  // check frequency of numbers between counters
  for(let key in counter1) {
    if (!(key in counter2)) {
      return false;
    }

    if (counter1[key] !== counter2[key]) {
      return false;
    }
  }

  return true;
}

console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22, 222));