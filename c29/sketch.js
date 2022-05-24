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
var ground;
var corda
var fruta
var ligacao
var frutaimage
var coelho, coelhoimage
var fundo
var cortar

function preload(){
  fundo = loadImage('coelho/fundo.png')
  frutaimage = loadImage('coelho/fruta.png')
  coelhoimage = loadImage('coelho/coelho1.png')
}

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  var frutaa = {density:0.0001}
  ground = new Ground(200,680,600,20);
  fruta = Bodies.circle(100,100,70,frutaa)
  corda = new Rope(5,{x:100,y:30})
  Composite.add(corda.body, fruta)
  ligacao = new Ligacao(corda, fruta)
  coelho = createSprite(100,590)
  coelho.addImage(coelhoimage)
  coelho.scale = 0.3
  cortar = createImg('coelho/corta.png')
  cortar.position(70,20)
  cortar.size(50,50)
  cortar.mouseClicked(cortaar)

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background(51);
  image(fundo,0,0,500,700)
  push()
  imageMode(CENTER)
  if(fruta!==null){
    image(frutaimage,fruta.position.x,fruta.position.y,70,70)
  }
  pop()
  ground.show();
  
  //ellipse(fruta.position.x,fruta.position.y,40)
  corda.show()
  Engine.update(engine);
 
   drawSprites()
}
function cortaar(){
  corda.break()
  ligacao.dettach()
  ligacao = null
}