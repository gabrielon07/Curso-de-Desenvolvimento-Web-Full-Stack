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

var idade = 24; 

idade >= 18 ? console.log("Pode") : console.log("Não pode");