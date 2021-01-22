var cat, catImg1, catImg2, catImg3;
var mouse, mouseImg1, mouseImg2, mouseImg3, mouseImg4;
var back, backImg;




function preload() {
    //load the images here
        catImg1 = loadAnimation("images/cat2.png","images/cat3.png");
        catImg2 = loadAnimation("images/cat1.png");
        catImg3 = loadAnimation("images/cat4.png");
        backImg = loadImage("images/garden.png");
        mouseImg1 = loadImage("images/mouse1.png");
        mouseImg2 = loadImage("images/mouse2.png");
        mouseImg3 = loadImage("images/mouse3.png");
        mouseImg4 = loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    back = createSprite(500, 360, 20, 20);
    back.addImage("background", backImg);

    cat = createSprite(800, 600, 200, 20);
    cat.addAnimation("start", catImg2);
    cat.addAnimation("stop", catImg3);
    cat.addAnimation("go", catImg1);
    
    cat.scale = 0.15;

    mouse = createSprite(200, 600, 75, 20);
    mouse.addImage("1", mouseImg1);
    mouse.addImage("2", mouseImg2);
    mouse.addImage("3", mouseImg3);
    mouse.addImage("4", mouseImg4);
    mouse.scale = 0.10;
}

function draw() {

    background("tan");
    //Write condition here to evalute if tom and jerry collide

   keyPressed();

mouseTaunt();

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(cat.x - mouse.x < (cat.width - mouse.width)/2){

    cat.changeAnimation("stop");

}else{

if(keyDown("left")){
    cat.x = cat.x - 5;
    cat.changeAnimation("go");
} else{
    
    cat.changeAnimation("start");

}

}

}

function mouseTaunt() {

    if(frameCount% 100 ===0){

var mouseRandom = Math.round(random(1,4))

        if(mouseRandom === 1){
            mouse.changeAnimation("1");
        }else if(mouseRandom === 2){
            mouse.changeAnimation("2");
        }else if(mouseRandom === 3){
            mouse.changeAnimation("3");
        }else {
            mouse.changeAnimation("4");
        }
    }


}
