const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = input[0];
const arr = [];
for (let i = 1; i <= N; i++) {
  arr.push(input[i].split(' '));
}

arr.sort((a, b) => {
  if (a[0] === b[0]) {
    return 0;
  }
  return Number(a[0]) - Number(b[0]);
});

let answer = '';
for (let ele of arr) {
  answer += ele[0] + ' ' + ele[1] + '\n';
}

console.log(answer);
