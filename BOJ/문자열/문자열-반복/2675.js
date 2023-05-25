const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const T = input[0];
const arr = [];
for (let i = 1; i <= T; i++) {
  const temp = input[i].split(' ');
  const n = Number(temp[0]);
  let tmp = '';
  for (let x of temp[1]) {
    for (let i = 0; i < n; i++) {
      tmp += x;
    }
  }
  arr.push(tmp);
}

console.log(arr);
