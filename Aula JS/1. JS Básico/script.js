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

var name = prompt("Digite o seu nome:");
alert("O seu nome é " + name);

var idade = prompt("Digite a sua idade: ");
alert("Você tem " + idade + " anos");

var num = parseInt(prompt("Digite um numero"));

dobro = num + num; 

alert("O Dobro do numero é: " + dobro);