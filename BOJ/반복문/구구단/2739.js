let fs = require('fs');
let input = fs.readFileSync('/dev/stin').toString().split('\n');

// 문자열을 수로 변환할 때 parseInt에 비해 Number의 속도가 더 빠르게 동작
let n = Number(input[0]);

for (let i = 1; i <= 9; i++) {
  console.log(`${n} * ${i} = ${n * i}`);
}
