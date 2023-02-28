//Estruturas de repetição

// For
for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    continue // pula a execução do momento
  }

  if (i == 9) {
    break // para a execução do loop
  }
  console.log(i)
}

// While

let i = 0

while (i <= 10) {
  console.log(i)
  i++
}

// For...of
let name = "Juliano"
let names = [["J", "o", "ã", "o"], "mayk", "pedro"]

for (let char of name) {
  console.log(char)
}
for (let name of names) {
  console.log(name)
}

// For..in
let person = { name: "Juliano", age: 30, weight: 88.9 }
for (let property in person) {
  console.log(property)
  console.log(person[property])
}
