var faces = [];
var xpos = [];
var ypos = [];
var face_scale = [];
var speed = [];

function preload(){
        for(var i=0; i<20; i++){
                faces[i] = loadImage("../img/TOBRIT/faces/face_"+i+".png");
        }
}
function setup() {
        var tobritCanvas = createCanvas(windowWidth, windowHeight);
        tobritCanvas.style('display','block');
        tobritCanvas.parent('TOBRIT_Canvas');
        frameRate(30);

        for(var i=0; i<20; i++){
                xpos[i] = random(0, windowWidth);
                ypos[i] = random(windowHeight + 200);
                face_scale[i] = random(0.3, 0.9);
                speed[i] = random(0.5, 0.9);
        }
}

function windowResized(){
        resizeCanvas(windowWidth, windowHeight);
}

function draw() {
        background(255,255,255);

        for(var i=0; i<20; i++){
                ypos[i] = ypos[i] - speed[i];
                if( ypos[i] < 0 - faces[i].height * face_scale[i]){
                        ypos[i] = windowHeight;
                        xpos[i] = random(0, windowWidth);
                        face_scale[i] = random(0.3, 0.9);
                        speed[i] = random(0.5, 0.9);
                }
                image(faces[i], xpos[i], ypos[i], faces[i].width * face_scale[i], faces[i].height * face_scale[i]);
        }

}