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
var alfredo;
var desaparecedor;
var alimentado;
var piscandodementira;
var fome

function preload(){
  salinhadajanta = loadImage("./imagem falando/background.png");
  comidinha = loadImage("./imagem falando/cenoura.webp");
  eunahoradajanta = loadImage("./imagem falando/Rabbit-01.png");
  piscandodementira = loadAnimation("./imagem falando/blink_1.png","./imagem falando/blink_2.png","./imagem falando/blink_3.png");
  alimentado = loadAnimation("./imagem falando/eat_0.png","./imagem falando/eat_1.png","./imagem falando/eat_2.png","./imagem falando/eat_3.png","./imagem falando/eat_4.png");
  fome = loadAnimation("./imagem falando/sad_1.png","./imagem falando/sad_2.png","./imagem falando/sad_3.png")

  piscandodementira.playing = true;
  alimentado.playing = true;

  piscandodementira.looping = true;
  alimentado.looping = false;

  fome.looping = false;
}

function setup() 
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;

  piscandodementira.frameDelay = 15;
  alimentado.frameDelay = 15;
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
  imageMode(CENTER);
  textSize(50)
  terra = new Terra(200,690,600,20);
  acorda = new Rope(6, {x: 245, y: 35});

  papinha = Bodies.rectangle(300,300,15,50);
  World.add(world,papinha);
  cartilagem = new Cartilagem(acorda, papinha);
  alfredo = createSprite(250,630,100,100);
  alfredo.scale = 0.2;
  alfredo.addAnimation("piscando", piscandodementira);
  alfredo.addAnimation("comendo", alimentado);
  alfredo.addAnimation("treinocomfome", fome)
  alfredo.changeAnimation("piscando");

desaparecedor = createImg("./imagem falando/cut_btn.png");
desaparecedor.position(220,30);
desaparecedor.size(75,75);
desaparecedor.mouseClicked(barrigacheia);

}

function draw() 
{
  background(51);
  image(salinhadajanta, 250, 350, 500, 700);
  Engine.update(engine);
   terra.artista();
   acorda.show();
   if(papinha!== null){
    image(comidinha,papinha.position.x, papinha.position.y, 50, 80);
   }
   if(entregado(papinha,alfredo) === true){
    alfredo.changeAnimation("comendo")
   }
   if(papinha!== null && papinha.position.y>=650){
    alfredo.changeAnimation("treinocomfome")
    papinha = null
   }

   drawSprites()
}

function barrigacheia(){
  acorda.break();
  cartilagem.sumiu();
  cartilagem = null
}

function entregado(corpo,sprite){
if(corpo!== null){
  var oquenossepara = dist(corpo.position.x,corpo.position.y,sprite.position.x,sprite.position.y);
  if(oquenossepara<=80){
    World.remove(engine.world,papinha);
    papinha = null
    return true
  }
  else{
    return false
  }
}
}