import generateLargeNumberArray from "../Arrays/arrayGenerator.js";

var largeArray = generateLargeNumberArray(10000000);

const mySecretNumber = 100;

simpleSearch();
binarySearch();

function binarySearch() {
  let limit = largeArray.length;
  let currentIndex = largeArray.length / 2 - 1;
  let attempts = 0;

  while (true) {
    attempts++;
    let value = largeArray[currentIndex];
    if (value === mySecretNumber) break;
    if (value < mySecretNumber) {
      currentIndex = Math.floor((limit + currentIndex) / 2);
    } else {
      limit = currentIndex;
      currentIndex = Math.floor(currentIndex / 2);
    }
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
