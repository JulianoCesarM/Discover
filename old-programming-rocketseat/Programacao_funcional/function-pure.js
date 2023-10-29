// Função impura
//Exem 1 - Depende de dado externo (Math), não passado como argumento
function calculateCircunference(radius) {
  return Math.PI * (radius + radius)
}

// Exem 2 - Alterando um dados externo
let person = {
  name: "Rafael Camarda",
  age: "Jovem",
}

function changeName(name)[
  person.name = name
]

// Funcao Pura
// Exem 1
const calculateCircunference = function(PI, radius){
  return PI*(radius+radius)
}

//Com arrow function
const calculateCircunference = (PI, radius) => PI * (radius + radius)

//Exem 2
const changePersonName = (person, name) => ({...person, name})