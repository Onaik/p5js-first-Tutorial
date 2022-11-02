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
}
