var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0
var ground,invisibleGround

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
 createCanvas(600,600)
  
  monkey = createSprite(10,576,20,50);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(300,580,600,20);

  
  invisibleGround = createSprite(300,590,600,20)
 
  ground.x = ground.width /2;
  
 bananaGroup = new Group() 
 rockGroup = new Group()
  
    
}


       
function draw() {
 background("lightblue");
  textFont("Georgia")
  
  text ("score " + score,530,30)
  
  score = score+Math.round(getFrameRate()/60)
  
       
  if(score<100){
      
      ground.velocityX = -4
      
      }
      else{
        
      ground.velocityX = -4*score/100  
        
      }
   if(keyDown("space") && monkey.y>450) {
    monkey.velocityY = -12;
    
  }
  monkey.velocityY = monkey.velocityY + 0.65
  
  
  if(monkey.isTouching(bananaGroup)){
    bananaGroup.destroyEach();
    
  }
  
  if(ground.x<0){
    
    ground.x = ground.width/2
  }
  monkey.collide(invisibleGround)
  
  rocky();
  fruity();
  drawSprites();
}



function rocky(){
 if (frameCount % 300 === 0) {
    rock = createSprite(600,576,40,10);
    rock.addImage(obstacleImage)
    rock.scale = (0.25)
    rock.velocityX = -4
    rock.depth = monkey.depth
    monkey.depth = monkey.depth+1
    rock.lifetime = 197
    rockGroup.add(rock)
    }  
  }

function fruity(){
 if (frameCount % 80 === 0) {
    banana = createSprite(600,576,40,10);
    banana.addImage(bananaImage)
    banana.y = Math.round(random(350,400))
    banana.scale = 0.17
    banana.velocityX = -6
    banana.depth = monkey.depth
    monkey.depth = monkey.depth+1
    banana.lifetime = 197
    bananaGroup.add(banana)
    }  
  }





