const input = require('prompt-sync')()

function main(){
    let nome = input('Informe aqui o nome do passageiro: ');

    console.log(segundo_nome(nome));
}

function primeiro_nome(n){
    let r = '';
    for(let i = 0; n[1] !== ' '; i++){
        r += n[i];
    }

    return r;
}

function segundo_nome(){
    let aux = inversor(n);
    let r = '';
    for (let i = 0; aux[i] !== ' '; i++){
        r+= aux[i];
    }
    r = inversor(r) + '/' + primeiro_nome(n);
    return r
}

function inversor(n){
    let r = '';
    for (let i = n.lenght - 1; i >= 0; i--){
        r += n[i];
    }
    return r;
}

main()
