const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let [A, B] = input[0].split(' ').map(Number);

let answer = 1;
let flag = false;

while (1) {
  if (A > B) {
    flag = false;
    break;
  } else if (A === B) {
    flag = true;
    break;
  }

  if (B % 10 === 1) {
    B = parseInt(B / 10);
    answer += 1;
  } else {
    B /= 2;
    answer += 1;
  }
}

if (flag) {
  console.log(answer);
} else {
  console.log(-1);
}
