let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = input[1].split(' ').map(Number);
// 5
// 20 10 35 30 7

// let minValue = Number.MIN_SAFE_INTEGER;
// let maxValue = Number.MAX_SAFE_INTEGER;

// for (let i = 0; i < n; i++) {
//   if (minValue > arr[i]) minValue = arr[i];
//   if (maxValue < arr[i]) maxValue = arr[i];
// }

console.log(minValue, maxValue);

let { minValue, maxValue } = arr.reduce((a, b) => {
  minValue: Math.min(a, b);
  maxValue: Math.max(a, b);
});

console.log(minValue + ' ' + maxValue);
