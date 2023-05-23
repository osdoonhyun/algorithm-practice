// fs 모듈을 이용해 파일 전체를 읽어와 문자열로 저장하기
// 입력 예시) 1 2
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// ["1", "2"]
let line = input[0].split(' ');

let a = pareseInt(line[0]); // 1
let b = pareseInt(line[1]); // 2

console.log(a + b); // 3
