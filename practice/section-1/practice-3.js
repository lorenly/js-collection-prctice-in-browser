'use strict';

function collectSameElements(collectionA, objectB) {
	let output = new Array();
	let newObjectB = objectB.value;
	
	collectionA.forEach(item => {
		if(newObjectB.includes(item)){
			output.push(item);
		}
	});
  return output; //return 'Implement the practice require, and begin changing code in this row';
}
