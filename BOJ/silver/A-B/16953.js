const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [inputs] = fs.readFileSync(filePath).toString().trim().split('\n');

let [A, B] = inputs.split(' ').map(Number);

console.log('A B', A, B);

function solution(A, B) {
  let cnt = 1;
  while (A !== B) {
    if (A > B) return -1;

    if (B % 2 === 0) B /= 2;
    else {
      console.log('B', B);
      B = [...String(B)];
      B.pop();
      B = Number(B.join());
    }
    cnt++;
  }
  return cnt;
}

console.log(solution(A, B));
