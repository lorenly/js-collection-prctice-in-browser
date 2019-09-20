'use strict';

function collectSameElements(collectionA, collectionB) {
	let arr = new Array();
	let newArr = new Array();
	let output = new Array();

	arr = collectionA.splice(0).concat(collectionB);
	for(let i = 0; i < arr.length; i++){
		if(newArr.indexOf(arr[i]) < 0){
			newArr = newArr.concat(arr[i]);
		}
	}

	let newColB = new Array();

	//Convert to 1D array
	for(var i = 0; i < collectionB.length; i++){
	    newColB = newColB.concat(collectionB[i]);
	}

	for(let i = 0; i < newArr.length; i++){
		for(let j = 0; j < newColB.length; j++){
			if(newArr[i] == newColB[j] && output.indexOf(newArr[i]) < 0){
				output = output.concat(newColB[j]);
			}
		}
	}

	return output;//return 'Implement the practice require, and begin changing code in this row';
}
