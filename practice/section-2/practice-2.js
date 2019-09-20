'use strict';

function countSameElements(collection) {
	let collectionDistinct = new Array();
	let set = new Set();
	let output = new Array();

	for(let i = 0; i < collection.length; i++){
		if(collectionDistinct.indexOf(collection[i]) < 0){
			collectionDistinct.push(collection[i]);
		}
	}

	let ctr = 0;
	for(let i = 0; i < collectionDistinct.length; i++){
		ctr = 0;
		for(let j = 0; j < collection.length; j++){
			if(collection[j] == collectionDistinct[i]){
				ctr++;
			}
		}
		if(ctr > 0){
			
			if(collectionDistinct[i].length > 1){
				let temp = 0;
				if(ctr > 1){
					temp = ctr + +collectionDistinct[i].charAt(2)
				}else{
					temp = +collectionDistinct[i].charAt(2)
				}

				set.add({
					key: collectionDistinct[i].charAt(0),
					count: temp
				});
			}else{
				set.add({
					key: collectionDistinct[i],
					count: ctr
				});
			}
		}
	}  
	return Array.from(set);//'Implement the practice require, and begin changing code in this row';
}
