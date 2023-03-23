function FindMaxNumber(array) {
  let numberMax = 0;
  let i = 0;
  while (i < array.length) {
    let conOnes = 0;
    while (i < array.length && array[i] == 1) {
      conOnes++;
      i++;
    }
    numberMax = Math.max(numberMax, conOnes);
    i++;
  }
  console.log(numberMax);
}

FindMaxNumber([1,0,0,1,0,1,1]);
