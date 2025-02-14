const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start(){
    if(!isRunning){
        startTime = new Date() - elapsedTime;
        timer = setInterval(update,10);
        isRunning = true;
    }
}
function stop(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime = new Date() - startTime;
        isRunning = false;
    }
}
function reset(){
    clearInterval(timer);
    elapsedTime = 0;
    startTime = 0;
    isRunning = false;
    display.textContent = "00 : 00 : 00 : 000";
}
function update(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    let hours = String(Math.floor(elapsedTime / 3600000)).padStart(2,"0");
    let minutes =String (Math.floor((elapsedTime % 3600000) / 60000)).padStart(2,"0");
    let seconds = String(Math.floor((elapsedTime % 60000) / 1000)).padStart(2,"0");
    let milliseconds = String(Math.floor(elapsedTime % 1000)).padStart(2,"0");

    display.textContent = `${hours} : ${minutes} : ${seconds} : ${milliseconds}`;



}