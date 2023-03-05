var info = false

function button(x,y){
  push();
  rectMode(CENTER)
  textAlign(CENTER)
  stroke(127, 141, 212);
  textFont(fontRegular)
  strokeWeight(5)
  fill(247, 200, 246)
  rect(x,y,200,40,10);
  fill(127, 141, 212);
  strokeWeight(0)
  textSize(width/50)
  text("Learn More",x,y+5);
  pop();
  if (abs(mouseX-x)<100 && abs(mouseY-y)<20 && mouseIsPressed){
    info = true
  }
}


function exit(x,y){
  push();
  fill(127, 141, 212);
  strokeWeight(0)
  textSize(width/30)
  text("X",x,y);
  pop();
  if (abs(mouseX-x)<20 && abs(mouseY-y)<20 && mouseIsPressed){
    info = false
  }
}

function preload(){
  profile = loadImage('assets/me.png')
  fontRegular = loadFont('assets/GoldplayAlt-Bold.ttf');
  abt = loadImage('assets/info.PNG')
}

function setup() {
  createCanvas(1024/1, 768/1);
  rectMode(CENTER); imageMode(CENTER); angleMode(RADIANS)
  
}

function draw(){
  background(167, 181, 252);
  main();
  button(width/1.775,height/1.575)
  if (info){
    push();
    textAlign(CENTER)
    strokeWeight(10)
    stroke(127, 141, 212);
    fill(247, 200, 246)
    rect(width/2,height/2,width-100,height-100,10)
    image(abt,width/2,height/2,width-120,height-200)
    pop();
    exit(width/1.1,height/8)
  }
}

