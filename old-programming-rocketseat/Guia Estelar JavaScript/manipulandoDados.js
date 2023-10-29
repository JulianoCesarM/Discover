// Type conversion coersion
let number = "10"
console.log(typeof number)
number = Number(number)
console.log(typeof number)
number = String(number)
console.log(typeof number)

console.log(typeof ("9" + 6))

//Contando caracteres e digitos
let word = "Paralelepipedo"
console.log(word.length)

number = 1234
console.log(number.length) // Não funciona em tipo Number só em String
console.log(String(number).length)

//Casas decimais
number = 156.489456

console.log(number.toFixed(2).replace(".", ","))
console.log(Number(number.toFixed(2).replace(".", ","))) // Não é possivel usar replace em um tipo Number

//Maiúsculas e minúsculas
let phrase = "Programar é muito bacana!"
console.log(word.toLowerCase())
console.log(word.toUpperCase())

// Separando strings
let myArray = phrase.split(" ")
console.log(myArray)

//Encontrando palavras em frases
console.log(phrase.includes("Bacana"))
console.log(phrase.includes("bacana"))

//Criando array com construtor (objeto)

myArray = new Array(10)
console.log(myArray)
myArray = new Array("a", "b", "c")
console.log(myArray)

//Elementos do Array
console.log(
  [
    "a",
    { type: "array" },
    function () {
      return "alo"
    },
  ].length
)
console.log(
  [
    "a",
    { type: "array" },
    function () {
      return "alo"
    },
  ][2]()
) // Da também para acessar uma posição e rodar uma função se necessário [2]()

//Strings para arrays
word = "manipulação"
console.log(Array.from(word))

//Manipulando arrays
let techs = ["html", "css", "js"]

//adiciona um elemento no final do array
techs.push("nodejs")
console.log(techs)
//adiciona um elemento no começo do array
techs.unshift("sql")
console.log(techs)
//retira um elemento do final do array
techs.pop()
console.log(techs)
//retira um elemento do começo do array
techs.shift()
console.log(techs)

techs = ["html", "css", "js", "nodejs", "sql"]

//recebe como argumentos a posição de início e a posição do fim da parte que você quer selecionar
console.log(techs.slice(1, 2))
//recebe como argumentos a posição de início e a quantidade de elementos que você quer remover
console.log(techs.splice(1, 2))

//encontra o index do valor que recebe como argumento em um array
console.log(techs.indexOf("nodejs"))
