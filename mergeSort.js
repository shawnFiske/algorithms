'use strict'
var numArray = [25, 4, 11, 30, 13, 17, 10, 21, 15, 22, 2, 12, 9, 1, 20, 8, 27, 5, 28, 29, 26, 19, 3, 18, 7, 24, 23, 6, 16, 14];

function mergeSort(array) {
  if(array.length < 2){
    return array;
  }
  var middle = parseInt(array.length/2);
  var leftArray   = array.slice(0, middle);
  var rightArray  = array.slice(middle);
  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(leftArray, rightArray) {
  var result = [];

  while(leftArray.length && rightArray.length) {
    if(leftArray[0] <= rightArray[0]) {
      result.push(leftArray.shift());
    }else{
      result.push(rightArray.shift());
    };
  }

  while(leftArray.length) {
    result.push(leftArray.shift());
  }

  while(rightArray.length) {
    result.push(rightArray.shift());
  }

  return result;
}

console.log(mergeSort(numArray));