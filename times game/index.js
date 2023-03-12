window.addEventListener('DOMContentLoaded',()=>{
let display = document.querySelector("#num");
let displayHigh = document.querySelector('#highScore')
var sum = 0;
var time;
var sec = 0;
var highScore = 0;
var clicks;
let displayTime = document.querySelector('#display2');
let buttonClick = document.querySelector('#cps');

document.getElementById("click").onclick = function(){
    sum++;
    display.innerHTML = sum;
}

document.getElementById("reset").onclick = function(){
    alert("You clicked " + sum + " times today");
    sum = 0;
    display.innerHTML = sum;
}

document.getElementById('submit').onclick = function(){
    if(highScore < clicks){
        highScore = clicks;
        displayHigh.innerHTML = clicks;
        document.body.style.background = "Green";
        alert("Noice");
    } else{
        if(clicks > 0){
            document.body.style.background = "red";
            alert("Not the highest bruh");
        }
        alert("Do better");
    }
}

document.getElementById('cps').onclick = function(){
    document.body.style.background = "lightslategrey";
    sum = 0;
    display.innerHTML = "0";
    displayTime.style.display ='block';
    time = setInterval(() =>{
        displayTime.innerHTML = '10.0' - sec;
        sec++;
        if(sec ==11){
            buttonClick.innerHTML = "CPS(10seconds)";
            clearInterval(time);
            sec = 0;
            displayTime.innerHTML = '10.0';
            clicks = sum/10;
            alert("Click per second is " + clicks);
           
        }
    },100);
}


});