function calcula() {
    var nome = window.prompt('Qual é o produto que você está comprando?')
    var valor = Number(window.prompt(`Qual o preço do ${nome}?`))
    var texto = window.document.getElementById('texto')
    var desc = valor*10/100
    texto.innerHTML = `<p><strong><font size="6">Calculando desconto de 10% para ${nome}</font></strong></p>\n<p>O preço original era R$ ${valor}</p>\n<p>Você acaba de ganhar R$ ${desc} de desconto (-10%).</p>\n<p>No fim, você vai pagar R$ ${valor-desc} no produto ${nome}</p>`
}