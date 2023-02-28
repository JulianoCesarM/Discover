// If e Else
let condição = true

if (condição) {
  console.log("True")
  //apenas será executado o bloco de código caso condição seja true
} else {
  console.log("False")
  // apenas será executado o bloco de código caso condição do if seja false
}

let temperature = 36.9
let highTemperature = temperature >= 37.5 // isso resultara em true ou false
let mediumTemperature = temperature < 37.5 && temperature >= 37 // isso resultara em true ou false

if (highTemperature) {
  console.log("Febre alta")
} else if (mediumTemperature) {
  console.log("Febre moderada")
} else {
  console.log("Saudável")
}

//Switch
let expression = ""

switch (
  expression // puxa a expressão para o switch
) {
  case "a": // confere se o valor da expressão é o correto
    console.log("a")
    break // para a execução do switch apenas se verdadeiro
  case "b":
    console.log("b")
    break
  default: // caso nenhum valor seja o correto, realizará a
    //instrução dentro de si.
    console.log("default")
    break
}

function calculate(number1, operator, number2) {
  let result = 0

  switch (operator) {
    case "+":
      result = number1 + number2
      break
    case "-":
      result = number1 - number2
      break
    case "*":
      result = number1 * number2
      break
    case "/":
      result = number1 / number2
      break
    default:
      console.log("não implementado")
      break
  }

  return result
}

console.log(calculate(5, "%", 8))

//Throw e Try/Catch

function sayMyName(name = "") {
  if (name === "") {
    throw "Nome é obrigatório"
  }

  console.log(name)
}
function sayMyLastName(lastName = "") {
  if (lastName === "") {
    throw new Error("Sobrenome é obrigatório")
  }
  console.log(lastName)
}

try {
  sayMyName("juliano")
  sayMyLastName("")
} catch (e) {
  console.log(e)
}
console.log("após ao try/catch")
