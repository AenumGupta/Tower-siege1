const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;

var  slingShot;

function preload(){
   polygonImg=loadImage("polygon.png"); 
}

function setup(){
    var canvas=createCanvas(1000,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,790,1200,20);
    ground1 = new Ground(480,600,340,15);
    ground2 = new Ground(830,450,250,15);

    //bottom S1
    box1 = new Box(360,300);
    box2 = new Box(400,300);
    box3 = new Box(440,300);
    box4 = new Box(480,300);
    box5 = new Box(520,300);
    box6 = new Box(560,300);
    box7 = new Box(600,300);
    
    //third row S1
    box8 = new Box(400,250);
    box9 = new Box(440,250);
    box10 = new Box(480,250);
    box11 = new Box(520,250);
    box12 = new Box(560,250);
    
    //second row S1
    box13 = new Box(440,150);
    box14 = new Box(480,150);
    box15 = new Box(520,150);

    //top S1
    box16 = new Box(480,50);

    //bottom S2
    box17 = new Box(750,300);
    box18 = new Box(790,300);
    box19 = new Box(830,300);
    box20 = new Box(870,300);
    box21 = new Box(910,300);

    //second row S2
    box22 = new Box(790,250);
    box23 = new Box(830,250);
    box24 = new Box(870,250);

    //top S2
    box25 = new Box(830,200);

    //ball
    
}

function draw(){
background(60, 46, 46)
Engine.update(engine);
text("Drag the Hexagonal Stone and Release it,to launch it towards the block",10,1000);

ground.display();
ground1.display();
ground2.display();

fill (103, 209, 234);
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();


fill (255, 190, 196)
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();

fill(0, 228, 208)
box13.display();
box14.display();
box15.display();

fill(128, 125, 120)
box16.display();

fill (103, 209, 234);
box17.display();
box18.display();
box19.display();
box20.display();
box21.display();

fill (255, 190, 196)
box22.display();
box23.display();
box24.display();

fill(0, 228, 208)
box25.display();



drawSprites();
}