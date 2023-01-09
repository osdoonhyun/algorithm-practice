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
