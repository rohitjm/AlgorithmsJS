const myArr = [6,1,87,5,34,7,9,4];

selectionSort(arr) {
	for(var i = 0; i < arr.length; i++) {
		for(var j = i+1; j < arr.length; j++) {
			if( arr[j] > arr[i]) {
				let temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
	}
}

console.log(selSort(myArr));