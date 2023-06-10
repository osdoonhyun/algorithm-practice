const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, K] = input[0].split(' ');

const arr = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
console.log(arr[K - 1]);
