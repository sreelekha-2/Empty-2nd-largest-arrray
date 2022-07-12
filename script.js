console.log('Hello!');

//1.check array or not
const arr = [2, 5, 'mango', 20.5, false];
if (Array.isArray(arr)) {
  console.log(true);
} else {
  console.log(false);
}

if (arr.constructor === Array) {
  console.log(true);
} else {
  console.log(false);
}

//2.empty an array using shift method
const arr2 = [1, 2, 3, 4, 5, 10, 15];
const emptyArr = arr2.reduce(
  (acc, curr) => {
    acc.shift(curr);
    return acc;
  },
  [...arr2]
);
console.log(emptyArr);

//2.using pop
const length = arr2.length;
for (let i = 0; i < length; i++) {
  arr2.pop();
}
console.log(arr2);

//3.2nd largest element in an array
const arr3 = [10, 7, 3, 25, 25, 9, 20, 15, 20];
let max = arr3[0];
let secMax = 0;
for (let j = 0; j < arr3.length; j++) {
  if (arr3[j] > max) {
    max = arr3[j];
  }
  if (arr3[j] > secMax && arr3[j] !== max) {
    secMax = arr3[j];
  }
}
console.log(max);
console.log(secMax);

//4.print elements in the given range
const arr4 = [1, 3, 4, 9, 11, 15, 24, 27, 31, 35, 53, 68, 71, 77, 84, 98];

let startRange = 0;
let endRange = 10;
for (let c = 0; c < 10; c++) {
  const result = arr4.filter((item) => item > startRange && item <= endRange);
  console.log(
    `${result.length} elements from ${startRange} to ${endRange} : ${result}`
  );
  startRange = startRange + 10;
  endRange = endRange + 10;
}
