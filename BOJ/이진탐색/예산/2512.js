const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

// 2트
const N = Number(input[0]);
const arr = input[1].split(' ').map(Number);
const M = Number(input[2]);

let start = N;
let end = Math.max(...arr);

while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let sum = 0;

  for (const budget of arr) {
    if (mid >= budget) {
      sum += budget;
    } else {
      sum += mid;
    }
  }

  if (sum > M) {
    end = mid - 1;
  } else {
    start = mid + 1;
    answer = mid;
  }
}

console.log(answer);

// 1트
// const N = Number(input[0]);
// const arr = input[1].split(' ').map(Number);
// let M = Number(input[2]);

// let start = 1;
// let end = Math.max(...arr);

// let result = 0;
// while (start <= end) {
//   let mid = parseInt((start + end) / 2);
//   let total = 0;

//   for (const ele of arr) {
//     total += Math.min(mid, ele);
//   }
//   if (total <= M) {
//     result = mid;
//     start = mid + 1;
//   } else {
//     end = mid - 1;
//   }
// }
// console.log(result);
