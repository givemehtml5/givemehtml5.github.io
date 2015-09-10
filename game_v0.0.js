var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle="#CEECF5";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle="#000000";
ctx.fillText("Hello World", canvas.width/2, canvas.height/2);

