arr = [5, 4, 3, 2, 1]

// Bubble sort

// Start looping from with a variable called i the end of the array towards the beginning
// Start an inner loop with a variable called j from the beginning until i - 1
// If arr[j] is greater than arr[j+1], swap those two values
// Return the sorted array

// function bubbleSort(arr) {
//     const swap = (arr, idx1, idx2) => ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

//     for (let i = arr.length; i > 0; i--) {
//         for (let j = 0; j < i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 swap(arr, j, j + 1);
//             }
//         }
//     }
//     return arr;
// }

// console.log(bubbleSort(arr), 'bubble')


// Selection sort

// Store the first element as the smallest value you've seen so far.
// Compare this item to the next item in the array until you find a smaller number.
// If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
// If the "minimum" is not the value (index) you initially began with, swap the two values.
// Repeat this with the next element until the array is sorted.

// function selectionSort(arr) {
//     const swap = (arr, idx1, idx2) => ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

//     for (let i = 0; i < arr.length; i++) {
//         let lowest = i;
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[lowest] > arr[j]) {
//                 lowest = j;
//             }
//         }
//         if (i !== lowest) swap(arr, i, lowest);
//     }
//     return arr;
// }

// console.log(selectionSort(arr), 'selection') 

// Insertion sort

// Start by picking the second element in the array
// Now compare the second element with the one before it and swap if necessary.
// Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place.
// Repeat until the array is sorted.

// function insertionSort(arr) {
//     for (var i = 1; i < arr.length; i++) {
//         var currentVal = arr[i];
//         for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
//             arr[j + 1] = arr[j]
//         }
//         arr[j + 1] = currentVal;
//     }
//     return arr;
// }

// console.log(insertionSort(arr), 'insertion') 

// Merge sort

// Create an empty array, take a look at the smallest values in each input array
// While there are still values we haven't looked at...
//     If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
//     If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array 
//     Once we exhaust one array, push in all remaining values from the other array
// Break up the array into halves until you have arrays that are empty or have one element
// Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
// Once the array has been merged back together, return the merged (and sorted!) array

// function merge(arr1, arr2) {
//     let results = [];
//     let i = 0;
//     let j = 0;
//     while (i < arr1.length && j < arr2.length) {
//         if (arr2[j] > arr1[i]) {
//             results.push(arr1[i]);
//             i++;
//         } else {
//             results.push(arr2[j])
//             j++;
//         }
//     }
//     while (i < arr1.length) {
//         results.push(arr1[i])
//         i++;
//     }
//     while (j < arr2.length) {
//         results.push(arr2[j])
//         j++;
//     }
//     return results;
// }

// function mergeSort(arr) {
//     if (arr.length <= 1) return arr;
//     let mid = Math.floor(arr.length / 2);
//     let left = mergeSort(arr.slice(0, mid));
//     let right = mergeSort(arr.slice(mid));
//     return merge(left, right);
// }

// console.log(mergeSort(arr), 'merge')


// Quick sort

// function pivot(arr, start = 0, end = arr.length - 1) {
//     const swap = (arr, idx1, idx2) => {
//       [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//     };

//     // We are assuming the pivot is always the first element
//     let pivot = arr[start];
//     let swapIdx = start;

//     for (let i = start + 1; i <= end; i++) {
//       if (pivot > arr[i]) {
//         swapIdx++;
//         swap(arr, swapIdx, i);
//       }
//     }

//     // Swap the pivot from the start the swapPoint
//     swap(arr, start, swapIdx);
//     return swapIdx;
//   }


//   function quickSort(arr, left = 0, right = arr.length -1){
//       if(left < right){
//           let pivotIndex = pivot(arr, left, right) 
//           //left
//           quickSort(arr,left,pivotIndex-1);
//           //right
//           quickSort(arr,pivotIndex+1,right);
//         }
//        return arr;
//   } 

//   console.log(quickSort(arr), 'quick')

// Radix sort

// function getDigit(num, i) {
//     return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
// }

// function digitCount(num) {
//     if (num === 0) return 1;
//     return Math.floor(Math.log10(Math.abs(num))) + 1;
// }

// function mostDigits(nums) {
//     let maxDigits = 0;
//     for (let i = 0; i < nums.length; i++) {
//         maxDigits = Math.max(maxDigits, digitCount(nums[i]));
//     }
//     return maxDigits;
// }

// function radixSort(nums) {
//     let maxDigitCount = mostDigits(nums);
//     for (let k = 0; k < maxDigitCount; k++) {
//         let digitBuckets = Array.from({ length: 10 }, () => []);
//         for (let i = 0; i < nums.length; i++) {
//             let digit = getDigit(nums[i], k);
//             digitBuckets[digit].push(nums[i]);
//         }
//         nums = [].concat(...digitBuckets);
//     }
//     return nums;
// }

// console.log(radixSort(arr), 'radix')