// DP 문제

// 1. dp 배열 생성
// 2. 1계단, 2계단 미리 저장
// 3. 반복문 -> dp 테이블 만들기
// 4. formulat 적용시키기
// 5. 최종 결과값 리턴

function climbingStairs(n) {
  if (n === 0) return 0;

  let dp = new Array(n + 1);

  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}

console.log(climbingStairs(4)); //5
