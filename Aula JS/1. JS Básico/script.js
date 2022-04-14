// 1 - OPERADORES LÓGICOS

/*
var idade = 70;

var menor10 = idade <= 10;
var maior65 = idade >=65;

var gratuidade = menor10 || maior65;    

console.log("Idade ", idade);
console.log ("Maior que 65 ", maior65);
console.log("Menor que 10: ", menor10); 

********************************************************************************************
*/


/*
// 2 - TRANSFORMANDO STRINGS EM NÚMEROS 

// transformando em numero int:
var a = "3";
var b = "5";
var c = parseInt(a) + parseInt(b);

console.log(c)

// transformando em numero float:
var d = "3.5";
var e = "5";
var f = parseFloat(d) + parseInt (e);

console.log(f); 

************************************************************************************************
*/


// 3 - ALERT E PROMPT 
/*
// Alert: 

alert("Seja bem vindo");  
*/ 


// Prompt: 
/*

var name = prompt("Digite o seu nome:");
alert("O seu nome é " + name);

*/

/*
//Utilizando prompt e alert juntos:
var num = parseInt(prompt("Digite um numero"));

dobro = num + num; 

alert("O Dobro do numero é: " + dobro); 

*******************************************************************************************
*/


// 4 - ELSE E IF 
/*
var idade = 24; 

if (idade >= 35){
    console.log("Pode beber");
    console.log("Qual o seu pedido?")
}

else if (idade >=18){
    w
    console.log("Mostre a idadentidade");
}

else {
    console.log("Não pode");
    console.log("Volte futuramente");
}
************************************************************************************************
*/


// 5 - OPERADOR TERNÁRIO 
/*
var idade = 24; 

idade >= 18 ? console.log("Pode") : console.log("Não pode");
*************************************************************************************************
*/


// 6 - SWITCH 
/*
var nota1 = 8;
var nota2 = 7;

var media = (nota1 + nota2) / 2; 
var conceito = ""

if (media >= 8.5){
    conceito = "Ótimo";
} else if (media >=7.5 ){
    conceito = "Bom" 
}  else if (media >=6){
    conceito = "Regular"    
  }
  else {
    conceito = "Você precisa estudar mais"
}

console.log(media);
console.log(conceito);

switch (conceito){
     case "Ótimo":
         console.log("Parabéns, continue assim");
         break;
     case "Bom":
         console.log("Você está quase perfeito");
         break;
     case "Regular":
         console.log("Você precisa melhorar")
         break;
     default:
         console.log("Houve algum erro!");
         break;
}
************************************************************************************
*/


// 7 - FOR AND WHILE 

//FOR
/* 
var numero = 5; 

for(var vez = 1; vez <= numero; vez++ ){
       console.log("Executando o FOR pela " + vez + " vez.")
}

console.log("Acabou!");
*/

//WILLE 
/*
var numero = Math.random() * 100; 

while (numero < 90){
      console.log("Numero " + numero);
      numero = Math.random()*100;
}

console.log(numero);
console.log("Acabou");
*************************************************************************************************
*/ 


// 8 - ARRAYS 
/*
var alunos = ["Gabriel", "Beatriz", "Alex", "Roberta"]

for (i=0; i < alunos.length; i++) {
    console.log(alunos[i]);
}
***************************************************************************************************
*/



// 9 - FUNÇÕES 
/*
function media (n1, n2){
    var nota1 = n1;
    var nota2 = n2;
    
    var media = (nota1 + nota2) / 2; 
    
    return media;
}

var resultado1 = media(8, 9);
var resultado2 = media(10, 5);

console.log(resultado1);
console.log(resultado2 );
*/
/*
var media2 = function (n3, n3){
      return (n3 + n3) / 2;
}
console.log(media2(5,2));
**************************************************************************************************
*/


// PROGRAMA UTILIZANDO TUDO O QUE FOI ENSINADO:
/*
var nome = ["Gabriel", "Alex", "Mario"];
var notaA = [8.5, 8, 5];
var notaB = [9.7, 7, 2];

function media(n1, n2){
    return (n1 + n2) / 2;   
} 

function passou(media){
    if (media > 7){
        return "Aprovado";
    } else {
        return "Reprovado"  
    }
}

for (var index in nome){
    var nota1 = notaA[index];
    var nota2 = notaB[index];

    var m = media(nota1, nota2);

    console.log(nome[index] + " - " + nota1 + " - " + nota2 + " - " + m + " - " + passou(m)); 
}
*****************************************************************************************************
*/


// 10 - OBJETOS - PROPRIEDADES 
/*
var aluno = {
    nome: "Gabriel",
    nota: [5, 10]

}

aluno.matricula = 1441978;
aluno.sobrenome = "Oliveira Nunes";

console.log(aluno);
*/
// 10.1 - OBJETOS - MÉTODOS 
/*
function calcMedia(){
    return (this.notas[0] + this.notas[1]) / 2;
}

var aluno = {
    nome: "Gabriel",
    notas: [10, 6],
    media: calcMedia 
    
}

var aluno1 = {
    nome: "Igor",
    notas: [8, 7],
    media: calcMedia
}

console.log(aluno.nome);
console.log(aluno.media())

console.log(aluno1.nome);
console.log(aluno1.media())
*/
// 10.2 - OBJETOS - CONSTRUTORES 

