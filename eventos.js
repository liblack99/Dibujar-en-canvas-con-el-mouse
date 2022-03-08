
document.addEventListener("mousedown", presionarMouse);
document.addEventListener("mouseup", soltarMouse);
document.addEventListener("mousemove", moverMouse);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var estado;

var xm, ym;
var color = "black"

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function presionarMouse(evento)
{
  estado = 1
  xm = evento.layerX;
  ym = evento.layerY;
}

function moverMouse(evento)
{
  if (estado == 1)
  {
    dibujarLinea(color, xm, ym, evento.layerX, evento.layerY, papel);
    xm = evento.layerX;
    ym = evento.layerY;
  }

}
function soltarMouse(evento)
{
  estado = 0;
  xm = evento.layerX;
  ym = evento.layerY;
}
