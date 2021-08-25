const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint; 

var engine, world;
var box1;
var ball;
var rope;

function setup(){
    var canvas = createCanvas(1600,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,500,50,50);
    box2 = new Box(700,450,50,50);
    box3 = new Box(700,400,50,50);
    box4 = new Box(700,350,50,50);
    box5 = new Box(700,300,50,50);
    box6 = new Box(700,250,50,50);
    box7 = new Box(700,200,50,50);
    box8 = new Box(700,150,50,50);
    box9 = new Box(700,100,50,50);
    ground = new Ground(600,600,1200,20)
    ball = new Ball(200,400,80,80);
    rope = new Rope(ball.body , {x:500, y:50});
}

function draw(){
    background("white");
    Engine.update(engine);
 //   console.log(box2.body.position.x);
   // console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display(); 
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    ground.display();
    ball.display();
    rope.display();
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body , {x: mouseX, y: mouseY});
}