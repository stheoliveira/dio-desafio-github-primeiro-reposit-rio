// declarando um array
/* let array = ['string', 1, true];
console.log(array);*/

// pode guardar varios tipos de dados
let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
console.log(array[3]) 

/* // forEach
array.forEach(function(item, index){console.log(item, index)})*/

/* // push
array.push('novo item')
console.log(array) */

/* // pop
array.pop();
console.log(array);*/

/* // shift
array.shift('novo item no inicio');
console.log(array); */

/* // unshift
array.unshift();
console.log(array;) */

/* console.log(array.indexOf(true))*/

//splice
/*array.splice(0, 3)
console.log(array); */

/* // slice
let novoArray = array.slice(0, 3)
console.log(novoArray); */

let object = { string: 'string', number: 1, boolean: true, array: ["array"], objectInterno: { objectInterno:'objetoInterno'}};

/*console.log(objectInterno);

var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno); */

var { string, boolean, objectInterno} = object;
console.log(string, boolean, objectInterno)