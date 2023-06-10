const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = input[0];
let arr = [];
for (let i = 1; i <= N; i++) {
  arr.push(input[i]);
}

arr = [...new Set(arr)];

arr.sort((a, b) => {
  if (a.length === b.length) {
    if (a < b) return -1;
    else if (a > b) return 1;
    else return 0;
  }
  return a.length - b.length;
});

let answer = '';
for (let ele of arr) {
  answer += ele + '\n';
}

console.log(answer);
