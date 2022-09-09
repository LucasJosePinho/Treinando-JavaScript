function res() {
    var nome = window.prompt('Qual é o nome do aluno?')
    var nota1 = Number(window.prompt(`Primeira nota de ${nome}`))
    var nota2 = Number(window.prompt(`Segunda nota de ${nome}`))
    media = (nota1+nota2)/2
    if (media<3) {
        var vrf = 'abaixo de 3,0'
        var sit = 'REPROVADO'
    } else if (media>=3 && media<=6) {
        var vrf = 'entre 3,0 e 6,0'
        var sit = 'em RECUPERAÇÃO'
    } else {
        var vrf = 'acima de 6,0'
        var sit = 'APROVADO'
    }
    var tex = window.document.getElementById('texto')
    tex.innerHTML = `
    <p><strong>Analisando a situação de ${nome}</strong></p>
    <p>Com as notas ${nota1} e ${nota2}, a média é ${media}</p>
    <p>Com média ${vrf}, o aluno está ${sit}</p>`
}