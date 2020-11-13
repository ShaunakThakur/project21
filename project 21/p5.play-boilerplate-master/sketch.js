var bullet,wall;
var speed,weight,thickness;
var damage;

function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(50,200,50,50);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background("black");  

  bullet_is_touching_wall();

  drawSprites();
}

function bullet_is_touching_wall(){
  if (bullet.isTouching(wall)){
    bullet.velocityX = 0;

    bullet.collide(wall);
  
    damage = (0.5 * weight * speed * speed)/ (thickness * thickness * thickness);

    if (damage > 10){
      bullet.shapeColor = "green";
    }
    if (damage < 10){
      bullet.shapeColor = "red";
    }
  }
}