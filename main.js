var bola;
function setup (){
bola = createSprite (200,200,20,20);
bola.shapeColor = "blue";
createCanvas (500,500);


    }
function draw (){

background ("red");
   
    if (keyDown ("left")) {
    bola.x = bola.x -5 ;

    }else if (keyDown("right")) {
    bola.x = bola.x +5 ;
}
     else if (keyDown("up")) {
    bola.y = bola.y -5 ;
}else if (keyDown("down"))
bola.y = bola.y +5 ;
     drawSprites ();
     
    }

    