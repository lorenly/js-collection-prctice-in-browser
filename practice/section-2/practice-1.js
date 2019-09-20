'use strict';

function countSameElements(collection) {
	let collectionDistinct = new Array();
	let map = new Map();
	let output = new Array();

	//Remove duplicate
	for(let i = 0; i < collection.length; i++){
		if(collectionDistinct.indexOf(collection[i]) < 0){
			collectionDistinct.push(collection[i]);
		}
	}
	
	for(let i = 0; i < collectionDistinct.length; i++){
		let ctr = 0;	
		for(let j = 0; j < collection.length; j++){
			if(collection[j] == collectionDistinct[i]){
				ctr++;
			}
		}
		if(ctr > 0){
			map.set('key', collectionDistinct[i]);
			map.set('count', ctr);
			output.push(Object.fromEntries(map.entries()));
			
		}
	}
	return output;//'Implement the practice require, and begin changing code in this row';
}
