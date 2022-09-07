function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src','Imagens/menino-criança.png')
            } else if (idade < 21) {
                img.setAttribute('src','Imagens/menino-jovem.png')
            } else if (idade < 50) {
                img.setAttribute('src','Imagens/adulto.png')
            } else {
                img.setAttribute('src','Imagens/idoso.png')
            }
        } else {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src','Imagens/menina-criança.png')
            } else if (idade < 21){
                img.setAttribute('src','Imagens/menina-jovem.png')
            } else if (idade < 50){
                img.setAttribute('src','Imagens/adulta.png')
            } else {
                img.setAttribute('src','Imagens/idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}