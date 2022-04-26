let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao"); 

let resultado = document.getElementById("resultado")

function calcular(){
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qntdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2  * criancas);
    let qntdTotalCerveja = cervejaPP(duracao) * adultos;
    let qntdTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2  * criancas);
    
    resultado.innerHTML = `<p>${Math.ceil(qntdTotalCerveja/355)} latas de Cerveja</p>`
    resultado.innerHTML += `<p>${qntdTotalCarne/1000} kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qntdTotalBebidas/2000)} pets 2L de Bebidas</p>`
}

function carnePP(duracao){
      if(duracao >= 6){
        return 650;
      }
      else {
        return 400;
      }
}     
      
function cervejaPP(duracao){
    if(duracao >= 6){
        return 2000;
    }
    else {
        return 1200;
    }
}

function bebidasPP(duracao){
    if(duracao >= 6){
        return 1500;
    }
    else {
        return 1000;
    }
}
