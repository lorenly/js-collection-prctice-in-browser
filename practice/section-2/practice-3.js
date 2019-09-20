'use strict';

function countSameElements(collection) {
  let collectionDistinct = new Array();
	let map = new Map();
	let output = new Array();

	for(let i = 0; i < collection.length; i++){
		if(collectionDistinct.indexOf(collection[i]) < 0){
			if(collection[i].length === 1){
				collectionDistinct.push(collection[i]);
			}else{
				if(collectionDistinct.indexOf(collection[i].charAt(0)) < 0){
					collectionDistinct.push(collection[i].charAt(0));
				}
			}
		}
	}

	let ctr = 0;
	let tempKey;
	let cd = collectionDistinct;
	for(let i = 0; i < cd.length; i++){;
		ctr = 0;
		for(let j = 0; j < collection.length; j++){
			if(collection[j].charAt(0) == collectionDistinct[i]){
				ctr++;
			}
			if(collection[j].length > 1){
				if(collection[j].charAt(0) == collectionDistinct[i]){
					if(+collection[j].slice(2,4) > 9){
						ctr += +collection[j].slice(2,4) -1;
					}else{
						ctr += +collection[j].charAt(2)-1;
					}
				}
			}
		}

		map.set('name', cd[i]);
		map.set('summary', ctr);
		output.push(Object.fromEntries(map.entries()));
	}  
	return output;
}
