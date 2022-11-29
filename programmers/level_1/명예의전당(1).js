function solution(k, score) {
  var answer = [];
  let arr = [];
  const length = score.length;
  score.forEach((ele, idx) => {
    arr.push(ele);
    arr.sort((a, b) => a - b);
    if (idx < k) {
      let ans = arr[0];
      answer.push(ans);
    } else {
      let ans = arr[idx - k + 1];
      answer.push(ans);
    }
  });
  return answer;
}

// k	score	result
// 3	[10, 100, 20, 150, 1, 100, 200]	[10, 10, 10, 20, 20, 100, 100]
// 4	[0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]	[0, 0, 0, 0, 20, 40, 70, 70, 150, 300]
