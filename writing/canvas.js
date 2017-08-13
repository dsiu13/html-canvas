var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// dash-length for off-range
dashLen = 220,

// we'll update this, initialize
dashOffset = dashLen,

// some arbitrary speed
speed = 5,

x = 30, i = 0;

// the text we will draw
  txt = "Canvas Writing Test",

c.font = "50px Comic Sans MS, cursive, TSCu_Comic, sans-serif";

// thickness of the line
c.lineWidth = 5;

// to avoid spikes we can join each line with a round joint
c.lineJoin = "round";

// increase realism letting background (f.ex. paper) show through
c.globalAlpha = 2/3;

// some color, lets use a black pencil
c.strokeStyle = c.fillStyle = "#000";

(function loop() {
  // clear canvas for each frame
  c.clearRect(x, 0, 60, 150);

  // calculate and set current line-dash for this char
  c.setLineDash([dashLen - dashOffset, dashOffset - speed]);

  // reduce length of off-dash
  dashOffset -= speed;

  // draw char to canvas with current dash-length
  c.strokeText(txt[i], x, 90);

  // char done? no, the loop
  if (dashOffset > 0) requestAnimationFrame(loop);
  else {

    // ok, outline done, lets fill its interior before next
    c.fillText(txt[i], x, 90);

    // reset line-dash length
    dashOffset = dashLen;

    // get x position to next char by measuring what we have drawn
    // notice we offset it a little by random to increase realism
    x += c.measureText(txt[i++]).width + c.lineWidth * Math.random();

    // lets use an absolute transform to randomize y-position a little
    c.setTransform(1, 0, 0, 1, 0, 3 * Math.random());

    // and just cause we can, rotate it a little too to make it even
    // more realistic
    c.rotate(Math.random() * 0.005);

    // if we still have chars left, loop animation again for this char
    if (i < txt.length) requestAnimationFrame(loop);
  }
})();  // just to self-invoke the loop
