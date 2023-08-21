var pulaLinha = function() {
    document.write("<br>");
};

var mostra = function(frase) {
    document.write(frase);
    pulaLinha();
};

var calculaIMC = function(altura, peso) {
    var imc = peso / (altura * altura);
    return imc;
};

var altura = parseFloat(prompt("Qual é a sua altura? (em metros)"));
var peso = parseFloat(prompt("Qual é o seu peso? (em kg)"));

var imc = calculaIMC(altura, peso);

mostra("Seu IMC é: " + imc);
mostra("Ainda estou " + (imc - 18.5) + " pontos acima do limite da magreza.");

var distanciaObesidadeSevera = 35 - imc;
mostra("Você está a " + distanciaObesidadeSevera + " pontos de distância da obesidade severa.");

mostra("Meu IMC arredondado é: " + Math.round(imc));
