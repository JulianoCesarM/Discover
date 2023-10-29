/* variáveis
    Para entender variáveis podemos pensar nelas como nomes simbólicos para algum valor, atalhos de código ou identificadores. 

    Para criar uma variável, podemos usar uma das palavras reservadas: var, let e const, por exemplo: var clima = "quente", onde var é a palavra que simboliza a criação da variável, clima é o nome da variável, o sinal de igual denota que a variável está recebendo um valor e "quente" é a string que está sendo recebida. 

    As variáveis declaradas com "var" e "let" podem ter seu valor mudado, já a const não.
*/
var clima = "Quente"
clima = "Frio"
console.log(clima)

let clima2 = "Frio"
clima2 = "Quente"
console.log(clima2)

const clima3 = "Quente"
// clima3 = "Frio"
console.log(clima3)
console.log("O valor da variavel 'CONST'(Constante) não pode ser alterado")

/* Tipos dinâmicos
    O JavaScript é uma linguagem fracamente tipada e dinâmica, ou seja, ao declarar uma variável não é necessário estabelecer um tipo específico e o tipo do valor da variável pode mudar conforme o código.
*/
// Fortemente tipada   let clima4: String
let clima4 = "nublado"
clima4 = 59
console.log(typeof clima4)

/* Scope e var
    O Scope ou Escopo determina a visibilidade de uma variável em um código, e para entender scope precisamos primeiramente entender block statement, que é o código presente dentro de chaves. O escopo do var é global, ou seja, uma variável declarada com var poderá ser usada em todo o código.
*/
{
  let x = 0
  console.log(x)
}

{
  // var é global e, tambem local
  console.log("> existe y antes do bloco", y)
  {
    var y = 0
  }
  console.log("> existe y antes do bloco", y)

  // Scope: var, por de baixo dos panos o javascript pega o "var y" nesse exemplo o "var w" e joga antes da primeira chamada(movimento chamado de hoisting), criando a variavel mas nao á definindo, como o exemplo abaixo.

  var w
  console.log("> existe w antes do bloco", w)
  {
    w = 0
  }
  console.log("> existe w antes do bloco", w)
}
//Scope: let e const, não é possivel fazer o mesmo movimento que o exemplo do var, let e const só funciona dentro do bloco
let a = 1
{
  // criando um let dentro de um bloco, não interfere no bloco superior
  let a = 0
  console.log("a =", a)
}
console.log("> existe a antes do bloco", a)

let b
{
  {
    {
      {
        {
          // A variavel b caso nao tenha sido criada dentro desse escopo, vai subir os escopos acima até encontrar o "b" em algum lugar.
          b = 0
          console.log("b =", b)
        }
      }
    }
  }
}
console.log("> existe b antes do bloco", b)

/* Nomeando variáveis

  Para nomearmos variáveis corretamente e de um jeito inteligente, precisamos saber de algumas coisas, como: JavaScript é case-sensitive (sensível à letras maiúsculas e minúsculas) e aceita a cadeia de caracteres Unicode, podendo receber acentuações. 
  Em um nome de variável em JS você pode: Iniciar com caracteres especiais, iniciar com letras e colocar acentos, lembrando sempre que letras maiúsculas e minúsculas fazem a diferença. 
  Em contraste, você não pode: Iniciar com números e colocar espaços vazios. Idealmente você deve colocar nomes significativos, que fazem sentido na aplicação, explicando o que a variável é, usando camel case, onde a primeira palavra de uma frase é toda minúscula, e as subsequentes não se separam por espaço e tem a primeira letra maiúscula, por exemplo: oNomeDessaVariável, ou usando o snake_case que seria substituir o "espaço" por um underline e usar nomes em inglês. 
*/
let Álisson = "Álisson"
let Alisson = "Alisson"
let alisson = "alisson"
let álisson = "álisson"
let $varName = 2
let _id = true
// São todas variaveis diferentes
