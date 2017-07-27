var a = [34, 203, 3, 746, 200, 984, 198, 764, 9];
  
console.log(mergeSort(a));

function mergeSort(arr) {
  if(arr.length < 2) {
    return arr;
  }

  const mid = arr.length/2;
  const leftarr = arr.slice(0,mid);
  const rightarr = arr.slice(mid);

  console.log('leftarr: ', leftarr);
  console.log('rightarr: ', rightarr);

  return merge(mergeSort(leftarr), mergeSort(rightarr));
}

function merge(arr1, arr2) {
  let result = [];
  let counter = 0;
  if(arr1.length > arr2.length) {
    counter = arr1.legnth;
  } else {
    counter = arr2.length;
  }

  while(arr1.length && arr2.length) {
    if(arr1[0] <= arr2[0]) {
      console.log('pushing..', arr1[0]);
      result.push(arr1.shift());
    } else {
      console.log('pushing..', arr2[0]);
      result.push(arr2.shift());
    }
    console.log(`Result array: ${result}`);
  }

  while (arr1.length) result.push(arr1.shift());

  while (arr2.length) result.push(arr2.shift());

  return result;
}