const input = require('prompt-sync')()

function main(){
    let hora = input('Informe aqui a hora marcada (HH/MM/SS): ');
    console.log(nova_hora(hora));
}

function nova_hora(h){
    let r = (h[0] + h[1]) + ' hora(s) ' + (h[3] + h[4]) + ' minuto(s) ' + (h[6] + h[7]) + ' segundo(s) ';
    return r;

}

main()