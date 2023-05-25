const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = input[0];
const arr = input[1].split('').map(Number);
console.log(arr);

let sum = 0;
for (let i = 0; i < n; i++) {
  sum += arr[i];
}

console.log(sum);
