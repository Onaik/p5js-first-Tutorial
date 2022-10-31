
var widthSlider

function preload() {
  // Load model with normalise parameter set to true
  cubye = loadModel('Models/cubye.obj', true);
  cubye2 = loadModel('Models/cubye2.obj', true );
  slider = createSlider(0,100,40);
  slider.position(100,100);
  slider.style('width','80px');
  widthSlider = createSlider (3,100,40)
  widthSlider.position(40,40)
  

}

function setup() {
  createCanvas(500, 500, WEBGL);
 
}

function draw() {
  background(200);

  fill("Honeydew")
  stroke("White")
  rect(-80, -40, 330, 290,)
  fill("midnightblue")                                       
  stroke("honeydew")
  rect(-030,-120,40,40)
  fill("midnightblue")
  stroke("Honeydew")
  rect(40,-120,40,40)
  fill("midnightblue")
  rect(40,-200,40,40)
  fill("midnightblue")
  rect(-030,-200,40,40)
  fill("antiquewhite")
  rect(-200,-60,40,5)
  fill("black")
  rect(-185,-80,8,80)
  fill("antiquewhite")
  rect(-200,40,40,5)
  fill("black")
  rect(-185,30,8,80)
  fill(200,200,40)
  rect(-200, -180, 100,10)
  fill(200,200,200)
  rect(-200,-180,20,10)
  fill(100,50,100)
  rect(130,-200, 100,120)
 /* fill("blue")
  stroke("honeydew")
  rect(-030,-120,20,20)
  fill("blue")
  stroke("Honeydew")
  rect(40,-120,20,20)
  fill("blue")
  rect(40,-200,20,20)
  fill("blue")
  rect(-030,-200,20,20)*/
  translate(50,100)
  cylinder(widthSlider.value(),slider.value())

 
  

  let val = slider.value();
  


 
  //have a slider with multiple files depicting multiple extrudes

}

