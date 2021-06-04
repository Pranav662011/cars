canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");




car1_width=100;
car1_height=90;
car1_x=100;
car1_y=100;
car1_image="car1.png";
car_width=100;
car_height=90;
car_x=100;
car_y=100;
car_image="car1 (1).png";
background_image="racing.jpg"

function add(){
    background_imgtag=new Image();
    background_imgtag.onload=uploadBackground;
    background_imgtag.src=background_image;

    car1_imgtag=new Image();
    car1_imgtag.onload=uploadcar1;
  car1_imgtag.src=car1_image;

  car_imgtag=new Image();
    car_imgtag.onload=uploadcar;
  car_imgtag.src=car1_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgtag, 0,0, canvas.width ,canvas.height);
}
function uploadcar1(){
    ctx.drawImage(car1_imgtag, car1_x,car1_y, car1_width ,car1_height);
}

function uploadcar(){
    ctx.drawImage(car_imgtag, car_x,car_y, car_width ,car_height);
}


window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);

    if(keypressed=="38"){
        car1up();
        car1console.log("up");

    }

    if(keypressed=="40"){
        car1down();
        console.log("down");
        
    }

    if(keypressed=="37"){
        car1left();
        console.log("left");
        
    }

    if(keypressed=="39"){
        car1right();
        console.log("right");
}

}

function car1up(){
if(car1_y>=0)
{
    car1_y=car1_y-10;
    console.log("when up arrow is pressed, x= "+ car1_x+" | y= "+car1_y);
    uploadBackground();
    uploadcar1();
}
}

function car1down(){
    if(car1_y<=500)
    {
        car1_y=car1_y+10;
        console.log("when down arrow is pressed, x= "+car1_x+" | y= "+car1_y);
        uploadBackground();
        uploadcar1();
    }
}

function car1left(){
    if(car1_x>=0)
    {
        car1_x=car1_x-10;
        console.log("when left arrow is pressed, x= "+car1_x+" | y= "+car1_y);
        uploadBackground();
        uploadcar1();
    }
}

function car1right(){
    if(car1_x<=700)
    {
        car1_x=car1_x+10;
        console.log("when right arrow is pressed, x= "+car1_x+" | y= "+car1_y);
        uploadBackground();
        uploadcar1();
    }

    if(keypressed=="87"){
        carup();
        carconsole.log("up");

    }

    if(keypressed=="83"){
        cardown();
        carconsole.log("down");
        
    }

    if(keypressed=="68"){
        carleft();
        carconsole.log("left");
        
    }

    if(keypressed=="65"){
        carright();
        carconsole.log("right");
}
    
}