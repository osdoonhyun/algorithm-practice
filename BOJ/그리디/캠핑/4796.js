const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

// P 일 중 L일 동안만 사용 가능

// V일 짜리 휴가 ( 1 < L < P < V)
// 캠핑 최대 사용 일 수

// [L, P, V] [5, 8, 20]
function solution(daysArr) {
  for (let i = 0; i < daysArr.length - 1; i++) {
    let [L, P, V] = daysArr[i].split(' ').map(Number);
    let answer = 0;

    while (V > P) {
      answer += L;
      V -= P;
    }

    // 나머지
    if (L > V) {
      answer += V;
    } else {
      answer += L;
    }

    console.log(`Case ${i + 1}: ${answer}`);
  }
}

solution(input);
