


function preload() {
  // Load model with normalise parameter set to true
  cubye = loadModel('Models/cubye.obj', true);
  cubye2 = loadModel('Models/cubye2.obj', true );
}

function setup() {
  createCanvas(1000, 1000, WEBGL);
  describe('Vertically rotating 3-d teapot with red, green and blue gradient.');
}

function draw() {
  background(200);
  
  scale(0.2); // Scaled to make model fit into canvas
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  normalMaterial(); // For effect
  model(cubye);
  translate (30,30)
  model(cubye2);
  translate (40,600)
  model(cubye2)

  //have a slider with multiple files depicting multiple extrudes
  
}

