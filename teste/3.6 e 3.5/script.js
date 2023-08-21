var alturaDoUsuario = prompt("Qual é a sua altura? (em metros)");
var pesoDoUsuario = prompt("Qual é o seu peso? (em kg)");

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

function pulaLinha() {
    document.write("<br>");
}

function calculaIMC(altura, peso) {
    return peso / (altura * altura);
}

var imcDoUsuario = calculaIMC(alturaDoUsuario, pesoDoUsuario);

mostra("Seu IMC é: " + imcDoUsuario);

var nomeDoUsuario = prompt("Qual é o seu nome?");
var idadeDoUsuario = prompt("Quantos anos você tem?");

function calculaDiasDeVida(idade) {
    return idade * 365;
}

function calculaBatimentos(dias) {
    return dias * 24 * 60 * 80;
}

var diasDeVida = calculaDiasDeVida(idadeDoUsuario);
var batimentos = calculaBatimentos(diasDeVida);

mostra("Olá, " + nomeDoUsuario + "!");
mostra("Você já viveu " + diasDeVida + " dias de vida.");
mostra("Seu coração já bateu " + batimentos + " vezes. Haja coração!");
