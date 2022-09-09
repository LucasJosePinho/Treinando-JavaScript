function calc(){
    var ano = Number(window.prompt('Qual ano você quer verificar?'))
    if (ano%4 == 0) {
        var resp = 'ANO É BISSEXTO'
    } else {
        var resp = 'ANO NÃO É BISSEXTO'
    }
    var not = window.document.getElementById('nota')
    not.innerHTML = `<p><strong>Analisando o ano de ${ano}...</strong></p>
    \n<p>O ano de ${ano} ${resp}</p>`
    
}