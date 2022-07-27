// comentário de uma linha
/* comentário
com maisd e uma linha */

/*var desconto = .;
const PRECO = ;
var total = PRECO - desconto;
//constante sempre com letra maiúscula; boa prática

function soma(a, b) {
    return a + b; //8
}

soma (3,5);*/

function returnEvenValues (array) {
    let evenNums = [];
    for(let i = 0; i < array.length; i++) {
        if(array[i] % 2 === 0) {
            evenNums.push(array[i])
        }
    }
    console.log('os numeros pares são:' + evenNums);
}

let array = [1, 2, 4, 5, 7, 8];

returnEvenValues(array);