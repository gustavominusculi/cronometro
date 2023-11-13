const minutesEl = document.querySelector("#minutes")
const secondsEl = document.querySelector("#seconds")
const milesecondsEl = document.querySelector("#mileseconds")
const startBtn = document.querySelector("#startBtn")
const stopBtn = document.querySelector("#stopBtn")
const resumeBtn = document.querySelector("#resumeBtn")
const restartBtn = document.querySelector("#restartBtn")



let interval;
let minutes = 0;

let seconds = 0;

let mileseconds = 0;

let isPaused = false;

startBtn.addEventListener("click", startTimer)
stopBtn.addEventListener("click", pauseTimer)
resumeBtn.addEventListener("click", resumeTimer)
restartBtn.addEventListener("click", resetTimer)

function startTimer(){
    
    interval = setInterval(()=>{
        if(!isPaused){
           mileseconds += 10 

           if(mileseconds === 1000){
            seconds++;
            mileseconds = 0;
           }
           if(seconds === 60){
            minutes++;
            seconds = 0;
           }

           minutesEl.textContent = formatTime(minutes);
           secondsEl.textContent = formatTime(seconds);
           milesecondsEl.textContent = formatMileseconds(mileseconds);
        } 

    },10)

    startBtn.style.display = "none"
    stopBtn.style.display = "block" 
}

function pauseTimer(){
    isPaused= true
    stopBtn.style.display = "none"
    resumeBtn.style.display = "block"
}

function resumeTimer(){
    isPaused = false
    stopBtn.style.display = "block"
    resumeBtn.style.display = "none"
}

function resetTimer(){
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    mileseconds = 0;

    minutesEl.textContent = "00"
    secondsEl.textContent = "00"
    milesecondsEl.textContent = "000"
    
    startBtn.style.display = "block"
    stopBtn.style.display = "none"
    resumeBtn.style.display = "none"

}


function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

function formatMileseconds(time){
    return String(time < 100 ? `${time}`.padStart(3, "0") : time);
}