/**
 * 선택 정렬
 * - 선택 정렬은 제자리 비교 정렬이다. 복잡도는 O(n^2)이므로 큰 리스트에는 비효율적이며, 유사한 삽입 정렬보다 성능이 더 떨어지는 것이 일반적이다. 선택 정렬은 단순함이 특징이며 특정한 상황에서는 더 복잡한 알고리즘보다 성능상 우위가 있다.
 * - 이 알고리즘은 최소값을 찾고 값을 최초 위치와 바꿔친 다음 리스트의 나머지 부분에 대해 이 과정을 반복한다. 교환 과정은 n개를 넘지 않으므로 교환 비용이 많이 드는 상황에서 유용하다.
 */

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min_index = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min_index] > arr[j]) {
        min_index = j;
      }
    }
    [arr[min_index], arr[i]] = [arr[i], arr[min_index]];
  }
  return arr;
}
