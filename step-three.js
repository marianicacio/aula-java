const lastName = "Correa"
const age = 27 
const shoes = {
    sizes: [
        44, 38, 36, 35
    ],
    brand: "nike",
    since: 1995
}
//array de objeto
const users = [
    {
        name: "Lucas",
        gender: "Male",
        age: 27,
        socialMedias: {
            linkedin: "",
            x: ""
        }
    },
    {
        name: "Maria",
        gender: "Female",
        age: 16,
        socialMedias: {
            linkedin: "",
            x: ""
        }
    }
]
//array de números
const numbers = [1,2,3,4,5]
//array de texto
const brands = ["nike", "adidas", "redley"]

const isAprovved = true
//Contar caracteres 
console.log(lastName.length)
//método em cima de um number, dps em cima de uma string
console.log(age.toString().length)
//percorrer um objeto com o . , puxar o número
console.log(shoes.sizes)
console.log(shoes.sizes[0])
console.log(shoes.sizes[1])
console.log(shoes.sizes[2])
console.log(shoes.sizes[3])
//transformar em tabela
console.table(shoes.sizes)
//trazer a maria
console.log(users[1])
//trazer a maria
const filterUser = users.filter(user => user.name === "Maria")

console.log(filterUser)
//trazer uma maria só
const findUser = users.filter(user => user.name === "Maria")

const namer = "Lucas do Espirito Santo Correa"
console.log(namer.slice(0,5))
console.log(namer.slice(24,31))

const arrayName = namer.split(" ")

console.log(arrayName)

const fistName = arrayName [0]

const finallyName = arrayName[arrayName.length -1]

console.log(fistName, finallyName)

const doubleNumbers = numbers.map((num) => {
    return num * 2
})

console.log(doubleNumbers)