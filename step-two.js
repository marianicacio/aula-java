function Soma(numOne, numTwo) {
    return numOne / numTwo
}
console.log('O valor da divição é:',Soma(10,15))

function Soma(numOne, numTwo) {
    return numOne * numTwo
}
console.log('O valor da multiplicação é:',Soma(33,15))

function Soma(numOne, numTwo) {
    return numOne + numTwo
}

console.log('O valor da soma é:',Soma(17,15))

function Soma(numOne, numTwo) {
    return numOne - numTwo
}

console.log('O valor da subtração é:',Soma(15,15))


function ValideNome(name) {
    if (name.length > 15) {
        return "seu pai foi comprar cigarro"
    } else if (name.length > 3) {
        return "nome valido"
    } else {
        return "nome invalido"
    }
}

console.log(ValideNome("whindensons nunes"))

function ValideNome(name) {
    switch (name) {
        case "Maria": return 876876876
        case "Lucas": return 598798798
        case "Carla": return 264969236
        default: "nome não cadastrado"
    }
}

console.log(ValideNome("Maria"))

function AddSr(name) {

    if (typeof(name) === 'string') {
        return `Sr. ${name}`
    } else {
        return "ditite um nome valido"
    }

}

console.log(AddSr("jaoa"))

function Aprovacao(nota) {
    return ((typeof(nota) === 'number') && (nota > 7 ? "Aprovado" : "Reprovado"))
}

console.log(Aprovacao(10))

function Aprovacao(media) {
    return media > 7 ? "Aprovado" : "Reprovado"
}

console.log(Aprovacao(4))

function ValideNota(nota) {
    if (nota > 7) {
        return "Aprovado" 
    } else if (nota >= 5 && nota <= 6) {
        return "Recuperação"
    } {
        return "Reprovado"
    }
}

console.log(ValideNota(10))