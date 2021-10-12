function preload(){

}

function setup(){
canvas=createCanvas(600,500);
canvas.position(100,250)
video=createCapture(VIDEO);
video.hide()
 tintColor="";
}


function draw(){
image(video,0,0,600,500)
tint(tintColor)
}

function applyFilter(){
tintColor=document.getElementById("color").value;
}

function takeSnapshot(){
save("student.png")
}