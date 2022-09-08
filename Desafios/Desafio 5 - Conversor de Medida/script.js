function converter(){
    var m = Number(window.prompt('Digite uma distância em metros(m)'))
    var conv = window.document.getElementById('conv')
    conv.innerHTML = `<p><strong>A distância de ${m} metros, corresponde a...</strong></p>\n<p> ${m/1000} quilômetros (Km)</p>\n<p> ${m/100} hectômetros (Hm)</p>\n<p> ${m/10} decâmetros (Dam)</p>\n<p> ${m*10} decímetros (dm)</p>\n<p> ${m*100} centímetros (cm)</p>\n<p> ${m*1000} milimetros (mm)</p>`
}