//Expressões e operadores
let number = 1
;(function () {
  console.log("alo")
})()

/* unário */
number = 1

console.log(++number)

/* binário */
number = 1

console.log(number + 1)

/* ternário */
console.log(true ? "alo" : "nada")

//New - criar um novo objeto
let name = new String("Mayk")
name.surName = "brito"
let age = new Number(32)
console.log(name, name.surName, age)

let date = new Date("2020-12-01")
console.log(date.__proto__)

//Typeof delete

const person = {
  name: "Mayk",
  age: 25,
}
delete person.age

console.log(person)
console.log(typeof "mayk")

//Operadores aritméticos

/* resto da divisão: sinal % */
let remainder
remainder = 11 % 9
console.log(remainder)

/* incremento: sinal ++ */
let increment = 0

console.log(++increment)
console.log(increment)

/* decremento: sinal -- */
let decrement = 0
decrement--
console.log(decrement)

/* exponencial: sinal ** */
console.log(2 ** 3)

//Grouping operator

//com essa precedência, nosso resultado é 17.
let total = 2 + 3 * 5
console.log(total)

// o cálculo mudou a precedência, fazendo nosso resultado tornar-se 25.
total = (2 + 3) * 5
console.log(total)

//Operadores de comparação igual a e diferente de

let one = 1
let two = 2
console.log(one == 1)
console.log(two == "2")
console.log(two == one)
console.log("--------------")
console.log(one != 1)
console.log(two != "2")
console.log(two != one)

//Operadores de comparação estritamente igual e estritamente diferente
console.log(one === 1)
console.log(two === "2")

console.log(one !== 1)
console.log(two !== "2")

//Operadores de comparação maior e menor (igual)

//maior
console.log(one > two)

//maior igual
console.log(one >= 1)
console.log(two >= 1)

//menor
console.log(one < two)

//menor igual
console.log(one <= two)
console.log(one <= 1)
console.log(one <= 0)

//Operadores de atribuição

// Operadores de atribuição (Assignment)
let x

// assignment normal:
x = 1
console.log(x)

// addition assignment (adição):
x += 2
console.log(x)

// subtraction assignment (subtração):
x -= 1
console.log(x)

// multiplication assignment (multiplacação):
x *= 2
console.log(x)

// division assignment (divisão):
x /= 2
console.log(x)

// exponetiation assignment (exponenciação):
x **= 2
console.log(x)

// remainder assignment (resto de divisão):
x %= 2
console.log(x)

//Operadores lógicos
let pao = true
let queijo = true

console.log(pao && queijo)
console.log(pao || queijo)
console.log(!pao)

//Operador condicional ternário

// Café da manhã top
pao = false
queijo = false

const niceBreakfast = pao || queijo ? "Café top" : "Café ruim"

console.log(niceBreakfast)

//maior de 18
age = 20
const canDrive = age >= 18 ? "Can drive" : "Can't drive"
console.log(canDrive)

//Operadores para string
console.log("a" == "a")

let alpha = "alpha"
alpha += "bet"
console.log(alpha + 362)

//Falsy e truthy

/*
	Todos os valores abaixo seriam representados como false em um boolean.
		false
    0
    -0
    ""
    null
    undefined
    NaN
*/

console.log(NaN ? "verdadeiro" : "falso")
/* 
	Todos os valores abaixo seriam representados como false em um boolean.
		true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity
*/
console.log(Infinity ? "verdadeiro" : "falso")
/*
Precedência dos operadores

De cima para baixo, do mais importante ao menos importante.

* grouping                      ( )
* negação e incremento          ! ++ --
* multiplicação e divisão       * /
* adição e subtração            + -
* relacional                    < <= > >=
* igualdade                     == != === !==
* AND                           && 
* OR                            ||
* condicional                   ?:
* assignment (atribuição)       = += -= *= %= 
*/
