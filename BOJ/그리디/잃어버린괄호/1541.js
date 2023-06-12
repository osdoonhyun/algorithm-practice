const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const arr = input[0].split('-');

const sumArr = [];

for (let ele of arr) {
  sumArr.push(
    ele
      .split('+')
      .map(Number)
      .reduce((a, b) => a + b)
  );
}
const N = sumArr.length;

let sum = sumArr[0];

for (let i = 1; i < N; i++) {
  sum -= sumArr[i];
}

console.log(sum);
