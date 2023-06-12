const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = Number(input[0]);
const arr = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

let temp = 0;
let sum = 0;
for (let i = 0; i < N; i++) {
  temp += arr[i];
  sum += temp;
}

console.log(sum);
