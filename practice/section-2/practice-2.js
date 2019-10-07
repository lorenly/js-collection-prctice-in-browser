'use strict';

function countSameElements(collection) {
	let output = new Array();

	collection.forEach(item =>{
		let obj;
		if(item.includes('-')){
			let tempArr = item.split('-');	
			output.push({key: tempArr[0], count: parseInt(tempArr[1])});

		}else{
			obj = output.find(({key}) => key == item);
			if(!obj)
				output.push({key: item, count: 1});
			else
				obj.count++;
			
		}
		
	});
	return output;//'Implement the practice require, and begin changing code in this row';
}
