// Anagram : 두 단어의 글자 나열 순서는 다르지만 구성이 일치하는 경우
let strA = 'listen';
let strB = 'slient';

// 1. split(), sort(), join()
function isAnagramJs(A, B) {
  if (A.length !== B.length) return false;
  return A.split('').sort().join() === B.split('').sort().join();
}
console.log(isAnagramJs(strA, strB));

// 2. hashmap
function isAnagramHash(A, B) {
  if (A.length !== B.length) return false;
  const hashMap = {};
  for (const char of A) {
    hashMap[char] = hashMap[char] ? hashMap[char] + 1 : 1;
  }

  for (const char of B) {
    if (!hashMap[char]) return false;
    hashMap[char] -= 1;
  }
  return true;
}

console.log(isAnagramHash(strA, strB));

function isAnagram(strA, strB) {
  if (strA.length !== strB.length) return false;

  const map = new Map();

  for (let char of strA) {
    map.set(char, map.get(char) + 1 || 1);
  }

  for (let char of strB) {
    if (!map.get(char)) return false;
    map.set(char, map.get(char) - 1);
  }

  return true;
}
