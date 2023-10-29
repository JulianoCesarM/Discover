// exercicio2 - fluxo de caixa familiar

let family = { receitas: [10054.5, 1256.4], despesas: [4089.4, 1892.5] }
function sum(array) {
  let total = 0

  for (let i of array) {
    total += i
  }
  return total
}
function fluxoCaixa() {
  const calculoReceita = sum(family.receitas)
  const calculoDespesa = sum(family.despesas)

  const total = calculoReceita - calculoDespesa

  total >= 0 ? (balanceText = "positivo") : (balanceText = "negativo")

  console.log(`Seu saldo é ${balanceText}: ${total.toFixed(2)} R$`)
}
fluxoCaixa()
