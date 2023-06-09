const pilotos = ["Senna", "Prost", "Schumacher", "hamilton"]

//Busca pela indexação
console.log(pilotos[0])
console.log(pilotos[3])

//Tamanho do array
console.log(pilotos.length)

//Iteravel
for (let piloto of pilotos) {
  console.log(piloto)
}

//Adicionando elemento
pilotos.push("Alonso")
console.log(pilotos)

//Encontrar um elemento
const senna = pilotos.find((piloto) => piloto === "Senna")
console.log(senna)

//Deletar elemeto

pilotos.splice(1, 1)
console.log(pilotos)
