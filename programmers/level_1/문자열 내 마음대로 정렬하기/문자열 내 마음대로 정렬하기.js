function solution(strings, n) {
  let answer = strings.sort((a, b) => {
    a.charCodeAt(n) - b.charCodeAt(n) === 0
      ? a > b
        ? 1
        : -1
      : a.charCodeAt(n) - b.charCodeAt(n);
  });
  return answer;
}
