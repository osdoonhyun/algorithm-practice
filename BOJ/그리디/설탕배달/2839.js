const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = Number(input[0]);

let answer = 0;
while (1) {
  if (N % 5 === 0) {
    answer += N / 5;
    break;
  }

  if (N < 0) {
    answer = -1;
    break;
  }

  N -= 3;
  answer += 1;
}

console.log(answer);
