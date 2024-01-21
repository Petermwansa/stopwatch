let [seconds, minutes, hours] = [0,0,0];
let displayTime = document.getElementById("display__time");
let timer = null;

stopwatch = () => {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if(minutes == 60){
            minutes == 0;
            hours++;
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    
    displayTime.innerHTML = h + " : " + m + " : " + s;


}


watchStart = () => {
    // here we first check that the timer isnt null then clear the interval
    if (timer !== null) {
        clearInterval(timer);
    }
    // we call the stopwatch every second 
    timer = setInterval(stopwatch, 1000);
}

// here we clear the interval to pause 
watchStop = () => {
    clearInterval(timer);
}

// here we reset the stopwatch
watchReset= () => {
    clearInterval(timer);
    //this is where excactly we reset the variables
    [seconds, minutes, hours] = [0,0,0];
    displayTime.innerHTML = "00 : 00 : 00";
}