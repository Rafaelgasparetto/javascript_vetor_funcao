var vetorQ = new Array();
var vetorR = new Array();

for (var i = 0; i < 10; i++) {
    
    vetorQ [i] = parseInt(prompt ("Digite um numero par"));

    if ((vetorQ[i] % 2) == 0) {
    
     window.alert("Proximo Numero");
        vetorR[i] = vetorQ[i];
     
    } else if ((vetorQ[i] % 2) == 1) {
         window.alert("Não é numero PAR, tente denovo");
        vetorQ.length - 1;
     
         } else{

            console.log("Digite um numero valido");

            }
                    //FUNÇÃO PARA TIRAR NULL
                    var vetorResposta = vetorR.filter (function(k){
                        return k;
                    });

}
var maior = 0;
for (var a = 0; a < vetorResposta.length; a++) {
   if ( vetorResposta[a] > maior ) {
      maior = vetorResposta[a];
   }
}

console.log(maior);

//console.log(vetorResposta);

//const max = Math.max(vetorResposta);
//const min = Math.min(vetorResposta);
//console.log(max);






/*if ((vetorQ[i] % 2) == 0){
    //window.alert("Proximo Numero");
    vetorR[i] = vetorQ[i]; 
} else ((vetorQ[i] % 2) == 1);{
    //window.alert("Não é numero PAR, tente denovo");
    console.log("marcação aqui")
    vetorQ.length - 1;
}
console.log(vetorR.length);
// console.log(vetorQ.length);

*/


/*
    //vetorQ [i] = parseInt(prompt ("Digite um numero par"));
    do {
        vetorR[i] = vetorQ[i];
    } while ((vetorQ[i] % 2) ==0);

    console.log(vetorQ);
   console.log(vetorR);

   */



// ATE AGORA ESSA CHEGOU MAIS PERTO \/
   /*

   for (var i = 0; i < 5; i++) {
    
    vetorQ [i] = parseInt(prompt ("Digite um numero par"));

 if ((vetorQ[i] % 2) == 0) {
    
    window.alert("Proximo Numero");
    vetorR[i] = vetorQ[i];
    
     
 } else if ((vetorQ[i] % 2) == 1) {
    window.alert("Não é numero PAR, tente denovo");
    console.log("marcação aqui");
    vetorQ.length - 1;
     
 }else{

    console.log("Digite um numero valido");

 }

 //console.log(vetorQ);

//console.log(vetorR);

}

var vetorResposta = vetorR.filter (function(k){
    return k;
});

console.log(k);

*/
