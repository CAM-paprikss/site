function setup() { let canvas = createCanvas(600, 350);  background(255);
    canvas.parent("canvas-container");
}


let x =0;
let y = 0;
let taille = 600;
let taille2 = 350;

function draw() {
  if (
  mouseIsPressed &&
  mouseX > x &&
  mouseX < x + taille &&
  mouseY > y &&
  mouseY < y + taille2
) {
  fill(0);
  stroke(0);
  strokeWeight(5);
  strokeCap(ROUND);
  line(pmouseX, pmouseY, mouseX, mouseY);
}
  }

