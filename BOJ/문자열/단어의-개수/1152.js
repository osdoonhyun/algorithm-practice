const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const arr = input[0].trim().split(' ');
if (arr === '') console.log(0);
else console.log(arr.length);
