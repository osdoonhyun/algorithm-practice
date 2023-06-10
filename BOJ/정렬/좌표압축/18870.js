const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

// const N = input[0];
const arr = input[1].split(' ').map(Number);

const setArr = [...new Set(arr)];
const sortedArr = setArr.sort((a, b) => a - b);

let myMap = new Map();
for (let i = 0; i < sortedArr.length; i++) {
  myMap.set(sortedArr[i], i);
}
console.log(myMap);
let answer = '';
for (let ele of arr) {
  answer += myMap.get(ele) + ' ';
}

console.log(answer);
