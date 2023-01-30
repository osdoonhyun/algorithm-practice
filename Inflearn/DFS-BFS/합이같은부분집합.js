function solution(arr) {
  const total = arr.reduce(function add(sum, currValue) {
    return sum + currValue;
  }, 0);
  const length = arr.length;
  let answer = 'NO';
  let flag = 0;

  console.log('total', total);
  function DFS(level, sum) {
    if (flag) return;
    if (level === length) {
      if (total - sum === sum) {
        answer = 'YES';
        flag = 1;
        // return;
      }
    } else {
      DFS(level + 1, sum + arr[level]);
      DFS(level + 1, sum);
    }

    if (sum === total / 2) return 'YES';
  }

  DFS(0, 0);
  return answer;
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));

// if문 안에서 답을 찾았을 때 리턴하면 호출된 함수만 종료되고, 스택에 남아 있는 함수들은 종료되지 않고 스택에서 팝되어 다시 재귀를 호출하게 됩니다. (16번째 줄에서 return);
// 정답코드대로 하면 스택에 남아 있는 함수들만 호출되고 다른 재귀호출은 없이 끝납니다.
