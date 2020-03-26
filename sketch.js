var fixedrect
var movingrect
function setup() {
  createCanvas(800,400);

  fixedrect=createSprite(200,200,50,50)
  fixedrect.shapeColor="green"
  fixedrect.debug=true

  movingrect=createSprite(10,10,50,50)
  movingrect.shapeColor="green"
  movingrect.debug=true

}

function draw() {
  background(255,255,255); 
 movingrect.x=mouseX
 movingrect.y=mouseY
 if(movingrect.x-fixedrect.x===movingrect.width/2+fixedrect.width/2 || 
    fixedrect.x-movingrect.x===movingrect.width/2+fixedrect.width/2)
 {
  movingrect.shapeColor="red"
  fixedrect.shapeColor="red"

 }
 else{
   movingrect.shapeColor="green"
   fixedrect.shapeColor="green"
 }
  drawSprites();
}