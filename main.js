canvas= document.getElementById("canvasy");
ctx= canvas.getContext("2d");

width1= 120;
height1= 70;
img1= "car1.jpg";
x1=10;
y1=10;

width2= 120;
height2= 70;
img2="car.jpg";
x2=10;
y2=100;

backgroundimg="track.jpg";

function add(){
    backgroundTag= new Image();
    backgroundTag.onload= uploadbackground;
    backgroundTag.src= backgroundimg;

    car1Tag= new Image();
    car1Tag.onload= uploadcar1;
    car1Tag.src= img1;

    car2Tag= new Image();
    car2Tag.onload= uploadcar2;
    car2Tag.src= img2;

}

function uploadbackground(){
    ctx.drawImage(backgroundTag, 0, 0, canvas.width, canvas.height);

}

function uploadcar1(){
    ctx.drawImage(car1Tag, x1, y1, width1, width2 );
}

function uploadcar2(){
    ctx.drawImage(car2Tag, x2, y2, width1, width2 );
}

window.addEventListener("keydown", mykey);
function mykey(e){
    keyPressed= e.keyCode;
    console.log(keyPressed);
    if(keyPressed=="38"){
        console.log("car 1 up")
        car1up();
    }
    if(keyPressed=="37"){
        console.log("car 1 left")
        car1left();
    }
    if(keyPressed=="39"){
        console.log("car 1 right")
        car1right();
    }
    if(keyPressed=="40"){
        console.log("car 1 down")
        car1down();
    }
    if(keyPressed=="87"){
        console.log("car 2 up")
        car2w();
    }
    if(keyPressed=="65"){
        console.log("car 2 left")
        car2a();
    }
    if(keyPressed=="83"){
        console.log("car 2 down")
        car2s();
    }
    if(keyPressed=="68"){
        console.log("car 2 right")
        car2d();
    }
}

function car1up(){
    if(y1>=0){
        y1=y1-10;
        updatebackground();
        updatecar1();
        updatecar2();
    }
}

function car1down(){
    if(y1<=500){
        y1=y1+10;
        updatebackground();
        updatecar1();
        updatecar2();
    }
}

function car1left(){
    if(x1>=0){
        x1=x1-10;
        updatebackground();
        updatecar1();
        updatecar2();
    }
}

function car1right(){
    if(x1<=700){
        x1=x1+10;
        updatebackground();
        updatecar1();
        updatecar2();
    }
}

function car2w(){
    if(y2>=0){
        y2=y2-10;
        updatebackground();
        updatecar1();
        updatecar2();
    }
}

function car2s(){
    if(y2<=500){
        y2=y2+10;
        updatebackground();
        updatecar1();
        updatecar2();
    }
}

function car2a(){
    if(y2>=0){
        y2=y2-10;
        updatebackground();
        updatecar1();
        updatecar2();
    }
}

function car2d(){
    if(y2<=700){
        y2=y2-10;
        updatebackground();
        updatecar1();
        updatecar2();
    }
}
 
if(x1>700){
    console.log("car 1 won");
    document.getElementById("gamestatus").innerHTML= "Car 1 Won!!";
}

if(x2>700){
    console.log("car 2 won");
    document.getElementById("gamestatus").innerHTML= "Car 2 Won!!";


}