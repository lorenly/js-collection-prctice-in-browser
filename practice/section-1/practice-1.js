'use strict';

function collectSameElements(collectionA, collectionB) {

	let arr = new Array();
	let newArr = new Array();
	let output = new Array();
	let j = 0;

	/*PUSH & POP*/
	//Populate collectionA in array arr
	for(let i = 0; i < collectionA.length; i++){
		arr.push(collectionA[i]);

		while(arr.length > 0 && j < collectionA.length && arr[collectionA.length-1] == collectionB[j])
		{
			arr.pop();
			j++
		}
	}

	for(let i = 0; i < arr.length; i++){
		for(let j = 0; j < collectionB.length; j++){
			if(collectionB[j] == arr[i]){
				output.push(collectionB[j]);
			}
		}
	}
  return output;//'Implement the practice require, and begin changing code in this row';
}
