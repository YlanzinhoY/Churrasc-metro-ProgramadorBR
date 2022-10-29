 let inputAdultos = document.getElementById("adultos")
 let inputcrianca = document.getElementById("crianca")
 let inputduracao = document.getElementById("duracao")

  let resultado = document.getElementById('resultado')

  function calc(){
    let adultos = inputAdultos.value
    let criancas = inputcrianca.value
    let duracao = inputduracao.value

    let carne   = carnePorPessoa(duracao)
    let alcool  = alcoolPorPessoa(duracao)
    let bebida  = bebidasPorPessoa(duracao)

    let totalCarne = carne * adultos + (carne /2 * criancas)

    let totalAlcool = alcool * adultos 

    let totalBebidas = bebida * adultos + (bebida /2 * criancas)

    resultado.innerHTML = `<p>${totalCarne / 1000} Kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.round(totalAlcool / 355)} Latas de Cervejas de 355ml</p>`
    resultado.innerHTML += `<p>${Math.round(totalBebidas / 2000)} Garrafas de 2l de refrigerante</p>`
}

function carnePorPessoa(value){
    if(value >= 6){
        return 650
    } else {
        return 400
    }
}
function alcoolPorPessoa(value){
    if(value >= 6){
        return 2000
    } else {
        return 1200
    }
}
function bebidasPorPessoa(value){
    if(value >= 6){
        return 1000
    } else {
        return 1500
    }
}


