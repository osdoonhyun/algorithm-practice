function solution(a, b) {
  let temp = 0;
  for(let i=1; i<a;i++){
    temp += getMon(i);
  }  
  temp += b ;
  let day = temp % 7
  return getDay(day);
}

function getMon(a) {
  const thirtyOne = [1,3,5,7,8,10,12];
  const thirty = [4,6,9,11];

  if (thirtyOne.includes(a)) return 31;
  else if(thirty.includes(a)) return 30;
  return 29;
}

function getDay(b) {
  switch(b) {
    case 3:
      return 'SUN';
    case 4:
      return 'MON';
    case 5:
      return 'TUE';
    case 6:
      return 'WED';
    case 0:
      return 'THU';
    case 1:
      return 'FRI';
    case 2:
      return 'SAT';
  }
}

console.log(solution(5,24));