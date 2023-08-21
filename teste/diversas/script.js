var g = 40;
var dG = 480;


var  a = 40
var dA = 300


var precoA = 2.40
var precoG = 2.90


var consumoG = dG / g;
var consumoA = dA / a


var precoKMA = consumoA / precoA  
var precoKMG = consumoG / precoG
 
document.write("Consumo gasolina: "+ consumoG + "<br>");
document.write("Consumo alcool: "+ Math.round(consumoA)+ "<br>");
document.write("Preço alcool: "+ Math.round(precoKMA) + "<br>");
document.write("Preço gasolina: "+ Math.round(precoKMG) + "<br>");
//--------------------------------------------------------------------
var pulaLinha = function () {
    document.write("<big>"+"<br>"+"<hr>"+"<br>"+"<big>")
}
    var ano=2012;
    document.write("Eu nasci em : "+(ano - 25))
    pulaLinha();
    document.write("Adriano nasceu em : "+(ano - 26))
    pulaLinha();
    document.write("Paulo nasceu em : "+ (ano+32))
    pulaLinha();


//----------------------------------------------------------------------
var mostra = function (frase){
    document.write(frase)
    pulaLinha();
}


var ano = 2012;
mostra("Eu nasci em : "+(ano - 25))
mostra("Adriano nasceu em: "+(ano-26))
mostra("Paulo nasceu em : "+(ano-32))


//----------------------------------------------------------------


document.write("Ola mundo")
dosument.write("Esse é meu segundo programa")
console.log("Esta mensagem aprece no log")


//--------------------------------------------------------------------


var peso = 75 ;
var altura = 1.72;
var imc = peso / (altura*altura);
mostra ("meu IMC é: "+imc);





