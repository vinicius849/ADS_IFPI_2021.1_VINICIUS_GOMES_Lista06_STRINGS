const input = require('prompt-sync')()

function substrair(nome, inicio, final){
inicio = inicio - 1
console.log(nome.substrair(inicio, final))

}

function main(){
    const nome = input('Escreva um nome: ');
    const inicio = input('Escreva um corte: ');
    const final = input('Escreva um final para o corte: ');
}

    substrair(nome, inicio, fim)

main()
