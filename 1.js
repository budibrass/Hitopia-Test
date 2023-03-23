function FindMaxNumber(array) {
  let dataCheck = [];
  array.map((e) => {
    if (e !== 0 && e !== 1) {
      dataCheck.push(e);
    }
  });
  if (array.length > 10000 || dataCheck.length > 0) {
    console.log(
      `Maaf array yang di input hanya boleh angka 0 dan 1 dan tidak boleh melebihi 10.000 karakter`
    );
  } else {
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
}

FindMaxNumber([1, 0, 0, 1, 0, 1, 1]);
