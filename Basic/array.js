// Array 중복 제거
let nums = [1, 2, 4, 6, 6, 7, 2, 2, 5];

// 1. new Set()
let uniqueSetNums = [...new Set(nums)];
console.log(uniqueSetNums); // [ 1, 2, 4, 6, 7, 5 ]

// 2. indexOf()
let uniqueIndexOfNums = nums.filter((num, index) => {
  return nums.indexOf(num) === index;
});
console.log(uniqueIndexOfNums);

// 3. caching/frequency map
function uniqueMap(arr) {
  const uniqueObject = {};
  const result = [];
  for (let ele of arr) {
    if (!uniqueObject[ele]) {
      result.push(ele);
    }
    uniqueObject[ele] = ele;
  }
  return result;
}
console.log(uniqueMap(nums));
