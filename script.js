function makeBubble() {
    var clutter = "";
    for (var i = 1; i <= 133; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div id="bubble">${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}

var timer = 60;
var score = 0;
var hitrn;

function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit() {
    hitrn = Math.floor(Math.random() * 10); // Store new hit number in hitrn
    document.querySelector("#hitval").textContent = hitrn;
}

function runTimer() {
    var timerInt = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        } else {
            clearInterval(timerInt);
        }
    }, 1000);
}

document.querySelector("#pbtm").addEventListener("click", function (details) {
    var clickednum = Number(details.target.textContent);
    if (clickednum === hitrn) {
        increaseScore();
        getNewHit();
        makeBubble();
    }
});

// Initialize the game
document.querySelector("#scoreval").textContent = score; // Ensure score starts from 0
runTimer();
makeBubble();
getNewHit();
