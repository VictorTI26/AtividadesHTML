var mostra = function (frase) {
    document.write(frase);
    pulaLinha();
};

var pulaLinha = function () {
    document.write("<br>" + "<hr>" + "<br>");
};

var tabuadaEscolhida = parseInt(prompt("Digite qual tabuada você deseja saber:"));

for (var multiplicador = 1; multiplicador <= 10; multiplicador++) {
    mostra(tabuadaEscolhida + " vezes " + multiplicador + " é igual a " + tabuadaEscolhida * multiplicador);
}
