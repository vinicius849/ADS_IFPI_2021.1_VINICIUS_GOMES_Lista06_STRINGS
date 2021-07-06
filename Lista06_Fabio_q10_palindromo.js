const input = require('prompt-sync')()

function main(){
    let palavra = input('Informe uma palavra: ');

    if (palindroma(palavra) === true){
        console.log('Esta palavra é uma palíndroma.')
    }else{
        console.log('Não é uma palavra palíndroma.')
    }
}

function palindroma(p){
    let r = '';
    for(let i = p.lenght - 1; i >= 0; i--){
        r += p[i];
    }
    if (p === r){
        return true;
    }else{
        return false;
    }
}

main()

palindroma()
    

