const input = require('prompt-sync')()

function main(){
    let texto = input('Digite aqui um texto manuscrito: ');

    console.log(`Tamanho do texto: ${texto.lenght} será em caracteres: `)
}

main()