let a = [1, 3, 15, 8, 6];
a.forEach((e, i) => {
  console.log(e, i);
});

const str = 'Hello World';
const splitStr = str.split(' '); // ['Hello','World']
const joinStr = splitStr.join(' ');
const joinAStr = splitStr.join('A'); // HelloAWorld

let number = [1, 3, 15, 8, 6];
number.sort((a, b) => a - b); // 오름차순
number.sort((a, b) => b - a); // 내림차순

const 짝수 = number.filter((num) => num % 2 === 0);

const totalSum = number.reduce((total, ele) => total + ele, 0); // 초기값은 0

// DFS

const graph = {
  1: [2, 3],
  2: [4],
  3: [4, 5],
  4: [],
  5: [],
};

const dfs = (here, visited = new Set()) => {
  if (visited.has(here)) return;
  visited.add(here);
  console.log(here);
  graph[here].forEach((e) => dfs(e, visited));
};

dfs(1); // 1 2 4 3 5

// 이진탐색 O(logN)
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let low = 0;
let high = a.length - 1;
const target = 3;
while (low <= high) {
  let mid = Math.floor((low + high) / 2);
  if (a[mid] === target) {
    console.log(target);
    return;
  } else if (a[mid] > target) {
    high = mid - 1;
  } else {
    low = mid + 1;
  }
}

// 배열 생성
let kkk = Array(50).fill(0);
let kkkk = Array(5)
  .fill()
  .map((e) => Array(5).fill(1));

// DP 피보나치 
fibo(n)= fibo(n-1)+fibo(n-2)