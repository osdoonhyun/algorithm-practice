const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const arr = input[0].split('').sort((a, b) => b - a);

let answer = '';
for (let ele of arr) {
  answer += ele;
}

console.log(answer);
