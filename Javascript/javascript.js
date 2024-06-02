
const zorrosneak = document.getElementById('zorrosneak')
const playButton = document.getElementById('playButton')
const popup = document.getElementById('popup')
const music = document.getElementById('music');
const timerBar = document.getElementById('timerBar');
const clickCounter = document.getElementById('clickCounter')
const zorroAudio = new Audio("Sounds/zorro_Sound.mp3");
const zorroFoundAudio = new Audio("Sounds/zorrofound.mp3");
const zorroMisClick = new Audio("Sounds/zorromisclick.mp3")

let counter = 0;

// zorgt ervoor dat spel begint; zorrosneak komt, popup verdwijnt, geluid speelt af en timer gaat
function play(){
    counter = 0; 
    clickCounter.textContent = counter; 
    zorrosneak.style.display = "block" 
    popup.style.display = "none"; 
    zorroAudio.play(); 
    startTimer(30);
}

//zorgt dat zorro random rond het scherm springt, de counter wordt geupdate en er een geluid afspeelt
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
    counter++; /*hetzelfde als counter = counter + 1 */
    clickCounter.textContent = counter;
}

//hoe zorg ik ervoor dat als er op zorro wordt gedrukt er een geluid afspeelt, en als je misklikt (niet op zorro drukt) een ander geluid afspeelt. - ChatGPT
document.addEventListener('click', (event) => {
    if (zorrosneak.style.display === 'block') {
        if (event.target === zorrosneak) {
            randomizeZorro();
        } else {
            zorroMisClick.play();
        }
    }
});

playButton.addEventListener('click', (event) => {
    event.stopPropagation();
    play();
});





