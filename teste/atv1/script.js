function pulaLinha() {
    document.write("<hr>");
}

var mostra = function (frase) {
    document.write(frase);
    pulaLinha();
};

// Cálculos de consumo e preço de combustível
var g = 40;
var dG = 480;

var a = 40;
var dA = 300;

var precoA = 2.40;
var precoG = 2.90;

var consumoG = dG / g;
var consumoA = dA / a;

var precoKMA = consumoA / precoA;
var precoKMG = consumoG / precoG;

document.write("Consumo gasolina: " + consumoG + "<br>");
document.write("Consumo alcool: " + Math.round(consumoA) + "<br>");
document.write("Preço alcool: " + Math.round(precoKMA) + "<br>");
document.write("Preço gasolina: " + Math.round(precoKMG) + "<br>");

function pulaLinha() {
    document.write("<hr>");
}

var mostra = function (frase) {
    document.write(frase);
    pulaLinha();
};

var ano = 2012;

mostra("Eu nasci em: " + (ano - 25));
mostra("Adriano nasceu em: " + (ano - 26));
mostra("Paulo nasceu em: " + (ano - 32));

mostra("Olá mundo");
mostra("Este é o meu segundo programa");
mostra("Esta mensagem aparece no log");

var peso = 75;
var altura = 1.72;
var imc = peso / (altura * altura);

function calculaIMC(altura, peso) {
    return peso / (altura * altura);
}

mostra("Meu IMC é: " + Math.round(imc));

var pesoDoPrimo = 83;
var alturaDoPrimo = 1.76;
var imcDoPrimo = pesoDoPrimo / (alturaDoPrimo * alturaDoPrimo);

mostra("O IMC de meu primo é: " + Math.round(imcDoPrimo));
mostra("Ele ainda está " + Math.round((imcDoPrimo - 18.5)) + " pontos acima do limite da magreza");

var distanciaObesidadeSevera = 35 - imc;
mostra("Você está a " + Math.round(distanciaObesidadeSevera) + " pontos de distância da obesidade severa");

mostra("Meu IMC é " + calculaIMC(altura, peso));

