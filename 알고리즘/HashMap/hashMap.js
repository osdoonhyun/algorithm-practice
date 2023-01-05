const stringA = 'listen';
const stringB = 'silent';
const strA = 'ccaa';
const strB = 'accc';

function isAnagram(strA, strB) {
  if (strA.length !== strB.length) return false;

  const hashMap = {};
  for (const char of strA) {
    hashMap[char] = hashMap[char] ? hashMap[char] + 1 : 1;
  }

  for (const char of strB) {
    if (!hashMap[char]) return false;
    hashMap[char] - 1;
  }
  return true;
}

console.log(isAnagram(strA, strB));
