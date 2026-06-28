function setup() {
  createCanvas(620, 400);
  background(255);
}

let x =0;
let y = 0;
let taille = 620;
let taille2 = 400;

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

