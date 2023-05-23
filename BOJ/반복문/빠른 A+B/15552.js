let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let testCase = Number(input[0]);
let answer = '';

for (let i = 1; i <= testCase; i++) {
  let data = input[i].split(' ');
  let a = Number(data[0]);
  let b = Number(data[1]);
  answer += a + b + '\n';
}

console.log(answer);

// 빠르게 출력하기 위해 하나의 문자열 변수에 정보를 담은 뒤 한번에 문자열 출력
// 한 줄을 출력할 때마다 console.log()를 실행하면 많은 시간 소요됨
