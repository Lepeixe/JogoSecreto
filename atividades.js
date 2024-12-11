
//  **** Criar uma função que exibe "Olá, mundo!" no console. ****
// function verificarChute() {
//    alert ('Olá Mundo!');
// }


//**** Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console. ****
// let nome = prompt ('Digite seu nome aqui:');

// function verificarChute(nome) {
//     alert ('Olá ' + nome +'.');
//  }

//  verificarChute(nome);


// **** Criar uma função que recebe um número como parâmetro e retorna o dobro desse número. *****

// let numero = prompt ('Digite o numero aqui:');

// function verificarChute(numero) {
//     let resultado  = numero * 2;
//     alert (resultado);
//  }

//  verificarChute(numero);


// **** Criar uma função que recebe três números como parâmetros e retorna a média deles. ****

// function calcularMedia(a, b, c) {
//     return (a + b + c) / 3;
//   }

//   let media = calcularMedia(4, 17, 10);
//   console.log(media);

// **** Criar uma função que recebe dois números como parâmetros e retorna o maior deles. ***

// function encontraMaior (a, b) {
//     return a > b ? a : b;
// }

// let numeroMaior = encontraMaior (20, 10);
// alert (numeroMaior);

// **** Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo ****

// function encontraMultiplo (a) {
//     return a * a;
// }

// let numeroMultiplo = encontraMultiplo (3);
// alert (numeroMultiplo);

// **** Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro. ****

// function massaCorporal(peso, altura,) {
//     let imc = peso / (altura * altura);
//     alert (imc.toFixed(2));
// }

// massaCorporal ('100', '1.80');

// **** Crie uma função que calcule o valor do fatorial de um número passado como parâmetr ****


// function calcularFatorial(numero) {
//     if (numero === 0 || numero === 1) {
//         return 1;
//     }

//     let fatorial = 1;
//     for (let i = 2; i <= numero; i++) {
//         fatorial *= i;
//     }

//     return fatorial;
// }

// let numero = 5;
// let resultado = calcularFatorial(numero);
// alert(`O fatorial de ${numero} é ${resultado}`);




// **** Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80. ****

// function conversaoDolarParaReal (valorEmDolar) {

// let cotacaoDolar = 6.10;
// let valorEmReais = valorEmDolar * cotacaoDolar;
// return valorEmReais.toFixed(2);

// }

// let valorEmDolar = 23;
// let valorEmReais = conversaoDolarParaReal(valorEmDolar);
// alert (`${valorEmDolar} dolares equivalem a ${valorEmReais}.`);

// *** Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro. ***

// function calcularAreaPerimetroSalaRetangular(altura, largura) {
//     let area = altura * largura;
//     let perimetro = 2 * (altura + largura);
    
//     alert (`Área da sala: ${area} metros quadrados`);
//     alert (`Perímetro da sala: ${perimetro} metros`);
//   }
  
//   // Exemplo de uso
//   let altura = 3; // em metros
//   let largura = 5; // em metros
//   calcularAreaPerimetroSalaRetangular(altura, largura);

 // *** Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14. ***

// function calcularAreaPerimetroSalaCircular(raio) {
//   let area = Math.PI * raio * raio;
//   let perimetro = 2 * Math.PI * raio;
  
//   console.log(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
//   console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);
// }

// // Exemplo de uso
// let raio = 4; // em metros
// calcularAreaPerimetroSalaCircular(raio);


// **** Crie uma função que mostre na tela a tabuada de um número dado como parâmetro. ***

function mostrarTabuada(numero) {
  for (let i = 1; i <= 10 ; i++) {
    let resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
  }
}

// Exemplo de uso
// let numero = 7;
mostrarTabuada('8');