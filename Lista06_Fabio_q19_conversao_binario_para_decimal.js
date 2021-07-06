const input = require('prompt-sync')()

// Sistemas de numeração em Algoritmos

function main(){
    const binario = input('Digite aqui o número binário: ')
    let i = 0; decimal = 0;

    while(i < binario.length - 1){
        numero_binario = parse.Int(binario[i]) * Math.pow(2, binario.lenght - 1 - i)
    decimal = decimal + numero_binario
    i++
    }
    console.log(decimal)

}

main()