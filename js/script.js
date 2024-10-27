document.addEventListener('DOMContentLoaded',()=>{
    const sidenav=document.querySelector('.side-nav');
    const btnnav=document.querySelector('#btn-nav');
    const overlay=document.querySelector('.nav-overlay');


    btnnav.addEventListener('click',()=>{sidenav.classList.add('open')});

    overlay.addEventListener('click',()=>{sidenav.classList.remove('open')});


});



function countdown(endDate) {
    let days, hours, minutes, seconds;
    
    endDate = new Date(endDate).getTime();
    
    if (isNaN(endDate)) {
        return;
    }
    
    setInterval(calculate, 1000);
    
    function calculate() {
        let startDate = new Date().getTime();
        let timeRemaining = parseInt((endDate - startDate) / 1000);
        
        if (timeRemaining >= 0) {
            days = parseInt(timeRemaining / 86400);
            timeRemaining = (timeRemaining % 86400);
            
            hours = parseInt(timeRemaining / 3600);
            timeRemaining = (timeRemaining % 3600);
            
            minutes = parseInt(timeRemaining / 60);
            seconds = parseInt(timeRemaining % 60);
            
            document.getElementById("days").innerHTML = days + "d ";
            document.getElementById("hours").innerHTML = hours + "h ";
            document.getElementById("minutes").innerHTML = minutes + "m ";
            document.getElementById("seconds").innerHTML = seconds + "s";
        } else {
            return;
        }
    }
}

(function () { 
    countdown('10/16/2024 00:00:00 AM'); 
}());

