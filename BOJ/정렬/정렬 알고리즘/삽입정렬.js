/**
 * 삽입정렬
 * - 삽입 정렬은 작은 리스트와 대부분 정렬된 리스트에 상대적으로 효율적인 단순한 정렬 알고리즘이며 더 복잡한 알고리즘의 일부분으로 사용되기도 한다.
 * - 리스트로부터 요소를 하나씩 취한 다음 마치 돈을 지갑에 넣는 방식과 비슷하게 이들을 올바른 위치에, 새로 정렬된 리스트에 삽입함으로써 동작한다. 배열의 경우 새 리스트와 남아있는 요소들은 배열 공간을 공유할 수 있으나 삽입의 경우 잇따르는 모든 요소를 하나씩 이동해야 하므로 비용이 많이 든다. 셸소트는 큰 리스트에 더 효율적인 삽입 정렬의 변종이다.
 */

function insertIndex(sorted_arr, value) {
  for (let i in sorted_arr) {
    if (value < sorted_arr[i]) {
      return i;
    }
  }
  return sorted_arr.length;
}

function insertSort(arr) {
  let sorted_arr = [];

  while (arr.length != 0) {
    let value = arr.shift();
    let index = insertIndex(sorted_arr, value);
    sorted_arr.splice(index, 0, value);
  }
  return sorted_arr;
}
const arr = [
  '개구리',
  '거위',
  '말',
  '북극곰',
  '얼룩말',
  '고릴라',
  '기린',
  '닭',
  '코끼리',
];
console.log(insertSort(arr));
//['개구리', '거위', '고릴라', '기린', '닭', '말', '북극곰', '얼룩말', '코끼리']
