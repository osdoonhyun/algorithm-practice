const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const arr = input[0].split(' ').map(Number);
const aar = arr.sort((a, b) => a - b).join(' ');

console.log(aar);
