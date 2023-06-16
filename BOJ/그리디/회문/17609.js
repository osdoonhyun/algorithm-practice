const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const T = Number(input[0]);
const arr = [];
for (let i = 1; i <= T; i++) {
  arr.push(input[i]);
}
let notPalid = false;
let flag = false;

const makeSet = (word) => {
  flag = false;
  notPalid = false;
  const newSet = {};
  for (const ele of word) {
    newSet[ele] = newSet[ele] + 1 || 1;
  }
  return newSet;
};

const notPal = (word) => {
  const entries = Object.entries(makeSet(word));
  for (const [_, value] of entries) {
    if (value >= 3) {
      flag = true;
      break;
    }
  }
  const oddValueKey = entries
    .filter(([key, value]) => value % 2 === 1)
    .map(([key, value]) => key);

  if (oddValueKey.length > 1) {
    notPalid = true;
    return 2;
  } else {
    let charToRmove = oddValueKey[0];
    return word
      .split('')
      .filter((char) => char !== charToRmove)
      .join('');
  }
};

const checkPal = (word) => {
  const str = notPal(word);
  if (typeof str === Number) {
    console.log(str);
    return;
  }

  const strLength = str.length;
  // console.log(str, strLength);
  for (let i = 0; i < strLength / 2; i++) {
    console.log(str[i], str[strLength - i - 1]);
    if (str[i] !== str[strLength - i - 1]) {
      return 2;
    } else {
      if (flag) {
        return 1;
      } else {
        return 0;
      }
    }
  }
};

for (let i = 0; i < T; i++) {
  checkPal(arr[i]);
}
