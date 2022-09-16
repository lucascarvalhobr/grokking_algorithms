import generateLargeNumberArray from "../Arrays/arrayGenerator.js";

var largeArray = generateLargeNumberArray(10);

const mySecretNumber = 2;

simpleSearch();
binarySearch();

function binarySearch() {
  let right = largeArray.length - 1;
  let mid = 0,
    left = 0;
  let attempts = 1;

  while (true) {
    mid = Math.round((right + left) / 2);

    let value = largeArray[mid];
    if (value === mySecretNumber) break;
    if (value < mySecretNumber) {
      left = mid;
    } else {
      right = mid;
    }
    
    attempts++;
  }

  console.log("Total attempts with binary search: " + attempts);
}

function simpleSearch() {
  let attempts = 0;

  while (attempts < largeArray.length) {
    if (attempts === mySecretNumber) break;
    attempts++;
  }

  console.log("Total attempts with simple search: " + attempts);
}
