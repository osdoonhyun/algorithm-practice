function solution(c, arr) {
  let length = arr.length;
  let answer = [];

  function DFS(level, sum) {
    if (sum > c) return;
    if (level === length) {
      if (sum <= c) {
        answer.push(sum);
        //answer = Math.max(answer,sum);
      }
    } else {
      DFS(level + 1, sum + arr[level]);
      DFS(level + 1, sum);
    }
  }

  DFS(0, 0);
  return Math.max(...answer);
}

let arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr));

// answer에 푸쉬해서 Math.max(...arr) 하는거랑 answer = Math.max(answer,sum) 두 가지 방법
