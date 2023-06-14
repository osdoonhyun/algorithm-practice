const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = input[0];
const lengthArr = input[1].split(' ').map(Number);
const priceArr = input[2].split(' ').map(Number);

let answer = 0;
let minPrice = Number.MAX_SAFE_INTEGER;
for (let i = 0; i < N - 1; i++) {
  if (minPrice > priceArr[i]) {
    minPrice = priceArr[i];
  }
  answer += minPrice * lengthArr[i];
}

console.log(answer);
