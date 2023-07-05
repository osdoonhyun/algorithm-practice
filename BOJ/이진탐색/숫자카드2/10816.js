const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = Number(input[0]);
const arrN = input[1].split(' ').map(Number);
const M = Number(input[2]);
const arrM = input[3].split(' ').map(Number);

// 2트
function lowerBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (target <= arr[mid]) end = mid;
    else start = mid + 1;
  }
  return end;
}

function upperBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (target < arr[mid]) end = mid;
    else start = mid + 1;
  }
  return end;
}

function countBound(arr, left, rigth) {
  let rightIndex = upperBound(arr, rigth, 0, arr.length);
  let leftIndex = lowerBound(arr, left, 0, arr.length);
  return rightIndex - leftIndex;
}

arrN.sort((a, b) => a - b);

let answer = [];
for (const ele of arrM) {
  let cnt = countBound(arrN, ele, ele);

  answer.push(cnt);
}

console.log(answer.join(' '));

// 1트
// function lowerBound(arr, target, start, end) {
//   while (start < end) {
//     let mid = parseInt((start + end) / 2);
//     if (arr[mid] >= target) end = mid;
//     else start = mid + 1;
//   }
//   return end;
// }
// function upperBound(arr, target, start, end) {
//   while (start < end) {
//     let mid = parseInt((start + end) / 2);
//     if (target < arr[mid]) end = mid;
//     else start = mid + 1;
//   }
//   return end;
// }

// function countByRange(arr, LeftValue, RightValue) {
//   let rightIndex = upperBound(arr, RightValue, 0, arr.length);
//   let leftIndex = lowerBound(arr, LeftValue, 0, arr.length);
//   return rightIndex - leftIndex;
// }

// arrN.sort((a, b) => a - b);

// let answer = [];
// for (const ele of arrM) {
//   let cnt = countByRange(arrN, ele, ele);
//   answer.push(cnt);
// }

// console.log(answer.join(' '));
