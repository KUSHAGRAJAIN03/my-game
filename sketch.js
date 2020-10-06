var player,animal,food,water,juice,vitamin,sword,ground1,animalgroup,gameState,ground2,ground3,healthbar,hungerbar;
var thirstbar,e,f;
var health,hunger,thirst,a,b,c,d,coin,coinimg,playerimg,player1img,ground_1,ground_2,ground_3,ground_4,ground_5;
var appleimg,goldappleimg,waterimg,juiceimg,player_img,player_img1,foodgroup,groundgroup,o,g,foodgroup2,foodgroup3,foodgroup4,foodgroup5;
var tiger,wolf,grass,desert,snow,jungle,sea,ground6,jet,jetimg,ground_6;

function preload()
{
   coinimg=loadAnimation("images/coin1.png","images/coin2.png")
   playerimg=loadAnimation("images/player1.png","images/player2.png","images/player3.png","images/player4.png","images/player5.png","images/player6.png","images/player7.png","images/player8.png");
   player1img=loadImage("images/player1.png");
   appleimg=loadImage("images/apple.png");
   goldapple=loadImage("images/goldapple.png");
   waterimg=loadImage("images/water.png");
   juiceimg=loadImage("images/juice.png");
   player_img=loadAnimation("images/player1_1.png","images/player2_2.png","images/player3_3.png","images/player4_4.png","images/player5_5.png","images/player6_6.png","images/player7_7.png","images/player8_8.png");
   player_img1=loadImage("images/player1_1.png");
  // tiger = loadAnimation("tiger.mp4");
  tiger=loadImage("images/TIGER.gif");
  wolf=loadImage("images/WOLF2.gif");
  grass=loadImage("images/grass.png");
  desert=loadImage("images/desert.png");
  snow=loadImage("images/snow.png");
  sea=loadImage("images/sea.png");
  jungle=loadImage("images/jungle.png");
  space=loadImage("images/space.png");
  jetimg=loadImage("images/rocket.png")
}


function setup()
{
    canvas=createCanvas(1000,650);
   // console.log(displayWidth);
    player = createSprite(100,530,50,50);
    //player.addAnimation("player",playerimg);
    player.addImage("player",player1img);
    ground1 = createSprite(3500,540,7000,20);
    ground1.shapeColor="lightgreen";
    //ground1.visible=false;
    ground_1 = createSprite(3500,555,7000,20);
    ground_1.visible=false;
  //  ground.x=ground.width/2;
    ground2=createSprite(10500,540,7000,20);
    ground2.shapeColor="blue";
   // ground2.visible=false;
    ground_2 = createSprite(10500,555,7000,20);
    ground_2.visible=false;
    ground3=createSprite(17500,540,7000,20);
    ground3.shapeColor="orange";
   // ground3.visible=false;
    ground_3 = createSprite(17500,555,7000,20);
    ground_3.visible=false;
    ground4=createSprite(24500,540,7000,20);
    ground4.shapeColor="darkgreen";
    //ground4.visible=false;
    ground_4 = createSprite(24500,555,7000,20);
    ground_4.visible=false;
    ground5=createSprite(31500,540,9000,20);
    ground5.shapeColor="white";
    //ground5.visible=false;
    ground_5 = createSprite(31500,555,9000,20);
    ground_5.visible=false;
    ground6 = createSprite(39600,-200,7000,20);
    ground_6 = createSprite(39600,-185,7000,20);
    ground_6.visible=false;
    animalgroup = new Group();
    gameState="grassland";
    health = createSprite(100,100,50,175);
    thirst = createSprite(660,100,50,175);
    healthbar = createSprite(100,100,50,175);
    healthbar.shapeColor="red";
    hunger = createSprite(600,100,50,175);
    hungerbar = createSprite(600,100,50,175);
    hungerbar.shapeColor="yellow";
    thirstbar = createSprite(660,100,50,175);
    thirstbar.shapeColor="blue";
    jet=createSprite(35960,570);
    jet.addImage(jetimg);
    jet.scale=0.5;
    //coin=createSprite(300,400,50,50);
    //coin.addAnimation("coin",coinimg);
   // coin.scale=0.1;
   o=0;
   foodgroup=new Group();
   foodgroup2=new Group();
   foodgroup3=new Group();
   foodgroup4=new Group();
   foodgroup5=new Group();
   groundgroup=new Group();
    a=1;
    b=2.5;
    c=1;
    d=3.0;
    e=5;
    f=15;
    g=10;
}

function draw()
{
    background("black");

    rectMode(CENTER);
    
    if (a===0 && thirstbar.height===0&&frameCount%50===0)
    {
        
    healthbar.height=healthbar.height-20;
    healthbar.y=healthbar.y+g;
    }

    if (frameCount%50===0&&a===1)
    {
    hungerbar.height=hungerbar.height-5;
    hungerbar.y=hungerbar.y+b;
    }

    if (frameCount%50===0&&a===1)
    {
    thirstbar.height=thirstbar.height-5;
    thirstbar.y=thirstbar.y+d;
    }
     //console.log(hungerbar.y);

     //console.log(hungerbar.height);

    if (hungerbar.height===0)
    {
        hungerbar.height=0;
       /// hungerbar.y===150;
        a=0;
        }

        if (thirstbar.height===0)
        {
            thirstbar.height=0;
           /// thirstbar.y===150;
            c=0;
            }
//console.log(hungerbar.height);
            if (a===0)
            {
                hungerbar.visible=false;
            }

            if (c===0)
            {
                thirstbar.visible=false;
            }

            if (healthbar.height===0)
            {
                healthbar.visible=false;
            }


 //   ground.velocityX=-10;
 //   ground2.velocityX=-10;
 //   ground3.velocityX=-10;
 //   ground4.velocityX=-10;
 //   ground5.velocityX=-10;

    camera.position.x=player.x;
    camera.position.y=player.y-200;

    healthbar.x=player.x-300;
    health.x=player.x-300;

    hungerbar.x=player.x+300;
    hunger.x=player.x+300;

    thirstbar.x=player.x+240;
    thirst.x=player.x+240;

    if (ground1.x < player.x-5000){
      //  ground.x = ground.width/2;
      //ground1.x=ground5.x+7000;
      //ground_1.x=ground_5.x+7000;
      gameState="water";
      }

      if (ground2.x<player.x-5000)
      {
          //ground2.x=ground1.x+7000;
          //ground_2.x=ground_1.x+7000;
          gameState="desert";
      }

      if (ground3.x<player.x-5000)
      {
          //ground3.x=ground2.x+7000;
          //ground_3.x=ground_2.x+7000;
          gameState="jungle";
      }

      if (ground4.x<player.x-5000)
      {
         // ground4.x=ground3.x+7000;
         // ground_4.x=ground_3.x+7000;
          gameState="snow";
      }

      if (ground5.x<player.x-4000)
      {
         // ground5.x=ground4.x+7000;
          //ground_5.x=ground_4.x+7000;
          gameState="null";
      }

      if (player.x>36115)
      {
          gameState="space";
      }

      console.log(gameState);
      console.log(player.y);

   // console.log(ground.x);

   spawn_animal();

   if (keyWentDown("left_Arrow"))
   {
    player.addAnimation("player",player_img);

       player.velocityX=-3;
       player.velocityY=0;
   }

   if (keyWentUp("left_Arrow"))
   {
    player.addImage("player",player_img1);
       player.velocityX=0;
       player.velocityY=0;
       camera.position.x=player.position.x;
   }

   if (keyWentDown("right_Arrow"))
   {      
    player.addAnimation("player",playerimg);
       player.velocityX=50;
       player.velocityY=0;
   }

   if (keyWentUp("right_Arrow"))
   {
    player.addImage("player",player1img);
       player.velocityX=0;
       player.velocityY=0;
   }

   if (keyDown("space")&&player.y>450)
   {
       player.velocityY=-10;
      // player.velocityX=0;
   }

    if (player.y<550)
    {
        player.velocityY=player.velocityY+0.5;
    }

    player.collide(ground_1);
    player.collide(ground_2);
    player.collide(ground_3);
    player.collide(ground_4);
    player.collide(ground_5);
    player.collide(ground_6);
/*
    groundgroup.add(ground1);
    groundgroup.add(ground2);
    groundgroup.add(ground3);
    groundgroup.add(ground4);
    groundgroup.add(ground5);
*/
    spawn_food();
 
    foodgroup.collide(ground1);
    foodgroup.collide(ground2);
    foodgroup.collide(ground3);
    foodgroup.collide(ground4);
    foodgroup.collide(ground5);

    foodgroup2.collide(ground1);
    foodgroup2.collide(ground2);
    foodgroup2.collide(ground3);
    foodgroup2.collide(ground4);
    foodgroup2.collide(ground5);

    foodgroup3.collide(ground1);
    foodgroup3.collide(ground2);
    foodgroup3.collide(ground3);
    foodgroup3.collide(ground4);
    foodgroup3.collide(ground5);

    foodgroup4.collide(ground1);
    foodgroup4.collide(ground2);
    foodgroup4.collide(ground3);
    foodgroup4.collide(ground4);
    foodgroup4.collide(ground5);

    foodgroup5.collide(ground1);
    foodgroup5.collide(ground2);
    foodgroup5.collide(ground3);
    foodgroup5.collide(ground4);
    foodgroup5.collide(ground5);

    if (foodgroup.isTouching(player)){
        hungerbar.height=hungerbar.height+10;
        hungerbar.y=hungerbar.height-e;
        foodgroup.destroyEach();
    }

    if (foodgroup2.isTouching(player)){
        hungerbar.height=hungerbar.height+30;
        hungerbar.height=hungerbar.height-f;
        foodgroup2.destroyEach();
    }

    if (foodgroup3.isTouching(player)){
        hungerbar.height=hungerbar.height+10;
        hungerbar.height=hungerbar.height-e;
        foodgroup3.destroyEach();
    }

    if (foodgroup4.isTouching(player)){
        hungerbar.height=hungerbar.height+10;
        hungerbar.y=hungerbar.height-e;
        foodgroup4.destroyEach();
    }

    if (foodgroup5.isTouching(player)){
        hungerbar.height=hungerbar.height+10;
        hungerbar.y=hungerbar.height-e;
        foodgroup5.destroyEach();
    }

    if (foodgroup.y>500){
        
            if (frameCount%100===0)
            {
                foodgroup.destroyEach();
            }
        }
        
    

    if (foodgroup2.y>500){
        
            if (frameCount%100===0)
            {
                foodgroup2.destroyEach();
            }
        }
        
    

    if (foodgroup3.y>500){
        
            if (frameCount%100===0)
            {
                foodgroup3.destroyEach();
            }
        }
        
    

    if (foodgroup4.y>500){
        
            if (frameCount%100===0)
            {
                foodgroup4.destroyEach();
            }
        }
        
    

    if (foodgroup5.y>500){
        
            if (frameCount%100===0)
            {
                foodgroup5.destroyEach();
            }
        }
        
    

   // text(o,player.x+100,400);

   if (frameCount%500===0)
   {
       animalgroup.destroyEach();
   }

   if (gameState==="grassland")
   {
    hunger.y=player.y-300;
    hungerbar.y=player.y-300;
    thirst.y=player.y-300;
    thirstbar.y=player.y-300;
    health.y=player.y-300;
    healthbar.y=player.y-300;
       background(grass);
   }

   if (gameState==="desert")
   {
    hunger.y=player.y-300;
    hungerbar.y=player.y-300;
    thirst.y=player.y-300;
    thirstbar.y=player.y-300;
    health.y=player.y-300;
    healthbar.y=player.y-300;
       background(desert);
   }

   if (gameState==="snow")
   {
    hunger.y=player.y-300;
    hungerbar.y=player.y-300;
    thirst.y=player.y-300;
    thirstbar.y=player.y-300;
    health.y=player.y-300;
    healthbar.y=player.y-300;
       background(snow);
   }

   if (gameState==="water")
   {
    hunger.y=player.y-300;
    hungerbar.y=player.y-300;
    thirst.y=player.y-300;
    thirstbar.y=player.y-300;
    health.y=player.y-300;
    healthbar.y=player.y-300;
       background(sea);
   }

   if (gameState==="jungle")
   {
    hunger.y=player.y-300;
    hungerbar.y=player.y-300;
    thirst.y=player.y-300;
    thirstbar.y=player.y-300;
    health.y=player.y-300;
    healthbar.y=player.y-300;
       background(jungle);
   }

   if (gameState==="space")
   {
       hunger.y=player.y-300;
       hungerbar.y=player.y-300;
       thirst.y=player.y-300;
       thirstbar.y=player.y-300;
       health.y=player.y-300;
       healthbar.y=player.y-300;
       player.collide(ground5);
       player.collide(ground_5);
       background(space);
   }

   if (keyWentDown("space")&&player.isTouching(jet))
   {
       jet.velocityY=-5;
       player.y=player.y+10;
   }

   if (keyWentUp("space")&&player.isTouching(jet))
   {
    jet.velocityY=0;
    player.y=player.y;
   }

  // animal.y=animal.y-0.3;

   player.collide(jet);

    drawSprites();
}

function spawn_animal()
{
    if (frameCount%100===0)
    {
     animal=createSprite(player.x-200,450,50,50);
     animal.y=animal.y-0.3;
     groundgroup.collide(animal);
     if (gameState==="grassland")
     {
     animal.addImage("tiger",tiger);
     }
     else{
         animal.addImage("wolf",wolf);
     }
     animal.scale=0.3;
     animal.shapeColor="red";
     animal.velocityX=5;
     animalgroup.add(animal);
    }
}

function spawn_food()
{
    if (frameCount%150===0)
    {
        var y = random(400,750);
        var z = random(80,300);
       var apple = createSprite(random(player.x-250,player.x+250),player.y-150,50,50);
       var r = Math.round(random(1,5));
       switch (r) 
       {
           case 1 : apple.addImage("goldapple",goldapple);
           o=o+2
           foodgroup2.add(apple);
           break;
           case 2 : apple.addImage("apple",appleimg);
           o=o+20
           foodgroup.add(apple);
           break; 
           case 3 : apple.addImage("apple",appleimg);
           o=o+50
           foodgroup3.add(apple);
           break; 
           case 4 : apple.addImage("apple",appleimg);
           o=o+100
           foodgroup4.add(apple);
           break; 
           case 5 : apple.addImage("apple",appleimg);
           o=o+500
           foodgroup5.add(apple);
           break; 
           default:break;
       }
       apple.y=apple.y-0.3;
       apple.velocityY=8;
      // groundgroup.collide(apple);
      // apple.addImage("apple",appleimg);
       apple.scale=0.08;
    }
}


