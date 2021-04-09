const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var hero;
var monster;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12;
var slingshot;

function preload(){
  
}

function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(450,500,1100,20);
  hero = new Hero(200,330,250,150);
  monster = new Monster(900,330,170,170);

  box1 = new Box(450,300,50,70);
  box2 = new Box(450,200,50,70);
  box3 = new Box(450,100,50,70);
  box4 = new Box(450,0,50,70);

  box5 = new Box(550,400,50,70);
  box6 = new Box(550,300,50,70);
  box7 = new Box(550,200,50,70);
  box8 = new Box(550,100,50,70);
  box9 = new Box(550,0,50,70);

  box10 = new Box(650,200,50,70);
  box11 = new Box(650,100,50,70);
  box12 = new Box(650,0,50,70);

  slingshot = new SlingShot(hero.body,{x:200,y:200});
}

function draw() {
  background(220);  

  Engine.update(engine); 
  ground.display();
  hero.display();
  monster.display();

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

  drawSprites();

}
function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(hero.body, {x:200,y:330});
    slingshot.attach(hero.body);
  }
}
function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingshot.fly();
}