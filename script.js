window.onload = function () {
  var canvas;
  var ctx;
  var delay = 100;
  var xcoord = 0;
  var ycoord = 0;

  init();

  function init() {
    canvas = document.createElement("canvas");
    canvas.width = 900;
    canvas.height = 600;
    (canvas.style.border = "1px solid"), document.body.appendChild(canvas);
    ctx = canvas.getContext("2d");

    refreshCanvas();
  }

  function refreshCanvas() {
    xcoord += 5;
    ycoord += 5;
    ctx.fillRec(0 , 0 , canvas.width , canvas.height)
    ctx.fillStyle = "#ff0000";
    ctx.fillRec( xcoord , ycoord , 100 , 50);
    setTimeout(refreshCanvas, delay)
  }
};
