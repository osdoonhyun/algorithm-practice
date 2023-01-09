function solution(nums) {
  var answer = 0;
  const length = Math.floor(nums.length / 2);
  const hashMap = {};
  for (let num of nums) {
    hashMap[num] = hashMap[num] ? hashMap[num] + 1 : 1;
  }
  answer = Math.min(Object.keys(hashMap).length, length);

  return answer;
}
