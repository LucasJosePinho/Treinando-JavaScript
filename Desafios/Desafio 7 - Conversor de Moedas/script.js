function conv() {
    var cotacao = Number(window.prompt('Antes de mais nada. Quanto está a cotação do dólar agora?'))
    var carteira = Number(window.prompt('Quantos R$ você tem na carteira? '))
    var text = window.document.getElementById('texto')
    text.innerHTML = `<p>Na cotação de US$${cotacao} para R$${carteira}</p> \n <p>Terá o total de US$${carteira/cotacao}</p>`
}