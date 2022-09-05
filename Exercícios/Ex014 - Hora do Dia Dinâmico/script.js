function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} hora`
    if(hora >= 0 && hora < 12){
        //BOM DIA!
        img.src = 'Imagens/manha1200.png'
    } else if (hora >= 12 && hora <18) {
        //BOA TARDE!
        img.src = 'Imagens/tarde1200.png'
    } else {
        //BOA NOITE
        img.src = 'Imagens/noite1200.png'
    }
}