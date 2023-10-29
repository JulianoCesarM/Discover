/*
var name
name = "mike"
console.log(typeof name)

let age, isHuman

age = 18
isHuman = true
console.log(name, age, isHuman)
console.log(`O ${name} tem ${age} anos`)

// Object
const person = {
  name: "John",
  age: 30,
  weight: 88.6,
  isAdmin: true,
}

console.log(`${person.name} tem ${person.age} anos`)

// Array
const animals = ["Lion", "Monkey", { name: "Cat", age: 3 }]
console.log(animals[0])
console.log(animals.length)
console.log(animals[2].name)
*/

// exercicio
var weight
console.log(typeof weight)

{
  let name = "Mayk"
  let age = 23
  let weight = 74.5
  let isSubscribed = true

  console.log(name)
  console.log(age)
  console.log(weight)
  console.log(isSubscribed)
}
{
  let student = { name: "Mayk", age: 23, weight: 74.5, isSubscribed: true }
  console.log(
    `${student.name} de idade ${student.age} pesa ${student.weight} kg.`
  )
  let students = [student]
  console.log(students)
  console.log(students[0])

  const john = {
    name: "john",
    age: 23,
    weight: 74,
    isSubscribed: true,
  }

  students[1] = john
}

console.log(a)
var a = 1
