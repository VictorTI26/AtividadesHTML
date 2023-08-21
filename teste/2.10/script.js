var pulaLinha = function() {
    document.write("<br><br><hr>");
};

var mostra = function(frase) {
    document.write("<big>" + frase + "</big>");
    pulaLinha();
};

var ano = 2012;
mostra("Eu nasci em: " + (ano - 25));
mostra("Adriano nasceu em: " + (ano - 26));
mostra("Paulo nasceu em: " + (ano - 32));
