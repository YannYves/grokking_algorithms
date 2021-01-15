"use strict";

/**
 * Quick array sorting
 * @param {Array} array Source array
 * @returns {Array} Sorted array
 */
let count = 0;

function quicksort(array) {
  count ++;
  // base case, arrays with 0 or 1 element are already "sorted"
  if (array.length < 2) return array;
  // recursive case
  let pivot = array[0];
  // sub-array of all the elements less than the pivot
  let less = array.slice(1).filter(function(el) {
    
    return el <= pivot;
  });

  console.log(`the less sub array is now equal to`, less)
  // sub-array of all the elements greater than the pivot
  let greater = array.slice(1).filter(function(el) {
    return el > pivot;
  });
  console.log(`the greater sub array is now equal to`, greater)
  console.log(`quicksort has been called ${count} times `)
  return quicksort(less).concat([pivot], quicksort(greater));
}

console.log(quicksort([10, 5, 2, 3])); // [2, 3, 5, 10]
