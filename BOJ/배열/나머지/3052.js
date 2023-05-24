const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const arr = input.map(Number);
const mySet = new Set();
for (let i = 0; i < arr.length; i++) {
  mySet.add(arr[i] % 42);
}

console.log(mySet.size);
