const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const T = Number(input[0]);
const arr = [];
for (let i = 1; i <= T; i++) {
  arr.push(Number(input[i]));
}

let pibo = [0, 1];
while (pibo[pibo.length - 1] < 1e9) {
  pibo.push(pibo[pibo.length - 2] + pibo[pibo.length - 1]);
}

let answer = [];
for (let k = 0; k < T; k++) {
  let tmp = [];
  let n = arr[k];

  for (let i = pibo.length - 1; i > 0; i--) {
    if (n >= pibo[i]) {
      n -= pibo[i];
      tmp.push(pibo[i]);
    }
    if (n === 0) break;
  }
  answer.push(tmp.sort((a, b) => a - b));
}

for (let ele of answer) {
  console.log(ele.join(' '));
}
