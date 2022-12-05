function solution(k, m, score) {
  let answer = 0;
  let idx = m - 1;
  const length = Math.floor(score.length / m);
  score.sort((a, b) => b - a);

  for (let i = 0; i < length; i++) {
    answer += score[idx] * m;
    idx += m;
  }

  return answer;
}
