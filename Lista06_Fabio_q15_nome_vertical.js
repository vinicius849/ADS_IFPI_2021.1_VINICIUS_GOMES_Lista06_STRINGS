const input = require('prompt-sync')()

// Escrevendo uma rotina para estabelecer caracteres na vertical
function vertical(nome){
    nome.lenght
    let i = 0
    while(i <= nome.lenght - 1){
        console.log(nome[i])
        i++
    }
}

function main(){
    const nome = input('Escreva uma frase com no máximo 20 caracteres: ');
    vertical(nome)
}
    return nome

