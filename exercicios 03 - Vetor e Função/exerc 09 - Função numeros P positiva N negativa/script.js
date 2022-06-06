var numero = parseInt (prompt("Digite um numero a ser comparado"));

function positivo(numero) {

    if(numero > 1){
        return 'P';
    }else(numero <= 0 );{
        return 'N';
    }
       
}

console.log(positivo(numero));

function parOUimpar(numero) {
    
    if(numero > 1){
        console.log("é Positivo");
        return 'P';
        
    }else if(numero <= 0){
        console.log("è Negativo");
        return 'N'
    }

}


console.log(parOUimpar(numero));





//consegui \/

/*var numero = parseInt (prompt("Digite um numero a ser comparado"));

function positivo(numero) {

    if(numero >= 0){
        return 0;
    }else{
        return -1;
    }
       
}

console.log(positivo(numero));

function parOUimpar(numero) {
    
    if(numero >= 0){
        console.log("é Positivo");
        return 'P';
        
    }else if(numero < 0){
        console.log("è Negativo");
        return 'N'
    }

}


console.log(parOUimpar(numero));
*/