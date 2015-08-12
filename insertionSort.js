'use strict'
var numArray = [25, 4, 11, 30, 13, 17, 10, 21, 15, 22, 2, 12, 9, 1, 20, 8, 27, 5, 28, 29, 26, 19, 3, 18, 7, 24, 23, 6, 16, 14];

function insertionSort(array) {
  for(var currIndex = 0; currIndex < array.length; currIndex++){
    var currentValue = array[currIndex];

    for(var nextIndex = currIndex; nextIndex > 0 && currentValue < array[nextIndex - 1]; nextIndex--){
      array[nextIndex] = array[nextIndex - 1];
    };

    array[nextIndex] = currentValue;

  };

  return array;
};

console.log(insertionSort(numArray));