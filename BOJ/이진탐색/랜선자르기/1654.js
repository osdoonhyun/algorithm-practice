const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [K, N] = input[0].split(' ').map(Number);
const arr = [];
for (let i = 1; i <= K; i++) {
  arr.push(Number(input[i]));
}

let start = 1;
let end = Math.max(...arr);

let answer = 0;
while (start <= end) {
  let total = 0;
  let mid = parseInt((start + end) / 2);

  for (const ele of arr) {
    total += parseInt(ele / mid);
  }

  if (total < N) {
    end = mid - 1;
  } else {
    start = mid + 1;
    answer = mid;
  }
}
console.log(answer);
