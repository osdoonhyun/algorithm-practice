// function swap(array, leftIndex, rightIndex) {
//   let temp = array[leftIndex];
//   array[leftIndex] = array[rightIndex];
//   array[rightIndex] = temp;
// }

// function partition(array, left, right) {
//   const pivot = array[Math.floor((left + right) / 2)];
//   console.log('array', array);
//   console.log('left,right,pivot', array[left], array[right], pivot);
//   // console.log('들어오기전 left,right pivot', left, right, pivot);
//   while (left <= right) {
//     while (array[left] < pivot) {
//       left++;
//     }
//     while (array[right] > pivot) {
//       right--;
//     }
//     if (left <= right) {
//       swap(array, left, right);
//       left++;
//       right--;
//     }
//   }
//   return left;
// }

// function quickSort(array, left, right) {
//   if (left >= right) return;

//   let index;
//   if (array.length > 1) {
//     index = partition(array, left, right);
//   }
//   if (left < index - 1) {
//     quickSort(array, left, index - 1);
//   }
//   if (index < right) {
//     quickSort(array, index, right);
//   }
//   return array;
// }

// // const array = [6, 3, 8, 5, 2];
// const array = [1, 12, 5, 26, 7, 14, 3, 7, 2];
// const sortedArray = quickSort(array, 0, array.length - 1);
// console.log(sortedArray);

function quickSort(array, left = 0, right = array.length - 1) {
  if (left >= right) {
    return;
  }
  const mid = Math.floor((left + right) / 2);
  const pivot = array[mid];
  const partition = divide(array, left, right, pivot);

  quickSort(array, left, partition - 1);
  quickSort(array, partition, right);

  function divide(array, left, right, pivot) {
    console.log(
      `array: ${array}, left: ${array[left]}, pivot: ${pivot}, right: ${array[right]}`
    );
    while (left <= right) {
      while (array[left] < pivot) {
        left++;
      }
      while (array[right] > pivot) {
        right--;
      }
      if (left <= right) {
        let swap = array[left];
        array[left] = array[right];
        array[right] = swap;
        left++;
        right--;
      }
    }
    console.log(`partition: ${array[left]} left: ${left}`);
    return left;
  }

  return array;
}

const array = [1, 12, 5, 26, 7, 14, 3, 7, 2];
const sortedArray = quickSort(array, 0, array.length - 1);
console.log(sortedArray);
