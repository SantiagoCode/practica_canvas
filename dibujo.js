var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho = d.width;
var botoncito = document.getElementById("botoncito");
// botoncito.addEventListener(click, mallas);


function dibujante(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

// dibujante("blue", 20, 200, 200, 20);

function mallas()
{
  var texto = document.getElementById("texto");
  var valor = texto.value;
  var valorTexto = parseInt(valor);
  // var trazos = 30;
  var start = 0;
  var end = 0;
  var space = ancho / valorTexto;

    console.log(space);
    console.log(ancho);
    console.log(valorTexto);

  for (var i = 1; i <= valorTexto; i++)
  {
    dibujante("blue", 0, start, end, 300);
    start = start + space;
    end = end + space;

    if (i == valorTexto) {
      start = 0;
      end = 0;

      for (var i = 1; i <= valorTexto; i++) {
        dibujante("red", start, 0, 300, end);
        start = start + space;
        end = end + space;
      }
    }
  }
}
