var pulaLinha = function(){
    document.write("<br>" + "<hr>" + "<br>");
     };
    
var mostra = function(frase){
     document.write(frase);
     pulaLinha();
     };

var calculaIMC = function(){
    return pesoDoUsuario/(alturaDoUsuario^2);
};
    var nome = prompt ("Digite seu nome: ");
    var alturaDoUsuario = parseFloat(prompt("Bom dia "+nome+" Qual é sua altura? "));
    var pesoDoUsuario = parseFloat(prompt("Qual é seu peso? "));
    var imcDoUsuario = calculaIMC(alturaDoUsuario, pesoDoUsuario);
    mostra("O seu imc é " + Math.round(imcDoUsuario));

    //Tiro ao alvo

    var desenhaAlvo = function(x, y) {
        var raio = 40;
        cor("white");
        circulo(x, y, raio);
        cor("red");
        circulo(x, y, raio-10);
        cor("white");
        circulo(x, y, raio-20);
        cor("red");
        circulo(x, y, raio-30);
        };
       
        var alvoX;
        var alvoY;
        
        var desenha = function() {
        limpa();
        alvoX = sorteia(600);
        alvoY = sorteia(400);
        desenhaAlvo(alvoX, alvoY);
        };

