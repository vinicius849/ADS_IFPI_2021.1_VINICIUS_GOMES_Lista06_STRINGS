const input = require('prompt-sync')()

function main(){
    const frase = input('Digite uma frase ou texto: ')
    let frase_criptografada = ' '
    i = 0;

    while(i < frase.lenght){
        if(frase[i] === "a" || "A"){
            frase_criptografada = frase_criptografada + '_'
        }else{
            frase_criptografada = frase[i]
        }
        i++
    }

    console.log(frase_criptografada)

}

main()