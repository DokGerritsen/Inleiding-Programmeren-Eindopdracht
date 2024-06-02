console.log("log check")

const zorrosneak = document.getElementById('zorrosneak')
const playButton = document.getElementById('playButton')
const popup = document.getElementById('popup')
const music = document.getElementById('music');
const timerBar = document.getElementById('timerBar');
const clickCounter = document.getElementById('clickCounter')
const zorroAudio = new Audio("Sounds/zorro_Sound.mp3");
const zorroFoundAudio = new Audio("Sounds/zorrofound.mp3");


let counter = 0;


// display.block zorgt ervoor dat de kleinezorro tevoorschijn komt
// display none zorgt ervoor dat de popup verdwijnt
function play(){
    counter = 0;
    clickCounter.textContent = counter;
    zorrosneak.style.display = "block"
    popup.style.display = "none";
    zorroAudio.play();
    startTimer(30);
}

//zorgt dat zorro random rond het scherm springt
//met left en bottom plaats bepalen. Match ceil zorgt voor een 'max'
function randomizeZorro(){
    zorrosneak.style.left = Math.ceil(Math.random() * 100) + "vw"
    zorrosneak.style.bottom = Math.ceil(Math.random() * 100) + "vh"
    updateCounter();
    zorroFoundAudio.play();
}


// met deze funtion zorg ik ervoor dat de timer aftelt
function startTimer(duration) {
    let timeRemaining = duration;
    timerBar.style.width = "100%";
    
    countdown = setInterval(() => {
        timeRemaining -= 1;
        timerBar.style.width = (timeRemaining / duration) * 100 + "%";
        
        if (timeRemaining <= 0) {
            clearInterval(countdown);
            timerEnded();
        }
    }, 1000);
}


//hier zorg ik ervoor dat als de timer eindigt de originele popup weer tevoorschijn komt met nieuwe tekst
function timerEnded() {
    zorrosneak.style.display = "none";
    popup.style.display = "block";
    playButton.textContent = "Start";
    text.textContent = "En? heb jij Zorro gevonden? Probeer het nog een keer!";
}

function updateCounter() {
    counter++;
    clickCounter.textContent = counter;
}

zorrosneak.addEventListener('click', randomizeZorro);
playButton.addEventListener('click', play);


