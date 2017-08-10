var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

var mouse = {
  x: undefined,
  y: undefined
}

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var maxRadius = 40;
var colorArr = [
  '#000000',
  '#333333',
  '#FF358B',
  '#01B0F0',
  '#AEEE00'
];

window.addEventListener('mousemove', function(event){
  mouse.x = event.x
  mouse.y = event.y
});

window.addEventListener('resize', function(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init()
});

function Circle(x, y, dx, dy, radius){
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRadius = radius;
  this.color = colorArr[Math.floor(Math.random() * colorArr.length)];

  this.draw = function (){
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
  }

    this.update = function(){

      if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
          this.dx = -this.dx;
      } else if ( this.y + this.radius > innerHeight || this.y - this.radius < 0) {
          this.dy = -this.dy;
        }

        this.x += this.dx
        this.y += this.dy

        //interactivity
        if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50){
            if(this.radius < maxRadius){
                this.radius += 1
            }
        }else if (this.radius > this.minRadius){
          this.radius -= 1
        }

        this.draw();
      }
};

var cirArray = [];

function init(){

  cirArray = [];

  for(i = 0; i < 888; i++){
    var radius = Math.random() * 3 + 1;
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var dx = (Math.random() - 0.5) * 3;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dy = (Math.random() - 0.5) * 3;
    cirArray.push(new Circle(x, y, dx, dy, radius))
  }
};

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for(var i = 0; i < cirArray.length; i++){
    cirArray[i].update();
  }

};
animate();
init();
