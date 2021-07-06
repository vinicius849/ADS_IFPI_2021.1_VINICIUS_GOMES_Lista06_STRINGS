const input = require('prompt-sync')()

function main(){
    let frase = input('Demontre uma frase: ');
    console.log(algarismos(frase));
}

function algarismos(f){
    let r = '';
}
    for(let i = 0; i < f.lenght; i++){
        if (f[1] === '1'){
            r += ' um';
        }else if (f[1] === '2'){
            r += ' dois';
        }else if (f[1] === '3'){
            r += ' três';
        }else if (f[1] === '4'){
            r += ' quatro';
        }else if (f[1] === '5'){
            r += ' cinco';
        }else if (f[1] === '6'){
            r += ' seis';
        }else if (f[1] === '7'){
            r += ' sete';
        }else if (f[1] === '8'){
            r += ' oito';
        }else if (f[1] === '9'){
            r += ' nove';
        }else if(f[1] === '0'){
            r += ' zero'
        }else{
            r += f[1]
        }
    }

        return r

main()