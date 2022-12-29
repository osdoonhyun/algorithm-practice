function solution(a, b) {
  if(a===b) return a;
  return a>b ? sum(a,b) : sum(b,a);
}

function sum(a,b){
  let total = 0;
  for(let i=b; i<= a; i++){
    total += i;
  }
  return total;
}

/* 다른 사람 풀이
function sum(a,b) {
  for(let i = Math.min(a,b); i<= Math.max(a,b); i++){
    total += i;
  }
  return total
}
*/