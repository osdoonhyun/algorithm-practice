function solution(k, m, score) {
  var answer = 0;
  const length = parseInt(score.length / m, 10);
  score.sort((a, b) => b - a);

  for (let i = 0; i < length; i++) {
    const arr = score.splice(0, m);
    answer += arr[m - 1] * m;
  }

  return answer;
}
