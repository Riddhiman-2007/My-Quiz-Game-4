var bg,bg2,form,system,code,security;
var score=0;
var bg3 , bg4 , bg5 , bg6 , bg7 , bg8 , bg9 ;

function preload() {
 
  
  bg= loadImage("download.jpg")
  //load image for the treasure background
  bg2= loadImage("treasure.jpg")
  bg3= loadImage("images.jpg")
  bg4= loadImage("bg.png")
  bg5= loadImage("Rishabh Pant.webp")
  bg6= loadImage("ipl.jpg")
  bg7= loadImage("aladdin_cave.jpg")
  bg8= loadImage("zero.jpg")
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();
  background(bg)
  
}

function draw() {
  security.display();
  
// add code for changing the background to the treasure background
  

  if(score === 10) {
    clear()
    background(bg2)
    fill("black")
    textSize(40);
    text(" YOU WIN ",250, 300);
  }

  drawSprites()
 
}