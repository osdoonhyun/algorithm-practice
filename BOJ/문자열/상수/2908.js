const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

console.log(input);
const [a, b] = input[0].split(' ');
console.log(a, b);
let A = '';
let B = '';
console.log(a.charAt(1));
for (let i = 2; i >= 0; i--) {
  A += a.charAt(i);
  B += b.charAt(i);
}

console.log(Math.max(Number(A), Number(B)));
