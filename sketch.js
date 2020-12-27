var img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,
img11,img12,img13,img14,img15;

var r1c1,r2c1,r3c1,r1c2,r1c3,r2c2,r2c3,r3c2,r3c3

function preload(){
 img1 = loadImage("images/kathakali.png");
 img2 = loadImage("images/mountains.png");
 img3 = loadImage("images/Thali.png"); 
 img4 = loadImage("images/ashokstambh.png");
 img5 = loadImage("images/been.png");
 img6 = loadImage("images/bird.png");
 img7 = loadImage("images/king.png");
 img8 = loadImage("images/lotus.png");
 img9 = loadImage("images/painting.png");
 img10 = loadImage("images/painting1.png");
 img11 = loadImage("images/palaces.png");
 img12 = loadImage("images/sitar.png");
 img13 = loadImage("images/Tabla.png");
 img14 = loadImage("images/tiger.png");
 img15 = loadImage("images/veena.png");
 bgImg = loadImage("images/bg.png");

}

function setup() {
  createCanvas(displayWidth, displayHeight);

  r1c1 = createSprite(200, 200, 50, 50);
  setInterval(randomImg,10000000);
  r1c1.scale = 0.8;

  r1c2 = createSprite(500,200,50,50);
  setInterval(randomImg4,10000000);
  r1c2.scale = 0.8;

  r1c3 = createSprite(800,200,50,50);
  setInterval(randomImg7,10000000);
  r1c3.scale = 0.8;

  r2c1 = createSprite(200,500,50,50);
  setInterval(randomImg2,10000000);
  r2c1.scale = 0.8;

  r2c2 = createSprite(500,500,50,50);
  setInterval(randomImg5,100000);
  r2c2.scale = 0.8;

  r2c3 = createSprite(800,500,50,50);
  setInterval(randomImg8,10000000);
  r2c3.scale = 0.8;

  r3c1 = createSprite(200,800,50,50);
  setInterval(randomImg3,10000000);
  r3c1.scale = 0.8;

  r3c2 = createSprite(500,800,50,50);
  setInterval(randomImg6,10000000);
  r3c2.scale = 0.8;

  r3c3 = createSprite(800,800,50,50);
  setInterval(randomImg9,10000000);
  r3c3.scale = 0.8;

}

function draw() {
  background(bgImg);  
  drawSprites();
}

function randomImg(){
  var x = Math.round(random(1,6))
  switch(x){
    case 1: r1c1.addImage("image",img1);break
    case 2: r1c1.addImage("image",img2);break
    case 3: r1c1.addImage("image",img3);break
    case 4: r1c1.addImage("image",img4);break
    case 5: r1c1.addImage("image",img5);break
    case 6: r1c1.addImage("image",img6);break
    case 7: r1c1.addImage("image",img7);break
    case 8: r1c1.addImage("image",img8);break
    case 9: r1c1.addImage("image",img9);break
    case 10: r1c1.addImage("image",img10);break
    case 11: r1c1.addImage("image",img11);break
    case 12: r1c1.addImage("image",img12);break
    case 13: r1c1.addImage("image",img13);break
    case 14: r1c1.addImage("image",img14);break
    case 15: r1c1.addImage("image",img15);break
  }

}

function randomImg2(){
  var x = Math.round(random(1,6))
  switch(x){
    case 1: r2c1.addImage("image",img1);break
    case 2: r2c1.addImage("image",img2);break
    case 3: r2c1.addImage("image",img3);break
    case 4: r2c1.addImage("image",img4);break
    case 5: r2c1.addImage("image",img5);break
    case 6: r2c1.addImage("image",img6);break
    case 7: r2c1.addImage("image",img7);break
    case 8: r2c1.addImage("image",img8);break
    case 9: r2c1.addImage("image",img9);break
    case 10: r2c1.addImage("image",img10);break
    case 11: r2c1.addImage("image",img11);break
    case 12: r2c1.addImage("image",img12);break
    case 13: r2c1.addImage("image",img13);break
    case 14: r2c1.addImage("image",img14);break
    case 15: r2c1.addImage("image",img15);break
  }

}

function randomImg3(){
  var x = Math.round(random(1,6))
  switch(x){
    case 1: r3c1.addImage("image",img1);break
    case 2: r3c1.addImage("image",img2);break
    case 3: r3c1.addImage("image",img3);break
    case 4: r3c1.addImage("image",img4);break
    case 5: r3c1.addImage("image",img5);break
    case 6: r3c1.addImage("image",img6);break
    case 7: r3c1.addImage("image",img7);break
    case 8: r3c1.addImage("image",img8);break
    case 9: r3c1.addImage("image",img9);break
    case 10: r3c1.addImage("image",img10);break
    case 11: r3c1.addImage("image",img11);break
    case 12: r3c1.addImage("image",img12);break
    case 13: r3c1.addImage("image",img13);break
    case 14: r3c1.addImage("image",img14);break
    case 15: r3c1.addImage("image",img15);break
  }

}

function randomImg4(){
  var x = Math.round(random(1,6))
  switch(x){
    case 1: r1c2.addImage("image",img1);break
    case 2: r1c2.addImage("image",img2);break
    case 3: r1c2.addImage("image",img3);break
    case 4: r1c2.addImage("image",img4);break
    case 5: r1c2.addImage("image",img5);break
    case 6: r1c2.addImage("image",img6);break
    case 7: r1c2.addImage("image",img7);break
    case 8: r1c2.addImage("image",img8);break
    case 9: r1c2.addImage("image",img9);break
    case 10: r1c2.addImage("image",img10);break
    case 11: r1c2.addImage("image",img11);break
    case 12: r1c2.addImage("image",img12);break
    case 13: r1c2.addImage("image",img13);break
    case 14: r1c2.addImage("image",img14);break
    case 15: r1c2.addImage("image",img15);break

  }

}

function randomImg5(){
  var x = Math.round(random(1,6))
  switch(x){
    case 1: r2c2.addImage("image",img1);break
    case 2: r2c2.addImage("image",img2);break
    case 3: r2c2.addImage("image",img3);break
    case 4: r2c2.addImage("image",img4);break
    case 5: r2c2.addImage("image",img5);break
    case 6: r2c2.addImage("image",img6);break
    case 7: r2c2.addImage("image",img7);break
    case 8: r2c2.addImage("image",img8);break
    case 9: r2c2.addImage("image",img9);break
    case 10: r2c2.addImage("image",img10);break
    case 11: r2c2.addImage("image",img11);break
    case 12: r2c2.addImage("image",img12);break
    case 13: r2c2.addImage("image",img13);break
    case 14: r2c2.addImage("image",img14);break
    case 15: r2c2.addImage("image",img15);break

  }

}

function randomImg6(){
  var x = Math.round(random(1,6))
  switch(x){
    case 1: r3c2.addImage("image",img1);break
    case 2: r3c2.addImage("image",img2);break
    case 3: r3c2.addImage("image",img3);break
    case 4: r3c2.addImage("image",img4);break
    case 5: r3c2.addImage("image",img5);break
    case 6: r3c2.addImage("image",img6);break
    case 7: r3c2.addImage("image",img7);break
    case 8: r3c2.addImage("image",img8);break
    case 9: r3c2.addImage("image",img9);break
    case 10: r3c2.addImage("image",img10);break
    case 11: r3c2.addImage("image",img11);break
    case 12: r3c2.addImage("image",img12);break
    case 13: r3c2.addImage("image",img13);break
    case 14: r3c2.addImage("image",img14);break
    case 15: r3c2.addImage("image",img15);break

  }

}

function randomImg7(){
  var x = Math.round(random(1,6))
  switch(x){
    case 1: r1c3.addImage("image",img1);break
    case 2: r1c3.addImage("image",img2);break
    case 3: r1c3.addImage("image",img3);break
    case 4: r1c3.addImage("image",img4);break
    case 5: r1c3.addImage("image",img5);break
    case 6: r1c3.addImage("image",img6);break
    case 7: r1c3.addImage("image",img7);break
    case 8: r1c3.addImage("image",img8);break
    case 9: r1c3.addImage("image",img9);break
    case 10: r1c3.addImage("image",img10);break
    case 11: r1c3.addImage("image",img11);break
    case 12: r1c3.addImage("image",img12);break
    case 13: r1c3.addImage("image",img13);break
    case 14: r1c3.addImage("image",img14);break
    case 15: r1c3.addImage("image",img15);break
  }

}

function randomImg8(){
  var x = Math.round(random(1,6))
  switch(x){
    case 1: r2c3.addImage("image",img1);break
    case 2: r2c3.addImage("image",img2);break
    case 3: r2c3.addImage("image",img3);break
    case 4: r2c3.addImage("image",img4);break
    case 5: r2c3.addImage("image",img5);break
    case 6: r2c3.addImage("image",img6);break
    case 7: r2c3.addImage("image",img7);break
    case 8: r2c3.addImage("image",img8);break
    case 9: r2c3.addImage("image",img9);break
    case 10: r2c3.addImage("image",img10);break
    case 11: r2c3.addImage("image",img11);break
    case 12: r2c3.addImage("image",img12);break
    case 13: r2c3.addImage("image",img13);break
    case 14: r2c3.addImage("image",img14);break
    case 15: r2c3.addImage("image",img15);break
  }

}

function randomImg9(){
  var x = Math.round(random(1,6))
  switch(x){
    case 1: r3c3.addImage("image",img1);break
    case 2: r3c3.addImage("image",img2);break
    case 3: r3c3.addImage("image",img3);break
    case 4: r3c3.addImage("image",img4);break
    case 5: r3c3.addImage("image",img5);break
    case 6: r3c3.addImage("image",img6);break
    case 7: r3c3.addImage("image",img7);break
    case 8: r3c3.addImage("image",img8);break
    case 9: r3c3.addImage("image",img9);break
    case 10: r3c3.addImage("image",img10);break
    case 11: r3c3.addImage("image",img11);break
    case 12: r3c3.addImage("image",img12);break
    case 13: r3c3.addImage("image",img13);break
    case 14: r3c3.addImage("image",img14);break
    case 15: r3c3.addImage("image",img15);break
  }

}