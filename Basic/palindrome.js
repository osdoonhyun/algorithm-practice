// Palindrome : 앞으로 읽으나 뒤로 읽으나 같은 문자열

// 1. 추가 문자열 사용
function checkPalindrome(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return str === reversed;
}

// 2. Two Pointer
// 시작과 끝, 두 가지 포인터를 활용하여 문자열의 길이의 절반을 비교하여 판결.
// charAt() 함수는 문자열에서 특정 인덱스에 위치하는 유니코드 단일문자를 반환합니다.

function checkPalindromePointer(str) {
  const length = str.length;
  const middle = Math.floor(length / 2);
  for (let i = 0; i < middle; i++) {
    if (str.charAt(i) !== str.charAt(length - i - 1)) return false;
  }
  return true;
}

console.log(checkPalindrome('valid'));
console.log(checkPalindrome('david'));
console.log(checkPalindrome('eye'));

console.log(checkPalindromePointer('valid'));
console.log(checkPalindromePointer('david'));
console.log(checkPalindromePointer('eye'));
