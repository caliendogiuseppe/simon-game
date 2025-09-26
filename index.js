let currentLevel = 1
let numbersExtracted = []
let gameStarted = false

const GREEN = 1
const RED = 2
const YELLOW = 3
const BLUE = 4

/**
 * 1 - verde
 * 2 - rosso
 * 3 - giallo
 * 4 - blu
 */

// LISTENER
$("#green-btn").click(() => {
    clickButton(GREEN)
});

$("#red-btn").click(() => {
    clickButton(RED)
});

$("#yellow-btn").click(() => {
    clickButton(YELLOW)
});

$("#blue-btn").click(() => {
    clickButton(BLUE)
});

// quando premo a starto il gioco
$(document).keypress((event) => {
    key = event.key

    if ((key == 'a' || key == 'A') && !gameStarted) {
        gameStarted = true
        $("h1").text("Livello 1")

        generateNewSound()
    }
})

const generateNewSound = () => {
    randomNumber = Math.trunc(Math.random() * (5 - 1) + 1) // numero randomico da 1 a 4
    numbersExtracted.push(randomNumber) //inserisco il numero randomico nell'array
}

// animazioni che partono (suono + effetto click) quando clicco uno dei 4 pulsanti
const clickButton = (n) => { 
    let button
    let audio

    switch(n) {
        case 1:
            button = $("#green-btn");
            audio = new Audio('./sounds/green.mp3');
            break;
        case 2:
            button = $("#red-btn");
            audio = new Audio('./sounds/red.mp3');
            break;
        case 3:
            button = $("#yellow-btn");
            audio = new Audio('./sounds/yellow.mp3');
            break;
        case 4:
            button = $("#blue-btn");
            audio = new Audio('./sounds/blue.mp3');
            break;
    }

    // effetto del tasto premuto
    button.addClass("pressed")
    setTimeout(() => {
        button.removeClass("pressed")
    }, 100  )
    
    // suono 
    audio.play();
}