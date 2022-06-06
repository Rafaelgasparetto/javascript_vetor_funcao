var vetor = new Array();

//Entrando com numeros inteiros no prompt para organizar por INT e não por STRING.
for (var i = 0; i < 10; i++) {
    
    vetor[i] = parseInt (prompt("Digite um numero"));
    
}
console.log(vetor);


//Organizando por ondem crescente
vetor.sort(function(a,b) {

    if (a > b) return 1;
    if (a < b) return -1;

    return 0;

});

console.log(vetor);