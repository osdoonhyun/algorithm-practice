const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [row, col] = input[0].split(' ').map((e) => +e);
const arr = input[1].split(' ').map((e) => +e);

function solution(row, col, arr) {
  console.log(row, col, arr);
  let answer = 0;
  const length = arr.length;
  let leftArr = Array.from({ length: length }, () => 0);
  let rightArr = Array.from({ length: length }, () => 0);
  console.log(leftArr, rightArr);
  const leftStart = arr[0];
  const rightStart = arr[length - 1];

  console.log('시작', leftStart, rightStart);

  for (let i = 0; i < length; i++) {
    if (leftStart > arr[i]) {
      leftArr[i] = leftStart - arr[i];
    }
  }
  console.log('left', leftArr);

  for (let i = length - 1; i >= 0; i--) {
    if (rightStart > arr[i]) {
      rightArr[i] = rightStart - arr[i];
    }
  }
  console.log('right', rightArr);

  for (let i = 0; i < length; i++) {
    answer += Math.min(leftArr[i], rightArr[i]);
  }
  return answer;
}

console.log(solution(row, col, arr));

// console.log(solution(row, col, arr));
