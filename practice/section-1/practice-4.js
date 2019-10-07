'use strict';

function collectSameElements(collectionA, objectB) {
  let output = new Array();
  let newObjectB = objectB.value;

  collectionA.forEach(item =>{
  	if(newObjectB.includes(item.key)){
  		output.push(item.key);
  	}
  });

  return output;//'Implement the practice require, and begin changing code in this row';
}
