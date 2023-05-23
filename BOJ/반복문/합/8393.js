let fs = require('fs');
let input = fs.readFileSync('/dev/stin').toString().split('\n');

// 문자열을 수로 변환할 때 parseInt에 비해 Number의 속도가 더 빠르게 동작
let n = Number(input[0]);

// 방법 1
const sum = 0;
for (let i = 1; i <= n; i++) {
  sum += i;
}
console.log(sum);

// 방법 2
const arr = Array.from({ length: n }, (_, index) => index + 1);
const arrSum = arr.reduce((total, current) => total + current, 0);
console.log(arrSum);

// 성능 상의 차이는 없으나, 보다 복잡한 로직이나 다양한 배열 연산이 필요한 경우 배열 메서드를 사용하는 방법이 유용하다.
