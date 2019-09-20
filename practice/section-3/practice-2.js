'use strict';

function createUpdatedCollection(collectionA, objectB) {
  	let map = new Map();
	let output = new Array();

	let ctr = 1;
	for(let i = 0; i < collectionA.length; i++){
		let cnt = collectionA[i]['count'];
		for(let j = 0; j < objectB['value'].length; j++){
			if(collectionA[i]['key'] == objectB['value'][j]){
				cnt -= ctr;
				ctr++;
				if(ctr > 3){
					ctr = 1;
				}
			}
		}
		map.set('key', collectionA[i]['key']);
		map.set('count', cnt);
		output.push(Object.fromEntries(map.entries()));
	}
	//output.push(Object.fromEntries(map.entries()));
	
	return output;//'Implement the practice require, and begin changing code in this row';
}
