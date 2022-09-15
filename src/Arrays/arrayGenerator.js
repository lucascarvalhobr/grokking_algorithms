 function generateLargeNumberArray(length) {
  let array, i;
  for (array = [], i = 0; i < length; ++i) array[i] = i;
  return array;
}

export default generateLargeNumberArray;
