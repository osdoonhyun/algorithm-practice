const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
let arr = Array.from({ length: N }, (_, index) => index + 1); // 순열 계산하고자 하는 원소가 담긴 배열
let visited = new Array(N).fill(false);
let selected = [];

let answer = '';
function dfs(arr, depth) {
  if (depth === M) {
    let result = [];
    for (const ele of selected) result.push(arr[ele]);
    answer = result.join(' ');
    answer += '\n';
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    if (visited[i]) continue;
    selected.push(i);
    visited[i] = true;
    dfs(arr, depth + 1);
    selected.pop();
    visited[i] = false;
  }
}

dfs(arr, 0);
console.log(answer);
