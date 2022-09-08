function compra() {
    var nomep = window.prompt('Que produto você está comprando?')
    var preco = Number(window.prompt(`Quanto custa o ${nomep} que você está comprando?`))
    var paga = Number(window.prompt(`Qual foi o valor a pagar ${nomep}`))
    var troco = paga - preco
    window.alert(`Você comprou um ${nomep} que custou R$${preco}\nDeu R$${paga} e vai receber R$${troco} de troco.\nVolte Sempre!`)
}