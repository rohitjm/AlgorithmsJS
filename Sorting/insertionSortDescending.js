function insertionSortDecending(arr) {
	for(let i = 1; i < arr.length; i++) {
		let temp = arr[i];
		let j = i-1;
		while(j >= 0 && arr[j] < temp) {
			arr[j+1] = arr[j];
			j--;
		}
		arr[j+1] = temp;
	}
	return arr;
}

const myArr = [5,3,1,6,7,4];
console.log(insertionSortDecending(myArr)); 