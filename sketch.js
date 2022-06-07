const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var terra;
var acorda;
var papinha;
var cartilagem;

function setup() 
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  terra = new Terra(200,690,600,20);
  acorda = new Rope(6, {x: 245, y: 30});

  papinha = Bodies.rectangle(300,300,15,50);
  World.add(world,papinha);
  cartilagem = new Cartilagem(acorda, papinha);
}

function draw() 
{
  background(51);
  Engine.update(engine);
   terra.artista();
   acorda.show();
   rect(papinha.position.x, papinha.position.y, 15, 40);
}




