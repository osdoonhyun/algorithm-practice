## 사용된 알고리즘/자료구조

String, sort의 내부 동작 원리 응용

## 알아둘 것

### sort 내부 동작원리

arr.sort([compareFunction])
function compare(a, b) {
if (a is less than b by some ordering criterion) {
return -1;
}
if (a is greater than b by the ordering criterion) {
return 1;
}
// a must be equal to b
return 0;
}

### charCodeAt() - 문자열에서 지정된 인덱스에있는 문자의 유니 코드를 반환

'ABC'.charCodeAt(0) // returns 65
'ABC'.charCodeAt(2) // returns 67
