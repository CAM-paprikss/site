function setup() {
  createCanvas(620, 420);
  background(255);
}

let x =100;
let y = 100;
let taille = 300;
let taille2 = 100;

function draw() {
  if (mouseIsPressed) {
    mouseX > x &&
    mouseX < x + taille &&
    mouseY > y &&
    mouseY < y + taille2
    fill(0);
    stroke(0);
    strokeWeight(5);
    strokeCap(ROUND); // extrémités arrondies
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}
     
}
