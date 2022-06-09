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
var salinhadajanta;
var comidinha;
var eunahoradajanta;

function preload(){
  salinhadajanta = loadImage("./imagem falando/background.png");
  comidinha = loadImage("./imagem falando/cenoura.webp");
  eunahoradajanta = loadImage("./imagem falando/Rabbit-01.png");
}

function setup() 
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
  imageMode(CENTER);
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
  image(salinhadajanta, 250, 350, 500, 700);
  Engine.update(engine);
   terra.artista();
   acorda.show();
   image(comidinha,papinha.position.x, papinha.position.y, 50, 80);
}