const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let [N, K] = input[0].split(' ').map(Number);

const sum = (num) => {
  return ((1 + num) * num) / 2;
};

if (N < sum(K)) {
  console.log(-1);
} else {
  const sumK = sum(K);
  N -= sumK;
  if (N % K === 0) console.log(K - 1);
  else console.log(K);
}
