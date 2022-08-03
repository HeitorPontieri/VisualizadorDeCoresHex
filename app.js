'use strict'

function MudarBackgn(){
  
    const cor = document.getElementById('cor').value.toUpperCase()
    const body = document.getElementById('body')
    body.style.backgroundColor = `#${cor}`
    
    
    if ( cor == 'VERMELHO' ) {
        body.style.backgroundColor = '#990000'
    }
    else if ( cor == 'AZUL' ) {
        body.style.backgroundColor = '#00008B'
    }
    else if ( cor == 'AMARELO' ) {
        body.style.backgroundColor = '#EEAD2D'
    }
    else if ( cor == 'VERDE' ) {
        body.style.backgroundColor = '#006400'
    }

}

const botao = document.getElementById('botao').addEventListener('click',MudarBackgn)

