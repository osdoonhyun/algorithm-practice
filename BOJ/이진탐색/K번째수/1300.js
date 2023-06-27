const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = Number(input[0]);
const k = Number(input[1]);

let start = 1;
let end = 16;

let result = 0;
while (start <= end) {
  let mid = parseInt((start + end) / 2);
  console.log('mid', mid);
  let total = 0;
  for (let i = 1; i <= N; i++) {
    total += Math.min(parseInt(mid / i), N);
    console.log(total);
  }
  if (total >= k) {
    result = mid;
    end = mid - 1;
  } else {
    start = mid + 1;
  }
}

console.log(result);

// 메모리 초과
// let arrA = Array.from(Array(N), () => Array(N).fill(null));
// let arrB = [];

// for (let i = 0; i < N; i++) {
//   for (let j = 0; j < N; j++) {
//     arrA[i][j] = (i + 1) * (j + 1);
//     arrB.push(arrA[i][j]);
//   }
// }

// arrB.sort((a, b) => a - b);

// console.log(arrB[k]);
