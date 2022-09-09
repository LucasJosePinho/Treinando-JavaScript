function reaj() {
    var nome = window.prompt('Qual é o nome do funcionário? ')
    var sal = Number(window.prompt(`Qual é o salário de ${nome}`))
    var reaj = Number(window.prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`))
    
    var total = (sal*(reaj/100))+sal
    var not = window.document.getElementById('nota')
    not.innerHTML = `
    <p><strong>${nome} recebeu um aumento salarial!</strong></p>
    <p>O salário atual era de ${sal}</p>
    <p>Com um aumento de ${reaj}%, o salario vai aumentar R$${sal*(reaj/100)} no próximo mês.</p>
    <p>E a partir daí, ${nome} vai passar a ganhar R$${total}.</p>`
}