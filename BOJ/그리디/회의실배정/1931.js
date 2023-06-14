const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = Number(input[0]);
const arr = [];

for (let i = 1; i <= N; i++) {
  arr.push(input[i].split(' ').map(Number));
}

arr.sort((a, b) => {
  if (a[1] !== b[1]) {
    return a[1] - b[1];
  }
  return a[0] - b[0];
});

let minS = arr[0][0];
let minE = arr[0][1];
let answer = 1;

for (let i = 1; i < arr.length; i++) {
  if (minE <= arr[i][0]) {
    minS = arr[i][0];
    minE = arr[i][1];
    answer += 1;
  }
}

console.log(answer);
