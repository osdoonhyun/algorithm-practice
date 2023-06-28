const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

// 2트
let [N, K] = input[0].split(' ').map(Number);

let arr = [];
for (let i = 1; i <= N; i++) {
  arr.push(Number(input[i]));
}

let total = 0;
for (let i = N - 1; i >= 0; i--) {
  if (K <= 0) break;
  if (K / arr[i] >= 1) {
    let temp = parseInt(K / arr[i]);
    total += temp;
    K %= arr[i] * temp;
  }
}
console.log(total);
// 1트
// let [N, K] = input[0].split(' ').map(Number);

// const arr = [];
// for (let i = 1; i <= N; i++) {
//   arr.push(input[i]);
// }

// arr.sort((a, b) => b - a);
// let answer = 0;

// for (let i = 0; i < N; i++) {
//   answer += parseInt(K / arr[i]);
//   console.log('화폐수', arr[i], answer);
//   K %= arr[i];
//   console.log('남은 돈', K);
// }

// console.log(answer);
