let num = document.querySelector("input#fnum")//colocar fora das functions para funcionar em todas
let lista = document.querySelector("select#flista")//pegando a lista
let res = document.querySelector("div#res")//pegando o resultado
let valores = []

function isNumero(n){//para saber se é um número e se está entre 1 e 100
    if(Number(n) >= 1 && Number(n) <= 100){
        return true

    }else {
        return false
    }

}
// recebeu um número e uma lista que no caso é o valores[]
function inLista(n, l) {//para saber se tem algum número inexistente ou repetido na lista
    if (l.indexOf(Number(n)) !=-1){
        return true
    }else {
        return false
    }
}




function adicionar(){
if(isNumero(num.value) && !inLista(num.value, valores)){//ele só vai adicionar se os dois forem vdd
//para saber se é um número//e para saber se o número digitado NÂO está em lista
valores.push(Number(num.value))//Adicionar elemento no array
let item = document.createElement('option')//Criando elemento option
item.text = `Valor ${num.value} adicionado`//Escrevendo valor //uma string com possibilidade de interpolação // Não precisa colocar Number() pq já vai ficar como uma string
lista.appendChild(item)//Adiconando valor em um select
res.innerHTML = "" //Para Limpar o resultado após adionar um outro valor 
}else{
    alert("Valor inválido ou já encontrado na lista")
}
num.value = "" //para apagar o input logo dps de adicionar um número//é um atributo!
num.focus() //Para assim que limpar o número ele vai colocar o foco dentro do input para colocar logo em seguida o número sem ser preciso ir lá e clicar com o mouse
}

function finalizar(){
if(valores.length == 0){
    alert("Adicione valores antes de finalizar!")
}else {
    let tot = valores.length //para saber quantos números cadastrados tem
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0
    for(let pos in valores){//laço de percurso//para saber qual é o menor e o maior valor cadastrado
        soma += valores[pos]//vai somando os valores 
        if(valores[pos] > maior)
        maior = valores[pos]
        if(valores[pos] < menor)
        menor = valores[pos]
    }

    media = soma/tot//soma dividido pelo total que é a média!
    res.innerHTML = ""//Para zerar o valor
    res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
    res.innerHTML += `<p>O Maior valor informado foi ${maior}</p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
    res.innerHTML += `<p>A Média dos valores digitados é ${media}</p>`
}
}