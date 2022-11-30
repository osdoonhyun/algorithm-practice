function solution(sizes) {
  var answer = 0;
  const rotated = sizes.map(([w, h]) => (w < h ? [h, w] : [w, h]));
  let max = [Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];

  rotated.forEach(([w, h]) => {
    max[0] = Math.max(w, max[0]);
    max[1] = Math.max(h, max[1]);
  });

  answer = max[0] * max[1];
  return answer;
}
