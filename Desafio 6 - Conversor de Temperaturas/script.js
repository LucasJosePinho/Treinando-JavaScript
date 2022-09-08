function conv() {
    var temp = Number(window.prompt('Digite uma temperatura em ºC (Celsius)'))
    var texto = window.document.getElementById('texto')
    texto.innerHTML = `<p><font size="5"><strong> A temperatura de ${temp}ºC, corresponde a... </strong></font></p>\n<p>${temp+273}ºK (Kelvin)</p>\n<p>${temp*1.8+32}ºF (Fahrenheit)</p>`
}