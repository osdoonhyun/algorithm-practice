const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = Number(input[0]);

for (let i = 1; i <= n; i++) {
  const temp = input[i].split(' ').map(Number);
  const n = temp[0];
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += temp[i];
  }
  const avg = sum / n;
  let cnt = 0;
  for (let i = 1; i <= n; i++) {
    if (temp[i] > avg) {
      cnt += 1;
    }
  }
  console.log(`${((cnt / n) * 100).toFixed(3)}%`);
}
