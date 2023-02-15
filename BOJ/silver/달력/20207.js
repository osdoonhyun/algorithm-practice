const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [N, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');

const SnE = arr.map((input) => input.split(' ').map(Number));

function solution(n, arr) {}

console.log(solution(Number(N), SnE));
