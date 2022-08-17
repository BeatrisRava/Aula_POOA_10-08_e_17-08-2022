// aula 02 - 17/08

//definiçao da funçao 
// function oi(){
//     console.log("OIE!")
// }

// // essa é a chamada da função 
// oi()

//exemplo
// function soma (a,b){
//     if(a !== 0 & b !== 0)
//     return a + b;
// }
// const res = soma (0,0);

// soma()

// função triplo
// const triplo = function (n = 5){
//     return n * 3
// }

// // function triplo (n = 5) {
// //     return n * 3;
// // }

// resultados da função triplo para
// console.log(triplo(7)); // resulta 21
// console.log(triplo()); // resulta 15
// console.log(triplo(undefined)); // resulta 15
// console.log(triplo(null)); // resulta 0
// console.log(triplo("abc")); // resulta nan

//arrow function
//const hello = () => console.log("hello")

//const dobro = (valor) => valor * 2

// const exibeoi = nome => console.log('Oi, ${nome}')
// exibeoi('Renata')

// const DevolveUmValor = () => 3
// console.log(DevolveUmValor())
// console.log(DevolveUmValor)

//  let umaFuncao = function (){
//      console.log('Fui armazenada em uma variavel')
//  }
//  umaFuncao()

// //função de alta ordem pois recebe funçoes como paramentro
// function f (funcao) {
//     //callable
//     funcao()
// }


// //função de alta ordem pois recebe funçoes como paramentro
// function g(){
//     function outraFuncao(){
//         console.log("Fui criado por G")
//     }
//     return outraFuncao
// }
// const gResult = g()

// f(g)
// f(g())                                         

// // console.log(gResult)
// //gResult() ou g()() para chamar a função

// function f() {
//      let nome = "Ana"
//      function f(){
//         console.log(nome)
//      }
//      g()
// }
// f()


// uma pessoa que se chama joao e que tem 17 anos
// let pessoa = {
//     nome: "Joao",
//     idade: 17
// }

// //console.log(pessoa)
// console.log("Meu nome é " + pessoa.nome)
// console.log("Minha idade é " + pessoa. idade + " anos")

// uma pessoa que se chama maria, tem 21 anos e mora na rua b, numero 121
let pessoa = {
    nome: "Maria",
    idade: 21,
    //objeto de JSON alinhado
    endereco: {
        rua: "Rua b",
        numero: 121
    }
}

//console.log(pessoa)
console.log("Meu nome é " + pessoa.nome)
console.log("Minha idade é " + pessoa. idade + " anos")
console.log("Moro na " + pessoa.endereco.rua + ", numero: " + pessoa.endereco.numero)

// uma concessionaria tem CNPJ e endereço.
// ela possui um carro em estoque. Ele tem marca, modelo e ano de fabricação

let concessionaria = {
    cnpj: 934843984,
    endereco: {
        rua: "Rua Maravilha",
        numero: 344
    },
    carros:{
        marca: "BMW",
        modelo: "X7",
        anpfabric: "2020"
    }

}



