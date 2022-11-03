<<<<<<< HEAD
let models = []
let modelSlider
let amountSlider
let amountXSlider
let cubeRotateXSlider
let cubeRotateYSlider
let scaleSlider1
let animating = false;
let cubeXRotateSpeed
let animatebutton

let h = 0
let speed = .1

function preload() {
  for (let i = 0; i <= 2; i++) {
    models[i] = loadModel("assets/" + i + ".obj");
  }
}

function setup() {
  createCanvas(1500, 600, WEBGL);
  console.log(models);

 

  //sliders
  modelSlider = createSlider(0, 2, 0, 1)
  modelSlider.class ("modelSlider") 
  amountSlider = createSlider (1,10,1,1)
  amountSlider.class ("amountSlider")
  amountXSlider = createSlider (1,20,1,1)
  amountXSlider.class ("amountXSlider")
  cubeRotateXSlider = createSlider (0,50,40)
  cubeRotateXSlider.class ("cubeRotateXSlider")
  cubeRotateYSlider = createSlider (0,50,40)
  cubeRotateYSlider.class ("cubeRotateYSlider")
  scaleSlider1 = createSlider (1,8,1,1)
  scaleSlider1.class ("scaleSlider1")
  cubeXRotateSpeed = createSlider (.1,1,.3,.1)
  cubeXRotateSpeed.class =("cubeXRotateSpeed")

  //buttons
 animatebutton = createButton("animate")
  animatebutton.mousePressed(toggleanimation)

  //button.mousePressed(animating=true)

=======

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

function toggleanimation() {

  animating = !animating
}
function draw() {
  background(200);

  speed = cubeXRotateSpeed.value()
console.log("h:"+h+" spd:"+speed);

  // problem is the next line...
  // the variable "animating" is  never true...
  // it's set to false at the start of the sketch
  // and never changed anywhere.
  // come back over...
    if (animating) {
      h += speed;
      cubeRotateXSlider.value(h);
      if (h >= 50|| h <= 0) {
        speed *= -1;
      }
    }




  /* to toggle a boolean back and forth. ...
  variable = !variable
  */

  push();

   for (let index = 0; index < amountSlider.value(); index++) {
    translate(30,0);
    rotateX(cubeRotateXSlider.value())
    rotateY(cubeRotateYSlider.value())
    scale(scaleSlider1.value())
     
    model( models[modelSlider.value()] );
     pop();

     push();
     for (let index = 0; index < amountXSlider.value(); index++) {
      translate(0,30);
       model( models[modelSlider.value()] );
       pop();
     }
   }
  //model( models[modelSlider.value()] );
  let val = modelSlider.value()
  switch (val) {
    case 0:
      rotateX(cubeRotateXSlider.value())
      normalMaterial();
      translate(30,0)
      scale(scaleSlider1.value(), scaleSlider1.value())
      model( models[0] );

      break;
 
      case 1:
        rotateX(cubeRotateXSlider.value())
        normalMaterial();
        scale(scaleSlider1.value(),scaleSlider1.value())
        model(models[1])


        break;

        case 2:
          rotateX(cubeRotateXSlider.value())
          normalMaterial();
          scale(scaleSlider1.value(), scaleSlider1.value())
          model(models[2])

      


  }
=======

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

>>>>>>> 5d3386d85104693d00dc94edc55e1598682dae09
}

