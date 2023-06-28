const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const T = Number(input[0]);

let answer = [];

let num = 1;
for (let i = 0; i < T; i++) {
  let N = Number(input[num]); // 5

  let arr = [];

  for (let j = 0; j < N; j++) {
    arr.push(input[j + num + 1].split(' ').map(Number));
  }
  arr.sort((a, b) => a[0] - b[0]);
  let minVal = Number.MAX_SAFE_INTEGER;
  let total = 0;
  for (let k = 0; k < N; k++) {
    if (arr[k][1] < minVal) {
      minVal = arr[k][1];
      total += 1;
    }
  }

  answer.push(total);
  num += N + 1;
}

console.log(answer.join('\n'));
