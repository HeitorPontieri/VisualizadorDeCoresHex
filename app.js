'use strict'

function MudarBackgn(){
  
    const nomecor = document.getElementById('cor').value.toUpperCase()
    const body = document.getElementById('body')
    body.style.backgroundColor = `#${cor}`
    
    if ( nomecor == 'VERMELHO' ) {
        body.style.backgroundColor = '#990000'
    }
    else if ( nomecor == 'AZUL' ) {
        body.style.backgroundColor = '#00008B'
    }
    else if ( nomecor == 'AMARELO' ) {
        body.style.backgroundColor = '#EEAD2D'
    }
    else if ( nomecor == 'VERDE' ) {
        body.style.backgroundColor = '#006400'
    }

}

const botao = document.getElementById('botao').addEventListener('click',MudarBackgn)

