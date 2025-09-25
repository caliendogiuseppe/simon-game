let currentLevel = 1
let numbersExtracted = []
let gameStarted = false

/**
 * 1 - verde
 * 2 - rosso
 * 3 - giallo
 * 4 - blu
 */

// LISTENER
$("#green-btn").click(() => {
    clickButton($("#green-btn"))
});

$("#red-btn").click(() => {
    clickButton($("#red-btn"))
});

$("#yellow-btn").click(() => {
    clickButton($("#yellow-btn"))
});

$("#blue-btn").click(() => {
    clickButton($("#blue-btn"))
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
const clickButton = (button) => { //button = $("#green-btn") OPPURE $("#red-btn")
    button.addClass("pressed")
    setTimeout(() => {
        button.removeClass("pressed")
    }, 100  )
    

}