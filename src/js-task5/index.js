// Task 1

const arr1 = [1, 3, 2, 10, 18, 0, 3, 7, 1, 4, 2];

console.log(arr1.sort()[0]);
console.log(arr1.sort((a, b) => b - a)[0]);
console.log(arr1.reduce((sum, current) => sum + current));

// Task 2

const arr2 = [
  [1, 2, 0, 3, 6],
  [0, -3, 2, 1, 4],
  [5, 8, 7, 0, 1],
  [7, 2, 9, -1, 3],
  [5, 4, 0, 8, 7],
];

for (let i = 0, l = arr2.length; i < l; i += 1) {
  if (arr2[i][i] < 0) arr2[i][i] = 10;
  else arr2[i][i] = 20;
}

console.log(arr2);

// Task 3

function allocatesArray() {
  return new Array(20).fill(0).map((item, index) => index * 5);
}

console.log(allocatesArray());

// Task 4 & Task 5

// Task 4

function maximalSequence(arr) {
  const maxSequence = {
    count: 1,
    item: undefined,
  };

  let currentCount = 1;

  for (let i = 0, l = arr.length; i < l; i += 1) {
    if (arr[i] === arr[i + 1] && arr[i + 1] !== undefined) currentCount += 1;
    else {
      if (maxSequence.count <= currentCount) maxSequence.count = currentCount;
      currentCount = 1;
      maxSequence.item = arr[i];
    }
  }

  return new Array(maxSequence.count).fill(maxSequence.item);
}

// The first version for Task 4 & Task 5

function sequence1(arr, compareFunction) {
  const entries = [0];

  for (let i = 0, l = arr.length - 1; i < l; i += 1) {
    entries.push(compareFunction(arr[i], arr[i + 1]) ? entries[i] + 1 : 0);
  }

  const maxCount = Math.max(...entries);
  const maxPos = entries.indexOf(maxCount) - maxCount;

  return arr.slice(maxPos, maxPos + maxCount + 1);
}

// The second version for Task 4 & Task 5

function sequence2(arr, compareFunction) {
  let currentPos = 0;
  let currentCount = 1;
  let maxPos = 0;
  let maxCount = 1;

  for (let i = 0, l = arr.length - 1; i < l; i += 1) {
    if (compareFunction(arr[i], arr[i + 1])) currentCount += 1;
    else {
      currentPos = i + 1;
      currentCount = 1;
    }
    if (maxCount <= currentCount) {
      maxPos = currentPos;
      maxCount = currentCount;
    }
  }

  return arr.slice(maxPos, maxPos + maxCount);
}

const arr3 = [1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 2];
const arr4 = [2, 3, 2, 4, 6, 8, 1, 3, 5];

console.log(maximalSequence(arr3));
console.log(sequence1(arr3, (a, b) => a === b));
console.log(sequence1(arr4, (a, b) => b - a === 2));
console.log(sequence2(arr3, (a, b) => a === b));
console.log(sequence2(arr4, (a, b) => b - a === 2));

// Task 6

function mostFrequent(arr) {
  const sortedArr = arr.sort();
  let currentCount = 1;
  let maxItem = arr[0];
  let maxCount = 0;

  for (let i = 0, l = arr.length; i < l; i += 1) {
    if (sortedArr[i] === sortedArr[i + 1] && sortedArr[i + 1] !== undefined) currentCount += 1;
    else {
      currentCount = 1;
      if (maxCount <= currentCount) {
        maxCount = currentCount;
        maxItem = arr[i];
      }
    }
  }

  return maxItem;
}

console.log(mostFrequent([1, 2, 7, 4, 7, 1, 2, 7]));

// Task 7

function binarySearch(value, list) {
  let first = 0;
  let last = list.length - 1;
  let position = -1;
  let found = false;
  let middle;

  while (found === false && first <= last) {
    middle = Math.floor((first + last) / 2);
    if (list[middle] === value) {
      found = true;
      position = middle;
    } else if (list[middle] > value) {
      last = middle - 1;
    } else {
      first = middle + 1;
    }
  }
  return position;
}

console.log(binarySearch(11, [1, 2, 3, 3, 4, 5, 6, 7, 9, 9, 11, 12, 13, 17]));

// Task 8

function selectionSort(arr) {
  const sourceArr = arr;
  const sortedArr = [];
  let posOfMin = 0;

  while (sourceArr.length !== 0) {
    posOfMin = sourceArr.indexOf(Math.min(...sourceArr));
    sortedArr.push(sourceArr.splice(posOfMin, 1)[0]);
  }

  return sortedArr;
}

console.log(selectionSort([1, 3, 4, 1, 7, 8, 9, 0, 3, 2]));
