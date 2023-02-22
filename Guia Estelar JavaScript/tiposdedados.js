/* String
    O tipo de dados String consiste em uma cadeia de caracteres, ou seja, textos. Para denotar string no JavaScript são usados aspas duplas ( " " ), aspas simples ( ' ' ) e template literals ou template strings ( ), template literals permitem textos multilinhas e expressões de linguagem com os caracteres ${ }, por exemplo: console.log(A soma de duas unidades é ${1+1}), já as outras não, por exemplo: console.log("Isso é um texto").

*/
console.log("aspas duplas")
console.log("aspas simples('')")
console.log(`expressões de linguagem com os caracteres  ${("soma ", 1 + 1)}`)

/* Number
    No JavaScript temos 4 tipos de números, os inteiros (por exemplo: 13), os reais ou float (por exemplo: 83.1), o Not a Number (NaN) e o infinito (Infinity).
*/
console.log(33)
console.log(12.5)
console.log(15 / "sda")
console.log(Infinity)

/* Boolean
    No JavaScript, um dado boolean pode ter apenas 2 valores, verdadeiro (true) e falso (false).
 */
console.log(true)
console.log(false)

/*Undefined vs null
    No JavaScript temos o tipo de dados Undefined, que representa valores indefinidos, e o tipo de dados null, que são muitas vezes confundidos. A diferença dos dois é que null é considerado como um objeto vazio, ou seja, algo indefinido não existe, já algo null existe mas não tem valor algum. 
*/
console.log(null == undefined)

/* Object
    O tipo de dado Object é estrutural, contendo atributos, ou propriedades, e métodos, ou funcionalidades. Um objeto é denotado com os caracteres { }, atributos e métodos com nome: valor . Por exemplo { nome: "João", idade: 20 }.

*/
console.log({
  name: "Mayk",
  idade: 36,
  andar: function () {
    console.log("andar")
  },
})

/* Array
    O tipo de dados Array, ou vetor, também é estrutural, e consiste em uma lista de dados agrupados, um Array é denotado com os caracteres [ ] , por exemplo: [ "Leite", "Ovos", "Manteiga", 1, 2 ].
*/
console.log(["leite", "Ovos", 2, 5.15, true, null])

/* 
    Conforme o ECMAScript Standard (o padrão do orgão que padroniza o JavaScript) temos 9 tipos de dados organizados em 4 categorias: Primitive, Primitive Value, Structural e Structural Primitive. 
    Os primitivos são: String, Number, Boolean, Undefined, Symbol, BigInt. 
    Os estruturais são: Object e Function. 
    Além destes, temos o primitivo estrutural que consiste apenas no dado null
*/
