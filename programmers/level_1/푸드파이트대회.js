function solution(food) {
  var answer = '';
  const arr = [];
  for (let i = 1; i < food.length; i++) {
    arr.push(String(i).repeat(Math.floor(food[i] / 2)));
  }
  answer = arr.join('') + 0 + arr.reverse().join('');
  return answer;
}

// '3'.repeat(3) => 333
