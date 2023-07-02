const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

// 2트
const N = Number(input[0]);
let arr = input[1].split(' ').map(Number);
let arrow = Array.from({ length: N }, () => 0);

let answer = 0;
for (let ele of arr) {
  if (arrow[ele] > 0) {
    arrow[ele] -= 1;
    arrow[ele - 1] += 1;
  } else {
    answer += 1;
    arrow[ele - 1] += 1;
  }
}

console.log(answer);

// 1트
// const N = Number(input[0]);
// let H = input[1].split(' ').map(Number);

// let arrow = Array.from({ length: N }, () => 0);
// let answer = 0;

// for (let ele of H) {
//   if (arrow[ele] > 0) {
//     arrow[ele] -= 1;
//     arrow[ele - 1] += 1;
//   } else {
//     arrow[ele - 1] += 1;
//     answer += 1;
//   }
// }

// console.log(answer);

// 내 풀이 -> 시간초과
// let cnt = 0;
// while (H.length > 0) {
//   let maxH = Math.max(...H);
//   let lengthH = H.length;
//   let startH = H.indexOf(maxH);

//   let tempArr = [];
//   for (let i = startH; i < lengthH; i++) {
//     let arrowH = H.indexOf(maxH);

//     if (H[i] === H[arrowH]) {
//       tempArr.push(arrowH);
//       maxH -= 1;
//     }
//   }
//   H = H.filter((_, index) => !tempArr.includes(index));

//   cnt += 1;
// }

// console.log(cnt);
