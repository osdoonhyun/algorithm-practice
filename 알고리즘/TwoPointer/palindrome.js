// #1 추가 문자열 사용
// #2 Two Pointer 투포인터 활용

// function checkPalindrome(str) {
//   let reversed = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return str === reversed;
// }

function checkPalindrome(str) {
  const length = str.length;
  const middle = Math.floor(length / 2);
  for (let i = 0; i < middle; i++) {
    if (str.charAt(i) !== str.charAt(length - 1 - i)) return false;
  }
  return true;
}

console.log(checkPalindrome('abba'));
console.log(checkPalindrome('daivd'));
console.log(checkPalindrome('eye'));
