const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = input[0];
const arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(Number(input[i]));
}

const sortedArr = arr.sort((a, b) => a - b);

const answer = '';
for (let ele of sortedArr) {
  answer += ele + '\n';
}

console.log(answer);
