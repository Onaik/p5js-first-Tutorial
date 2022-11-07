
let models = []
let modelSlider
let amountSlider
let amountXSlider
let RotateXSlider
let RotateYSlider
let scaleSlider1
let animating = false;
let cubeXRotateSpeed
let animatebutton

let h = 0
let speed = .1

function preload() {
  for (let i = 0; i <= 6; i++) {
    models[i] = loadModel("assets/" + i + ".obj");
  }
modeltext = loadModel('assets/modeltext.obj', true);
multiply = loadModel('assets/multiply.obj', true);
rotateA = loadModel('assets/rotateA.obj', true);
rotateB = loadModel('assets/rotateB.obj', true);
scaleslider = loadModel('assets/scale.obj', true);

}


function setup() {
  createCanvas(400, 400);
  createCanvas(1500,1620, WEBGL);
  console.log(models);





  //sliders
  modelSlider = createSlider(0, 6, 0, 1)
  modelSlider.class ("modelSlider") 
  amountSlider = createSlider (1,34,1,1)
  amountSlider.class ("amountSlider")
 amountXSlider = createSlider (1,3,1,.001)
  amountXSlider.class ("amountXSlider")
  RotateXSlider = createSlider (0,50,40)
  RotateXSlider.class ("cubeRotateXSlider")
  RotateYSlider = createSlider (0,50,40)
  RotateYSlider.class ("cubeRotateYSlider")
  scaleSlider1 = createSlider (.1,30,4,.1)
  scaleSlider1.class ("scaleSlider1")
  cubeXRotateSpeed = createSlider (.1,1,.3,.1)
  cubeXRotateSpeed.class =("cubeXRotateSpeed")

  //buttons
 animatebutton = createButton("animate")
  animatebutton.mousePressed(toggleanimation)
  animatebutton.class = ("animatebutton")

  //button.mousePressed(animating=true)

}

function toggleanimation() {

  animating = !animating
}
function draw() {


  background(125);
  background(200);


  push();
  fill ("honeydew")
  rect(740,-800, 10, 1500)
  rect(-750, 450, 1500, 10)
  fill ("white")
  rect(740,-700,5, 1300)
  rect(-750, 450, 1500, 5)
fill ("grey")
  rect(740,-500,2, 1000)
  rect(-750,450, 1500, 2)

  fill ("Goldenrod")
  rect(91, 520,60,160)
  rect(-110,520,60,160)
  rect(-510,520,60,160)
  rect(-200,520,60,160)
  rect(-710,520,60,160)

  fill ("black")
  rect(91, 520,50,160)
  rect(-110,520,50,160)
  rect(-510,520,50,160)
  rect(-200,520,50,160)
  rect(-710,520,50,160)


  pop()
  speed = cubeXRotateSpeed.value()
console.log("h:"+h+" spd:"+speed);

  // problem is the next line...
  // the variable "animating" is  never true...
  // it's set to false at the start of the sketch
  // and never changed anywhere.
  // come back over...
    if (animating) {
      h += speed;
      RotateXSlider.value(h);
      if (h >= 50|| h <= 0) {
        speed *= -1;
      }
    }




  /* to toggle a boolean back and forth. ...
  variable = !variable
  */

  push();

   for (let index = 0; index < amountSlider.value(); index++) {
    translate (.2,0);
    rotateX(RotateXSlider.value())
    rotateY(RotateYSlider.value())
   // scale(scaleSlider1.value())

    model( models[modelSlider.value()] );
     pop();

    push();
     for (let index = 0; index < amountXSlider.value(); index++) {
      translate(0,.6);
      scale(scaleSlider1.value(), scaleSlider1.value())
       model( models[modelSlider.value()] );
       pop();
     } 
   }
  //model( models[modelSlider.value()] );
  let val = modelSlider.value()
  switch (val) {
    case 0:
      rotateX(RotateXSlider.value())
      normalMaterial();
      translate(30,0)
      scale(.5,.5)
      scale(scaleSlider1.value(), scaleSlider1.value())
      model( models[0] );

      break;

      case 1:
        rotateX(RotateXSlider.value())
        normalMaterial();
        scale(scaleSlider1.value(),scaleSlider1.value())
        model(models[1])


        break;

        case 2:
          rotateX(RotateXSlider.value())
          normalMaterial();
          scale(scaleSlider1.value(), scaleSlider1.value())
          model(models[2])

          break;

          case 3:
            rotateX(RotateXSlider.value())
            normalMaterial();
            scale(scaleSlider1.value(), scaleSlider1.value())
            model(models[3])

            break;

            case 4:

              rotateX(RotateXSlider.value())
          normalMaterial();
          scale(scaleSlider1.value(), scaleSlider1.value())
          model(models[4])

          break;
      

          case 3:
            rotateX(RotateXSlider.value())
            normalMaterial();
            scale(scaleSlider1.value(), scaleSlider1.value())
            model(models[5])

            break; 
            
            case 3:
            rotateX(RotateXSlider.value())
            normalMaterial();
            scale(scaleSlider1.value(), scaleSlider1.value())
            model(models[6])

            break;


           
  }

  push();
scale(.4)
normalMaterial();
translate(300, -3000)
rotateX(.8)
model(scaleslider);
pop();


  push();
  scale(.4)
  normalMaterial();
 translate (-550,-3000)
  rotateX(.8)
  model(rotateA);
pop();

push();
scale(.4)
normalMaterial();
translate(-280,-3000)

rotateX(.8)
model(rotateB);
pop();




  push();
  scale(.4)
  normalMaterial();
  translate (-1400,-3000)
  rotateX(.8)
  model(multiply);
pop();

  push();
  scale(.2);
  scale(2)
  normalMaterial();
  translate(-2000,-3000)
  rotateX(.8)
  model(modeltext);
  pop();
  
  
 /* fill("Honeydew")
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
//translate(50,100);
  //cylinder(widthSlider.value(),slider.value());

 
  

 // let val = slider.value();
  


 
  //have a slider with multiple files depicting multiple extrudes

}
