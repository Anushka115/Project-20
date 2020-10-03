var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);
 // createSprite(400, 200, 50, 50);
  speed=random(55,60);
  weight=random(400,1500);
  car = createSprite(50,200,50,50);
  wall = createSprite(1500,200,60,height/2);
  car.velocityX = speed

}

function draw() {
  background(255,255,255);  
  text(car.x - wall.x, 50,100)
  text(car.width/2+wall.width/2, 50,150)
  if(wall.x-car.x < wall.width/2+car.width/2){ 
    car,velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22509;
    if(deformation>180)
    {
      car.shapeColor = color(255,0,0)
    }

    if(deformation<180 && deformation>100);
    {
      car.shapeColor=color(230,230,0)
    }
    
    if(deformation<100){
   
     car.shapeColor = color(0,255,0) 
     
    }
    
    }
    if(car.isTouching(wall)){
      car.velocityX = 0
    }
  drawSprites();
}
