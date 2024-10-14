let [seconds, minutes, hours] = [0, 0, 0];
let displaytime = document.getElementById("displaytime");
let timer ;

function stopwatch() {    // function is exzicute every second  [every second is increse by 1 second]
    seconds++; // increase the seconds value by one
    if (seconds == 60) {
        seconds = 0;
        minutes++;       // increase the minute value by 1
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    displaytime.innerHTML = h +":"+ m +":"+s;
}

function watchStart() {
    if (timer !== null) {       // timer is not equal to null
        clearInterval(timer);
    }
    timer = setInterval(stopwatch, 1000);      // exicute every second again


}
function watchStop(){
    clearInterval(timer);

}
function watchreset(){
    clearInterval(timer);
    [seconds, minutes, hours] = [0, 0, 0];
    displaytime.innerHTML = "00:00:00";
}




