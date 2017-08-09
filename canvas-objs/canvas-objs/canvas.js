var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

//square/rectangle
//x, y, width, height
c.fillStyle = 'red'
c.fillRect(100, 100, 100, 100);
c.fillStyle = 'pink'
c.fillRect(200, 200, 100, 100);

//Line
//moveTo takes x,y
c.beginPath();
//invis without stroke method
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(400, 300);
//any css color value rga, hexidecimal, etc..
c.strokeStyle = "blue";
c.stroke();

//arc
c.beginPath();
c.arc(300, 300, 30, 0, Math.PI * 2, false);
c.strokeStyle = "black";
c.stroke();

// loop to create shapes
for(var i = 0; i < 100; i++) {
  var x = Math.random() * window.innerWidth;
  var y = Math.random() * window.innerHeight;
  c.beginPath();
  c.arc(x, y, 30, 0, Math.PI * 2, false);
  c.strokeStyle = 'green';
  c.stroke();
}
