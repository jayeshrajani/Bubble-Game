
var hitrn;
var score=0;
var timer=60;

function makeBubble(){
    var clutter=" ";
for(var i=1;i<=138;i++){
    rn=Math.floor(Math.random()*10)
    clutter+= `<div class="bubble">${rn}</div>`
}

document.querySelector('#pbtm').innerHTML=clutter;
}



function runTimer(){
    var timerint=setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerInterval").textContent=timer;
         }
         else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML=`<h1>Game Over <br> Your score is = ${score}</h1>`
         }
},1000)}

function newHit(){
     hitrn=Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitrn;
}
function incScore(){
    score+=10;
    document.querySelector("#scoreval").textContent=score;
}

document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickedNum=(Number(dets.target.textContent));
    if(clickedNum === hitrn){
        incScore();
        newHit();
        makeBubble();
        


    }
})



makeBubble();
runTimer();
newHit();


