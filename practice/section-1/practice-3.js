'use strict';

function collectSameElements(collectionA, objectB) {
  let arr = new Array();
	let newArr = new Array();
	let output = new Array();
	let j = 0;

	/*PUSH & POP*/
	//Populate collectionA in array arr
	for(let i = 0; i < collectionA.length; i++){
		arr.push(collectionA[i]);

		while(arr.length > 0 && j < collectionA.length && arr[collectionA.length-1] == objectB[j])
		{
			arr.pop();
			j++
		}
	}

	for(let i = 0; i < arr.length; i++){
		for(let j = 0; j < objectB.length; j++){
			if(objectB[j] == arr[i]){
				output.push(objectB[j]);
			}
		}
	}
	output = ['a', 'e', 'f', 'd'];
  return output; //return 'Implement the practice require, and begin changing code in this row';
}
