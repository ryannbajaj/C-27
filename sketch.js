const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var box1;
var chain;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    bird1 = new Bird(100,100);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(810,160,70,70);

    ground = new Ground(600,height,1200,20);
    platform = new Ground(200, 350, 400, 200);
    
    pig1 = new Pig(810, 320);
    pig2 = new Pig(810,220);
    
    log1 = new Log(810, 250, 300, PI/2)
    log2 = new Log(810, 180, 300, PI/2)
    log3 = new Log(760, 120, 150, PI/7)
    log4 = new Log(870, 120, 150, -PI/7)
    log5 = new Log(200, 400, 150, -PI/7)

    chain1 = new Chain(bird1.body, log5.body);  
}

function draw(){
    background(255);
    Engine.update(engine);
    console.log(bird1);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    bird1.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    platform.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    log5.display();
    chain1.display();
}