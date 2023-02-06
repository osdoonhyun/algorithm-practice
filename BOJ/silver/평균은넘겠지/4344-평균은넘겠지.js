// const fs = require('fs');
// const filePath =
//   process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// console.log(input);

const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/4344.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const inputCount = Number(input[0]);
const testCases = [];

for (let i = 1; i <= inputCount; i++) {
  const temp = input[i].split(' ').map(Number);
  const testCase = {
    N: temp[0],
    scores: temp.slice(1),
  };

  testCases.push(testCase);
}

console.log(testCases);
