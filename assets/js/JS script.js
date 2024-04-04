console.log("calcular...")

//#manipulação do DOM

// let = local
// var= global
// costant - constante



document.querySelector("#qtde").addEventListener("change", calcular)
document.querySelector("#tipo").addEventListener("change", calcular)



function calcular(){
    const qtde = document.querySelector("qtde").value
    const preco = qtde * 1000

    const tipo = document.querySelector("#tipo").value
    if (tipo == 2) preco += 1000

    const temLayout = document.querySelector("#prototipo_sim").checked
    if (temLayout) preco =+ 1.1

    document querySelector("orçamento").innerText = "R$ " + preco.tofix(2)
}
console.log(qtde)