// 올바른 괄호 -> stack 이용해서 풀기
function validParentheses(input) {
  const stack = [];
  for (let ele of input) {
    if (ele === '{' || ele === '[' || ele === '(') {
      stack.push(ele);
    } else {
      const last = stack.pop();
      if (
        (ele === '}' && last !== '{') ||
        (ele === ']' && last !== '[') ||
        (ele === ')' && last !== '(')
      )
        return false;
    }
  }

  return stack.length;
}

console.log(validParentheses('[{}()]')); //true
console.log(validParentheses('[{()]')); // false
console.log(validParentheses('{([]())}')); // true
