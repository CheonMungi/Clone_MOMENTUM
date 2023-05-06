const clockDiv = document.querySelector(".clock-div");
const clock = clockDiv.querySelector("#clock");

/**
 * 현재 시간
 */
function getClock()
{
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    
    clock.innerText=`${hours}:${minutes}:${seconds}`;
    
}
getClock();
setInterval(getClock, 1000);

// function getClock(){
//     const date = new Date();
//     clock.innerText =`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
// }

// getClock();
// setInterval(getClock, 1000);