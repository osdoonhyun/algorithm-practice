const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

// 2트
const N = Number(input[0]);
let arr = input[1].split(' ').map(Number);

let setArr = [...new Set(arr)];
let sortedSet = setArr.sort((a, b) => a - b);
let myMap = new Map();
for (let i = 0; i < N; i++) {
  myMap.set(sortedSet[i], i);
}

let answer = [];
for (const ele of arr) {
  answer.push(myMap.get(ele));
}
console.log(answer.join(' '));

// 1트
// const N = input[0];
// const arr = input[1].split(' ').map(Number);

// const setArr = [...new Set(arr)];
// const sortedArr = setArr.sort((a, b) => a - b);

// let myMap = new Map();
// for (let i = 0; i < sortedArr.length; i++) {
//   myMap.set(sortedArr[i], i);
// }
// console.log(myMap);
// let answer = '';
// for (let ele of arr) {
//   answer += myMap.get(ele) + ' ';
// }

// console.log(answer);
