console.log("log check")

/*
const btnNieuwGetal = document.querySelector("button");

function veranderGetal() {
    let getal = Math.random();
    document.querySelector('p').textContent = getal;
}

btnNieuwGetal.addEventListener('click', veranderGetal);
*/


document.getElementById('playButton').addEventListener('click', function() {
    let music = document.getElementById('music');
    music.play();
});


// is er een manier om wel de popup te laten verdwijnen maar wel het geluid te laten afspelen als je de start knop indrukt - ChatGPT
document.getElementById('playButton').addEventListener('click', function() {
    var popup = document.getElementById('popup');
    popup.style.display = "none";
});