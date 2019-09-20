'use strict';

function createUpdatedCollection(collectionA, objectB) {
  let collectionDistinct = new Array();
	let map = new Map();
	let output = new Array();//Remove duplicate
	//distinct 
	for(let i = 0; i < collectionA.length; i++){
		if(collectionDistinct.indexOf(collectionA[i]) < 0){
			collectionDistinct.push(collectionA[i]);
		}
	}

	let ctr = 1;
	let k,c;

	for(let i = 0; i < collectionDistinct.length; i++){
		let cnt = 0
		for(let j = 0; j < collectionA.length; j++){
			if(collectionDistinct[i] == collectionA[j]){
				cnt++;
			}

			if(objectB['value'][j] == collectionDistinct[i]){
				cnt -= ctr; 
				ctr++;
				if(ctr > 3){
					ctr = 1;
				}	
			}
		}

		if(collectionDistinct[i].length > 1){
			k = collectionDistinct[i].charAt(0);
			c = +collectionDistinct[i].charAt(2);
			map.set('key', k);
			map.set('count', c-cnt);
		}else{
			map.set('key', collectionDistinct[i]);
			map.set('count', cnt);	
		}

		
		output.push(Object.fromEntries(map.entries()));
	}
  	return output//return 'Implement the practice require, and begin changing code in this row';
}
