class poligono {
  constructor(altura, largura) {
    this.altura = altura
    this.largura = largura
  }
  get area() {
    return this.#calculararea()
  }
  #calculararea() {
    return this.altura * this.largura
  }
}
let poligono = new poligono(50, 60)
console.log(poligono.area)
