// 나중에 다시 풀기
const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [length, width, height] = input[0].split(' ').map(Number);
const N = Number(input[1]);
const cubeArr = [];

for (let i = 0; i < N; i++) {
  cubeArr.push(input[i + 2].split(' ').map(Number));
}
console.log(cubeArr);

const volume = length * width * height;
console.log('voluem', volume);
let cubeVolume = 0;
for (let i = 0; i < cubeArr.length; i++) {
  cubeVolume += Math.pow(Math.pow(2, cubeArr[i][0]), 3) * cubeArr[i][1];
  console.log('cube', cubeVolume);
}

if (volume > cubeVolume) {
  console.log(-1);
  return;
}
