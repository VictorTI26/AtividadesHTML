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
