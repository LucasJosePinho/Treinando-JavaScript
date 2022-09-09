function calc() {
    var a = Number(window.prompt('Digite o valor de A'))
    var b = Number(window.prompt('Digite o valor de B'))
    var c = Number(window.prompt('Digite o valor de C'))
    var not = window.document.getElementById('nota')
    var delta = ((b**2) - 4*a*c)
    
    not.innerHTML = `<p><strong>Resolvendo Bhaskara</strong></p>\n<p>A equação atual é <strong>${a}x² + ${b}x + ${c} = 0</strong></p>\n 
    <p>O cálculo realizado será  <strong>Δ = ${b}² - 4 . ${a} . ${c}</strong></p>
    <p>O valor calculado foi <strong>Δ = ${delta}</strong></p>`
}