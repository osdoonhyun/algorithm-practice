const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let [N, M] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let h = 0;
let start = 1;
let end = Math.max(...arr);

while (start <= end) {
  let total = 0;
  let mid = parseInt((start + end) / 2);

  for (const ele of arr) {
    if (ele - mid > 0) {
      total += ele - mid;
    }
  }
  if (total >= M) {
    start = mid + 1;
    h = mid;
  } else {
    end = mid - 1;
  }
}

console.log(h);
