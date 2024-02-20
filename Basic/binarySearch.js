/**
 * BinarySearch 이진탐색
 * 정렬된 리스트에 사용되는 탐색 알고리즘
 * 리스트에서 탐색 범위를 절반씩 줄여나가며 특정한 값을 찾는데 사용
 * 속도가 빠르고 효율적이다. O(log n)
 */

function binarySearch(Array, target) {
  let low = 0;
  let high = Array.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (target > array[mid]) {
      low = mid + 1;
    } else if (target < array[mid]) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

const array = [1, 10, 20, 47, 59, 63, 75, 88, 99];
const target = 20;

console.log(binarySearch(array, target));
