const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = input[0];
const arr = [];
for (let i = 1; i <= N; i++) {
  arr.push(input[i].split(' ').map(Number));
}

for (let ele of arr) {
  console.log('eee', ele);
}
arr.sort((a, b) => {
  if (a[0] === b[0]) {
    return a[1] - b[1];
  }
  return a[0] - b[0];
});

let answer = '';

for (let ele of arr) {
  answer += ele[0] + ' ' + ele[1] + '\n';
}

console.log(answer);

arr.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  }
  return a[1] - b[1];
});

let answer2 = '';
for (let ele of arr) {
  answer2 += ele[0] + ' ' + ele[1] + '\n';
}

console.log(answer2);
