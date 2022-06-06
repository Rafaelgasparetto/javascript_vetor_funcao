var vetorTemp = new Array();
var vetor_Temp = new Array();

//PUSH NO VETOR COM PROMPT
for (var i = 0; i < 7; i++) {
    vetorTemp[i] = (prompt("Digite a temperaturas da semana começando por Domingo e terminando no Sabado"));
    vetor_Temp[i] = vetorTemp[i];
    }
                                    //CONCATENAÇÃO DOS DIAS E O VETOR \/ 
                                    //PS: NÃO CONSEGUI PASSAR COMO INTERPOLAÇÃO! É APENAS EM OBJETOS?
                                    console.log("Domingo: "+vetor_Temp[0]+" Segunda-Feira: "+vetor_Temp[1]+" Terça-Feira: "+vetor_Temp[2]+
                                    " Quarta-Feira: "+vetor_Temp[3]+" Quinta-Feira: "+vetor_Temp[4]+" Sexta-Feira: "+vetor_Temp[5]+" Sabado: "+vetor_Temp[6])
                                    
                                    console.log(vetor_Temp);
    
 //MENOR TEMPERATURA // não consegui puxar o menor valor "eu deveria colocar um for dentro de outro para comparar vetorTemp com vetor_Temp? indice com indice?"
 //Mesmo se fizesse isso, iria colocar indice com indice e nao iria ser menor, colocaria um for contador -- com UM for contador++ e inicializando com 10 e o outro com 0?
    var menor = 0;
    for (var b = 0; b < vetor_Temp.length; b++) {
    if ( vetor_Temp[b] < menor ) {
        menor = vetor_Temp[b];
        console.log("é verdade");
    }
    }
    console.log("a Menor temperatura da semana foi: "+menor);
                                                                                //MAIOR TEMPERATURA
                                                                                    var maior = 0;
                                                                                    for (var a = 0; a < vetor_Temp.length; a++) {
                                                                                    if ( vetor_Temp[a] > maior ) {
                                                                                        maior = vetor_Temp[a];
                                                                                    }
                                                                                    }
                                                                                    console.log("A maior temperatura da semana foi: "+maior);
//MEDIA DA TEMPERATURA SEMANAL \/
//PS: DIFICULDADE QUE TIVE FOI SOMAR TODOS OS ARRAYS E DIVIDIR POR 7 DIAS
//QUANDO SOMO ARRAY EM FOR OU 

var media_Temp = parseInt(vetor_Temp[0]+vetor_Temp[1]+vetor_Temp[2]+vetor_Temp[3]+vetor_Temp[4]+vetor_Temp[5]+vetor_Temp[6]/7);
console.log(media_Temp);

    //DIAS QUE FORAM INFERIORES A MEDIA SEMANAL
        dias = 0;
    for (var c = 0; c < vetor_Temp.length; c++) {
        
        if(vetor_Temp[c] < media_Temp){
            dias++;
        }
        console.log("Dias: "+dias);
    }











    console.log("testei!");
    var teste = (vetor_Temp[0]+vetor_Temp[1]);
    console.log(teste);
    console.log("testei!");
