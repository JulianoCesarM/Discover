class atleta {
  peso
  categoria
  constructor(peso) {
    this.peso = peso
  }
  definirCategoria() {
    if (this.peso <= 50) {
      this.categoria = "Infantil"
    } else if (this.peso <= 65) {
      this.categoria = "Juvenil"
    } else {
      this.categoria = "Adulto"
    }
  }
}
class lutador extends atleta {
  constructor(peso) {
    super(peso)
  }
  defnirCategoria() {
    if (this.peso <= 50) {
      this.categoria = "Pluma"
    } else if (this.peso <= 60) {
      this.categoria = "Leve"
    } else if (this.peso <= 75) {
      this.categoria = "Meio-leve"
    } else {
      this.categoria = "pesado"
    }
  }
}
