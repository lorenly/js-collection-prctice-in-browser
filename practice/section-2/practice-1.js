'use strict';

function countSameElements(collection) {
	let output = new Array();

	collection.forEach(item =>{
		let obj = output.find(({key}) => key == item);
		if(!obj)
			output.push({key: item, count: 1});
		else{
			obj.count++;
		}
	});

	return output;//'Implement the practice require, and begin changing code in this row';
}
