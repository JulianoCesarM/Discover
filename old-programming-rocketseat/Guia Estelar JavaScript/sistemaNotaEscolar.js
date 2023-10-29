// Exercicio1 - Sistema de notas escolares

function getMedia(nota) {
  let mediaA = nota >= 90 && nota <= 100 ? "A" : false
  let mediaB = nota >= 80 && nota <= 89 ? "B" : false
  let mediaC = nota >= 70 && nota <= 79 ? "C" : false
  let mediaD = nota >= 60 && nota <= 69 ? "D" : false
  let mediaF = nota >= 0 && nota <= 59 ? "F" : false

  if (mediaA) {
    return console.log(mediaA)
  } else if (mediaB) {
    return console.log(mediaB)
  } else if (mediaC) {
    return console.log(mediaC)
  } else if (mediaD) {
    return console.log(mediaD)
  } else if (mediaF) {
    return console.log(mediaF)
  } else {
    return console.log("Nota inválida!!!")
  }
}

getMedia(100)
getMedia(-5)
getMedia(108)
getMedia(85)
getMedia(78)
getMedia(65)
getMedia(59)
getMedia(20)
