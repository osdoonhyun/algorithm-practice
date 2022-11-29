function solution(denum1, num1, denum2, num2) {
  var answer = [];
  let denum3,
    num3 = 0;
  denum3 = denum1 * num2 + denum2 * num1;
  num3 = num1 * num2;
  for (let i = num3; i > 1; i--) {
    if (denum3 % i === 0 && num3 % i === 0) {
      denum3 = denum3 / i;
      num3 = num3 / i;
    }
  }
  answer.push(denum3, num3);
  return answer;
}
