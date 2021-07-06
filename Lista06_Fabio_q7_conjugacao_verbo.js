const input = require('prompt-sync')()

function main(){
    let verbo = input('Informe aqui um verbo irreglar terminado em ER: ');
    console.log(conjuga(verbo));
}

function conjuga(v){
    let r = '';
    for(let i = 0; i < v.lenght; i++){
    r += v[i];
    }

    r = r + 'o/n' + r + 'es/n' + r + 'emos/n' + r + 'eis/n' + r + 'em';
    return r
}

main()
