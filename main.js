

difference=0;
rightWristX=0;
leftWristX=0;



function setup ()
{
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,550);
    canvas.position(560,150);

    posenet=ml5.poseNet(video,modelloaded);

    posenet.on('pose',gotposes);
}

function modelloaded ()
{
    console.log('posenet is initialised!');
}

function gotposes (results)
 {
     if(results.length>0)
     {
         console.log(results);

         
         leftWristX=results[0].pose.leftWrist.x;

         rightWristX=results[0].pose.rightWrist.x;

         difference = floor(leftWristX - rightWristX);

         

         console.log("rightWristX = "+rightWristX+",leftWristX =  "+leftWristX+",difference = "+difference);


        }

}

function draw ()
{
    background('blue');
    document.getElementById("font_size").innerHTML = "Font size of the text will be = " + difference +"px";
    textSize(difference);
    fill('#FFE787');
    text('Aydin', 50, 400);
   
}