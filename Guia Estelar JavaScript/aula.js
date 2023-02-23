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
let numbers = 1234
console.log(numbers.length) // Não funciona em tipo Number só em String
console.log(String(numbers).length)

//Casas decimais
let numberDec = 156.489456

console.log(numberDec.toFixed(2).replace(".", ","))
console.log(Number(numberDec.toFixed(2).replace(".", ","))) // Não é possivel usar replace em um tipo Number
