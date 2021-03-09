const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, polygon1, slingShot;

function preload() {
    
}


function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(400,470,30,40);
    box2 = new Box(435,470,30,40);
    box3 = new Box(470,470,30,40);
    box4 = new Box(505,470,30,40);
    box5 = new Box(540,470,30,40);
    box6 = new Box(575,470,30,40);
    box7 = new Box(435,430,30,40);
    box8 = new Box(470,430,30,40);
    
    box9 = new Box(505,430,30,40);
    box10 = new Box(540,430,30,40);
    box11= new Box(470,390,30,40);
    box12= new Box(505,390,30,40);
    box13 = new Box(490,350,30,40);
    polygon1 = new polygon(100,350,30,40);
    ground = new Ground(500,500,400,20);
    //launcherObject=new launcher(polygon1.body,{x:235,y:420})
    slingshot = new SlingShot(polygon1.body,{x:100, y:320});
}


function draw(){
    background(0);
    fill(255);
    textSize(20)
    text("Drag the Hexagonal Stone and Release it to Launch it towards the Blocks for Playing Second chance press Space.", 20,200);
    
    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();         
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();    
    polygon1.display(); 
    slingshot.display();
    //launcherObject.display();



}


function mouseDragged(){
    Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode === 32){
     slingshot.attach(polygon1.body);

    }
}


