'use strict';

function collectSameElements(collectionA, collectionB) {

	let output = new Array();

	//Populate collectionA in array arr
	collectionA.forEach(item => {
		if(collectionB.includes(item)){
			output.push(item);
		}
	});
  return output;//'Implement the practice require, and begin changing code in this row';
}
