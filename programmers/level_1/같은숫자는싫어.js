function solution(arr) {
  var answer = [];
  answer.push(arr[0]);
  for (let ele of arr) {
    if (answer[answer.length - 1] !== ele) answer.push(ele);
  }
  return answer;
}
