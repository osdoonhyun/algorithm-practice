function solution(s) {
  if (s[0] === ')') return false;
  const stack = [];
  for (let ele of s) {
    if (ele === '(') stack.push(ele);
    if (ele === ')') {
      const last = stack.pop();
      if (last !== '(' && ele === ')') return false;
    }
  }
  return stack.length === 0;
}
