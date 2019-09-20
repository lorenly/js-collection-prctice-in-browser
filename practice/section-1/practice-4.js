'use strict';

function collectSameElements(collectionA, objectB) {
  let output = new Array();
  for(let j = 0; j < collectionA.length; j++){
  	for(let i = 0; i < objectB.value.length; i++){
  		if(objectB.value[i] == collectionA[j].key){
  			output.push(objectB.value[i]);
  		}
  	}
  }
  return output;//'Implement the practice require, and begin changing code in this row';
}
