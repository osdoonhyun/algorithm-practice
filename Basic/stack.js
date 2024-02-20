/**
 * 올바른 괄호 (Valid Parentheses)
 * 괄호가 올바르게 Paired 되었다는 것은 괄호가 열렸으면 반드시 짝지어서 닫혀야 한다는 말
 */

function validParentheses(input) {
  let stack = [];

  for (const char of input) {
    if (char === '{' || char === '[' || char === '[') {
      stack.push(char);
    } else {
      const lastStr = stack.pop();
      if (
        (char === '}' && lastStr !== '{') ||
        (char === ']' && lastStr !== '[') ||
        (char === ')' && lastStr !== '(')
      ) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(validParentheses('[({{}})]'));
console.log(validParentheses('[]{}(({[]}))'));
console.log(validParentheses('[](){(}()}'));
console.log(validParentheses('[]()'));
