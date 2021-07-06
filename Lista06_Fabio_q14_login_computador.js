const input = require('prompt-sync')()

function geracao_login(nome){
    nome_separado = nome.split(' ')
    let i = 0; login = ''

    while(i < nome_separado.lenght - 1){
        login = login + (nome_separado[i] [0])
        i++
    }
    console.log(' login', login)

function main(){
    const nome = input('Escreva seu nome: ')
    gerar_login(nome)
}

main()
