const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

let data = input.map(Number);
let max = Math.max(...data);
let maxIndex = input.indexOf(data) + 1;

console.log(max);
console.log(maxIndex);
