// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10:';
exibirMensagemInicial();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.1});
    
    // (Código abaixo da Web Speech API:)
//    if ('speechSynthesis' in window) {
  //      let utterance = new SpeechSynthesisUtterance(texto);
    //    utterance.lang = 'pt-BR'; 
     //   utterance.rate = 1.1; 
   //     window.speechSynthesis.speak(utterance); 
  //  } else {
   //     console.log("Web Speech API não suportada neste navegador.");
  //   }
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10:');
}

let listaNumeroSorteados =[];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
// console.log (numeroSecreto);
let tentativas = 1;

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeNumerosNaLista = listaNumeroSorteados.length;
    if (quantidadeDeNumerosNaLista == numeroLimite) {
        listaNumeroSorteados = [];
    }
    if (listaNumeroSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    }else{
        listaNumeroSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
   // exibirMensagemInicial();
   // exibirMensagemInicial();
    document.getElementById ('reiniciar').setAttribute('disabled', true);
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(numeroSecreto);
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        exibirTextoNaTela('p', `Voce descubriu o número secreto com ${tentativas} ${palavraTentativas}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'Numero secreto é menor.');
        } else {
            exibirTextoNaTela('p', 'Numero secreto é maior.');
        }
        tentativas++;
        limparCampo();
    }
}
