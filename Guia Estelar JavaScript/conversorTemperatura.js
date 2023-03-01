// Exercicio - Celsius to fahrenheit C = ((fahrenheit - 32) * 5) / 9 F = (Celsius * 9) / 5 + 32

function transformDegree(degree) {
  const celsiusExists = degree.toUpperCase().includes("C")
  const fahrenheitExists = degree.toUpperCase().includes("F")

  // Fluxo de erro
  if (!celsiusExists && !fahrenheitExists) {
    throw new Error("Grau não identificado")
  }

  // Fluxo ideal F -> C
  let updateDegree = Number(degree.toUpperCase().replace("F", ""))
  let formula = (fahrenheit) => ((fahrenheit - 32) * 5) / 9
  let degreeSign = "C"

  // Fluxo alternativo C -> F
  if (celsiusExists) {
    updateDegree = Number(degree.toUpperCase().replace("C", ""))
    formula = (celsius) => (celsius * 9) / 5 + 32
    degreeSign = "F"
  }
  return formula(updateDegree) + degreeSign
}

try {
  console.log(transformDegree("59C"))
} catch (error) {
  console.log(error.message)
}
