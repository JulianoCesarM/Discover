/* 
//function_1
// Criando/declarando funções
function createPhrases() {
  console.log("Estudar é muito bom")
  console.log("Paciência e persistencia")
  console.log("Revisão é mãe do aprendizado")
}

// execute, run,call, invoke
createPhrases()
console.log("Fim do programa")


// function expression or function anonymous
// parameters
const sum = function (e, f) {
  console.log(e + f)
}

sum(2, 3) // arguments

//function_2
const sum = function (e, f) {
  let total = e + f
  return total
}
number1 = 34
number2 = 25

console.log(`O numero 1 é ${number1}`)
console.log(`O numero 2 é ${number2}`)
console.log(`O total é ${sum(number1, number2)}`)

//function_3
function makeDrink(fruit1, fruit2) {
  return "Suco de:" + fruit1 + fruit2
}
const glass = makeDrink("banana", "apple")
console.log(glass)

//function_4

let subject = "create video"
function createThink(subject) {
  return subject
}
console.log(subject)
console.log(createThink(subject))

// é diferente de

let subject1
function createThink() {
  subject1 = "study"
  return subject1
}
console.log(subject1)
createThink()
console.log(subject1)


// function histing
sayMyName()

function sayMyName() {
  console.log("mayk")
}

// arrow function
const sayMyName = (name) => {
  console.log(name)
}
sayMyName("Mayk")

// callback function
function sayMyName(name) {
  console.log("Antes do callback")
  name()
  console.log("Depois do callback")
}
sayMyName(() => {
  console.log("estou em uma callback")
})
*/
//function construtors
function Person(name) {
  this.name = name
  this.walk = function () {
    return this.name + " está andando"
  }
}
const mayk = new Person("Mayk")
const joao = new Person("Joao")
console.log(mayk.walk())
console.log(joao.walk())
