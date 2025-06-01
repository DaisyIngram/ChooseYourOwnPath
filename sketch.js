let frame1
let frame2
let frame3
let frame4
let frame5
let frame6
let frame7
let frame8
let frame9
let frame10
let step
let stepX = []
let stepY = []
let timer = 0
let increment = 1
let randomAngle = random(-90, 90);

function preload(){
  frame1 = loadImage("frame1.jpg") 
  frame2 = loadImage("frame2.jpg") 
  frame3 = loadImage("frame3.jpg") 
  frame4 = loadImage("frame4.jpg") 
  frame5 = loadImage("frame5.jpg") 
  frame6 = loadImage("frame6.jpg") 
  frame7 = loadImage("frame7.jpg") 
  frame8 = loadImage("frame8.jpg") 
  frame9 = loadImage("frame9.jpg") 
  frame10 = loadImage("frame10.jpg") 
  step = loadImage("footstep.png")

}
  

function setup() {
  createCanvas(windowWidth, windowHeight);
  step.resize(50,0)
   angleMode(DEGREES);
   imageMode(CENTER);
}


function draw() {
  background(220);

  timer = timer + increment

  image(frame1, windowWidth/2, windowHeight/2, windowWidth, windowHeight)

  

  if (timer >= 200){
    image(frame2, windowWidth/2, windowHeight/2, windowWidth, windowHeight)}

  if (timer >= 400){
    image(frame3, windowWidth/2, windowHeight/2, windowWidth, windowHeight)}

  if (timer >= 600){
    image(frame4, windowWidth/2, windowHeight/2, windowWidth, windowHeight)}
      
  if (timer >= 800){
   image(frame5, windowWidth/2, windowHeight/2, windowWidth, windowHeight)}

  if (timer >= 1000){
   image(frame6, windowWidth/2, windowHeight/2, windowWidth, windowHeight)}

  if (timer >= 1200){
    image(frame7, windowWidth/2, windowHeight/2, windowWidth, windowHeight)}

  if (timer >= 1400){
    image(frame8, windowWidth/2, windowHeight/2, windowWidth, windowHeight)}

  if (timer >= 1600){
    image(frame9, windowWidth/2, windowHeight/2, windowWidth, windowHeight)}
        
  if (timer >= 1800){
    image(frame10, windowWidth/2, windowHeight/2, windowWidth, windowHeight)}

   if (timer === 2000){
    timer = 0
   }

    for (let i = 0; i < stepX.length; i++) {
     image(step, stepX[i], stepY[i])
   }


   
   translate(width / 2, height / 2); // Center the image
  

}
    
function mousePressed() { 



  
  
  push();
 
  //translate(width / 2, height / 2);
  // imageMode(CENTER);
  // rotate(PI / 180 * 45);
  image(step, mouseX, mouseY, step.width, step.height) 
  
   stepX.push(mouseX)
   stepY.push(mouseY)
   //stepSizes.push(random(20, 100));
   //rotate(step, random(20, 100));
  
  pop();

  // if (timer2 ==100){
  // step.resize(0,0);
  // image(step, mouseX, mouseY)
  // }
}