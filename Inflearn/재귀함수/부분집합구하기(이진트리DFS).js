function solution(n) {
  const arr = [0, 0, 0, 0];
  function DFS(L) {
    if (L === n + 1) {
      console.log();
    } else {
      DFS(L + 1);
    }
  }

  DFS(1);
  return answer;
}

console.log(solution(3));
