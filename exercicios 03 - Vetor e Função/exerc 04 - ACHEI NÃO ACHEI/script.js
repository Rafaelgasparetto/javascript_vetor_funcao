var nomes = new Array();
var nomeAchado;

for (var i = 0; i < 5; i++) {
    
    nomes[i] = prompt("Digite um nome");


}

var find = prompt("Digite um nome a ser procurado");

for (var y = 0; y < nomes.length; y++) {
    
    if (find == nomes[y]){
        console.log("ACHEI");
        nomes[y] = nomeAchado ;
        
        break;
    }else{
        console.log("NAO ACHEI");
        //console.log(nomes);
        

    }
    
}
console.log(nomeAchado);

//console.log(find);
//console.log(nomes);



// lendo os nomes \/
//console.log(nomes);










/*var nomes = [5,4,5,6,7];


//nomes.push(0);
nomes.push() = (prompt("digite um nome"));

for (var i = 0; i < nomes.length; i++) {
    
    
        if(nomes == true){
            nomes.push(prompt =("digite um nome"));
        }else{
            console.log("nao sei");
        }

}




function adicionar () {
    
 //prompt("Adicione um nome") = nomes.push();

}

//adicionar();

console.log(nomes[5]);
 */