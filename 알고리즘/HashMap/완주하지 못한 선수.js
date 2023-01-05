function solution(participant, completion) {
  let hashMap = {};
  for (let hash of completion) {
    hashMap[hash] = hashMap[hash] ? hashMap[hash] + 1 : 1;
  }

  for (let part of participant) {
    if (!hashMap[part]) return part;
    hashMap[part]--;
  }
}
console.log(solution(['leo', 'kiki', 'eden'], ['eden', 'kiki']));

// hashMap[hash] = hashMap[hash] ? hashMap[hash]+1 : 1; 에서
// hashMap[hash]++ 로 쓰면 안된다.
