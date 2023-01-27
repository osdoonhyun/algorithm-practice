/**
 * @param {string[]} strs
 * @return {string}
 */

const longestCommonPrefix = function (strs) {
  let prefix = '';

  if (strs === null || strs.length === 0) return false;

  for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i];

    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== char) return prefix;
    }

    //build prefix
    prefix = prefix + char;
  }

  return prefix;
};

const strArr = ['flower', 'flag', 'flight'];
console.log(longestCommonPrefix(strArr)); // return 'fl'
