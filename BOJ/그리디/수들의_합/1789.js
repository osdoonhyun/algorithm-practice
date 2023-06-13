const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const S = Number(input[0]);
let N = 1;
let sum = N;
let flag = false;

while (1) {
  if (S === sum) {
    flag = true;
    break;
  } else if (S < sum) {
    flag = true;
    N -= 1;
    break;
  }

  N += 1;
  sum += N;
}

if (flag) {
  console.log(N);
}
