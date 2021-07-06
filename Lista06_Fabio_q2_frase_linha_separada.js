const input = require('prompt-sync')()

function main(){
    let frase = input('Escreva uma frase: ');

    console.log(palavra(frase));
}

function palavra(f){
    let r = '';
    for(let i = 0; i < f.lenght;i++){
        r += f[1];
        if (f[1] === ' '){
            console.log(r);
            r = ' ';
        }
    }
    return r;
}

main()