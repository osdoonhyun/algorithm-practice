//가장 긴 증가하는 부분수열(LIS)
const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = Number(input[0]);
let arr = input[1].split(' ').map(Number);

arr.reverse();

let answer = [0];

// function lowerBound(arr, target, start, end) {
//   while (start < end) {
//     let mid = parseInt((start + end) / 2);
//     if (target <= arr[mid]) {
//       end = mid;
//     } else {
//       start = mid + 1;
//     }
//   }
//   return end;
// }

function lowerBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }
  return end;
}

for (const ele of arr) {
  if (answer[answer.length - 1] < ele) {
    answer.push(ele);
  } else {
    let index = lowerBound(answer, ele, 0, answer.length);
    answer[index] = ele;
  }
}

console.log(N - answer.length + 1);
