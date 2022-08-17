// aula 02 - 17/08

//definiçao da funçao 
function oi(){
    console.log("OIE!")
}

// essa é a chamada da função 
oi()

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
const hello = () => console.log("hello")

//const dobro = (valor) => valor * 2

// const exibeoi = nome => console.log('Oi, ${nome}')
// exibeoi('Renata')

// const DevolveUmValor = () => 3
// console.log(DevolveUmValor())
// console.log(DevolveUmValor)

let umaFuncao = function (){
    console.log('Fui armazenada em uma variavel')
}

umaFuncao()

//função de alta ordem pois recebe funçoes como paramentro
function f (funcao) {
    //callable
    funcao()
}