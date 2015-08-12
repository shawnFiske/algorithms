'use strict'
var numArray = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30 ];

// broken 
// returns index for values location
// using while loop
// function binarySearch(array, targetValue) {
//   var minIndex    = 0;
//   var maxIndex    = array.length - 1;
//   var middleIndex = Math.floor(array.length / 2);

//   while(array[middleIndex] != targetValue && minIndex < maxIndex) {
//     if(targetValue < array[middleIndex]) {
//       minIndex = middleIndex + 1;
//     }else if(targetValue > array[middleIndex]){
//       maxIndex = middleIndex - 1;
//     }

//     middleIndex = middleIndex = Math.floor((minIndex + maxIndex) / 2);
//   }

//   return (array[middleIndex] != targetValue)? {success:false, value: null} : {success: true, value: middleIndex};
// }


//binary search using recursion
function binSearch(array, targetValue){

  if(array.length === 1){
    if(targetValue !== array[0]){
      return {success: false};
    }else{
      return {success: true};
    }
  }

  var middleIndex = Math.floor((array.length - 1) / 2);
  var result = [];

  if(targetValue === array[middleIndex]){
    return {success: true};
  }else if( targetValue > array[middleIndex]){
    result = array.slice(middleIndex + 1);
  }else{
    result = array.slice(0, middleIndex);
  }

  return binSearch(result, targetValue);
}


//console.log(binarySearch(numArray, 14));
console.log(binSearch(numArray, 12));