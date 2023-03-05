function profilePhoto(x,y,scale){
  push();strokeWeight(10);noFill();stroke(127, 141, 212);
  image(profile, x,y,scale/4,scale/4)
  square(x,y,width/3.9,20);pop();

}

function title(x,y,scale){
  push();
  strokeWeight(6)
  stroke(127, 141, 212);
  textFont(fontRegular)
  textSize(scale/20)
  fill(247, 200, 246)
  text("Hello! I'm Corey",x,y)
  textSize(scale/40)
  text("I'm a math student at Carnegie Mellon",x,y+scale/20)
  text("I tutor motivated students in \ncompetition math & coding",x,y+scale/10)
  pop()
}



function main(){
  push();
  for (var i=1;i<=500;i++){
    x = width/2+sin(cos(frameCount/500)+(i+frameCount/20)/20)*(width/2-50)
    y = height/2+tan(cos(frameCount/500)+i/30)*(height/2-50)
    noFill();stroke(147, 161, 232);
    circle(y, x, 500)
  }pop()
  title(width/2.15,height/2.5,width)
  profilePhoto(width/3.75,height/2,width);

}