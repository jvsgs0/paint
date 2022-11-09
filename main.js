var mouseEvent = "empty";
var lastPositionOfX, lastPositionOfY;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

color = "black";
widthOfiLine = 1;
canvas.addEventListener("mousedown", myMouseDown);

function myMouseDown(e)
{
    color = document.getElementById("color").value;
    widthLine = document.getElementById("widthLine").value;

    mouseEvent = "mouseDown";
}

canvas.addEventListener("mousemove", myMouseMove);
function myMouseMove(e)
{
    PositionMouseX = e.clientX - canvas.offsetLeft;
    PositionMouseY = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthLine;

        console.log("Última poição das coordenadas x e y= ");
        console.log("x = " + lastPositionX + "y = " + lastPositionY);
        ctx.moveTo(lastPositionX, lastPositionY);
    
        console.log("Posição atual das coordenadas x e y= ");
        console.log("x =" + PositionMouseX + "y = " + PositionMouseY);
        ctx.lineTo(PositionMouseX, PositionMouseY);
        ctx.stroke();
    }
    lastPositionX = PositionMouseX;
    lastPositionY = PositionMouseY;
}
canvas.addEventListener("mouseup", myMouseUp);
      function myMouseUp(e)
      {
        mouseEvent = "mouseUP";
      }
      canvas.addEventListener("mouseleave", myMouseLeave);
      function myMouseLeave(e)
      {
        mouseEvent = "mouseleave";
      }



      function clearArea() {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      }