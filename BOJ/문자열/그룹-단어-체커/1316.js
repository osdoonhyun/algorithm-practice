const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = input[0];

function check(s) {
  const mySet = new Set(s[0]);
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] !== s[i + 1]) {
      if (mySet.has(s[i + 1])) return false;
      else mySet.add(s[i + 1]);
    }
  }
  return true;
}

let cnt = 0;
for (let i = 1; i <= n; i++) {
  if (typeof input[i] !== 'string') return;
  if (check(input[i])) cnt += 1;
}

console.log(cnt);
