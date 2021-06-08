const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(1500, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(730, 689, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  box1 = new Box(900, 100, 70, 70);
  box2 = new Box(900, 100, 70, 70);
  box3 = new Box(900, 100, 70, 70);
  box4 = new Box(900, 100, 70, 70);
  box5 = new Box(900, 100, 70, 70);
  box6 = new Box(900, 100, 70, 70);
  box7 = new Box(900, 100, 70, 70);
  box8 = new Box(900, 100, 70, 70);

  box9 = new Box(820, 100, 70, 70);
  box10 = new Box(820, 100, 70, 70);
  box11 = new Box(820, 100, 70, 70);
  box12 = new Box(820, 100, 70, 70);
  box13 = new Box(820, 100, 70, 70);

  box14 = new Box(740, 100, 70, 70);
  box15 = new Box(740, 100, 70, 70);
  box16 = new Box(740, 100, 70, 70);

}

function draw() {
  background(bg);
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
  box14.display();
  box15.display();
  box16.display();

  hero.display();
  rope.display();
  monster.display();

  //if(hero.IsTouching(box1) || hero.IsTouching(box2) || hero.IsTouching(box3) || hero.IsTouching(box4) || hero.IsTouching(box5) || hero.IsTouching(box6) || hero.IsTouching(box7) || hero.IsTouching(box8) || hero.IsTouching(box9) || hero.IsTouching(box10) || hero.IsTouching(box11) || hero.IsTouching(box12) || hero.IsTouching(box13) || hero.IsTouching(box14) || hero.IsTouching(box15) || hero.IsTouching(box16)){
    //stroke("black");
    //textSize(20);
    //fill("black");
    //text("Monster Died!! Well done",750,350); 
  //}

}

function mouseDragged(){
  
  Matter.Body.setPosition(hero.body,{x: mouseX, y: mouseY});
  
}


function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(hero.body,{x:400,y:800});
    rope.attach(hero.body);
  }
}

