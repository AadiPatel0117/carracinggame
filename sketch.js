//1 creating global var
var car1, car2,trophy
var car1image, car2image, trackjpg, groundimage,trophyimage
var cars=[]
var mygameState = 0;
var myplayerCount=0;

var mydatabase;


var myform, myplayer, mygame;
var allplayers=[];

function preload(){
  car1image=loadImage("images/car1.png")
  car2image=loadImage("images/car2.png")
  car3image=loadImage("images/car3.png")
  car4image=loadImage("images/car4.png")
  trackjpg=loadImage("images/track.jpg")
  groundimage=loadImage("images/ground.png")
  trophyimage=loadImage("images/t.png")
}

function setup()
{
  createCanvas(displayWidth-20, displayHeight-30);
  mydatabase = firebase.database();  //2 creating db
  
  mygame = new Game();    //3 object of game cls and its methods
  mygame.readState();
  mygame.start();
}


function draw()
{
  if (myplayerCount===2){
    mygame.update(1);
  }

  if (mygameState===1){
    clear()
    mygame.play()
  }
  if (mygameState===2){
    mygame.end();
  }
}