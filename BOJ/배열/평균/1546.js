const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = input[0];
const arr = input[1].split(' ').map(Number);

const max = Math.max(...arr);
// const max = arr.reduce((a,b) => Math.max(a,b))
for (let i = 0; i < n; i++) {
  arr[i] = (arr[i] / max) * 100;
}
const avg = arr.reduce((a, b) => a + b) / n;
console.log(avg);
