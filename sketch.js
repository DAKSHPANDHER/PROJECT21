var canvas;
var music;
var box ;
var surface1;
var surface2;
var surface3;
var surface4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1=createSprite(800,0,10,10);
    surface1.shapeColor=green;

    surface2=createSprite(100,100,10,10);
    surface2.shapeColor=blue;

    surface3=createSprite(50,50,50,0,0);
    surface3.shapeColor=yellow;

    surface4=createSprite(200,200,0,0);
    surface4.shapeColor=purple;
    

    //create box sprite and give velocity
    box=createSprite(random(20,750),300,0,0);
    box.shapeColor=white;
    box.velocityX=-1;
}

function draw() {
    background(rgb(169,169,169));

    //create edgeSprite
    edges = createEdgeSprites();
    ball.bounceOff(edges);


    //add condition to check if box touching surface and make it box
if(surface1.isTouching(box)&&box.bounceOff(box)){
    box.shapeColor = green;
    music.play();
}

drawSprites();
}