console.log ("Hello Node")
console.info("Info")
console.warn("Warn")
console.error("Error")

//váriaveis

var a = 10
let b = 15
const c = 20

a = 'oi'
b = 500 

console.log(a, b)

//Tipos de dados

//string
const name = "Maria"
console.log(typeof name)
//number
const age = 15
console.log(typeof age)
// boolean
const isApproved = false
console.log(typeof isApproved)
//nulo
let lastname = null
console.log(typeof lastname)
// undefined
let address 
console.log(typeof address)
// array
const languages =  ['JavaScripto', 'Python']
console.table(typeof languages)
// objeto
const user = {name: 'Maria', email: 'maria@gmail.com'}
console.log(typeof user)

// Metodos strings 

const fullName = "lucas"

//conta os caracteres da variável
console.log(fullName.length)

//quebra a string conforme o caracter selecionado
const stringToArray = fullName.split(' ')
console.log(stringToArray)

//deixar a string com caracter maiusculos
console.log(fullName.toUpperCase)

//deixar a string com caracter minusculos
console.log(fullName.toLowerCase)

//encontra o indice do inicio da palavra
console.log(fullName.indexOf("do"))

//retira a string pelo indice
console.log(fullName.slice(9, 17))

//métodos de Array
const list = ['a', 'b', 'c', 'd', 'e']

//conta a quantidade de itens do array
console.log(list.length)

//buscar o item pelo nome e traz o indice
console.log(list.indexOf("c"))

//buscar item especifico
console.log(list[2])

//inserir item no array sem método
list[5] = 'f'
console.table(list)

//inserir item no array com método 
console.log(list.push('g'))
console.table(list)

//trazer o ultimo item
console.log(list[list.length] - 1)

//remove o ultimo item do array
list.pop()
console.log(list)

//remove o primeiro item do array
list.shift()
console.log(list)


list.unshift('oi')