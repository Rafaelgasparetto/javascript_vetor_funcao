var vetorA = [1,2,3,4,5,6,7,8,9,10];
var x = parseInt (prompt("Digite um numero para variavel X"));
var vetorM = [];
// VETOR A
for (var i = 0; i < vetorA.length; i++) {
    
    console.log(vetorA[i]+"");

}

//ADICIONANDO INDICE NO VETOR A
x = vetorA.push(x);

console.log(vetorA);


//VETOR M
for (var y = 0; y < vetorA.length; y++) {
    
   
    vetorM[y] = vetorA[y] * vetorA[10];
    
}
//Removendo o indice de multiplicação do vetor
vetorM.pop();


console.log(vetorM);
