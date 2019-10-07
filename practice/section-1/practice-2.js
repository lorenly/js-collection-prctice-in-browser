'use strict';

function collectSameElements(collectionA, collectionB) {
	let output = new Array();
	let newCollectionB = collectionB[0];

	collectionA.forEach(item => {
		if(newCollectionB.includes(item)) {
			output.push(item);
		}
	});
	
	return output;//return 'Implement the practice require, and begin changing code in this row';
}
