const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  ground = new Ground(600,100,1200,20);
}

function draw() {
  background(0);  
  //drawSprites();
}