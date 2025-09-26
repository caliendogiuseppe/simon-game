let currentLevel = 1
let numbersExtracted = []
let userSequence = []
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

    if (gameStarted) {
        userSequence.push(GREEN)

        for (let i = 0; i < userSequence.length; i++) {
            if (userSequence[i] !== numbersExtracted[i]) {
                gameOver();
                return;
            }
        }

        // se la lunghezza dell'array della sequenza inserita dall'utente è uguale alla lunghezza dell'array dei numeri estratti (l'utente ha fatto tutto giusto), si passa al livello successivo
        if (userSequence.length == numbersExtracted.length) {
            currentLevel ++
            userSequence = [] //resetto la sequenza utente

            changeLevelInTitle()
            generateNewSound()
            startSequence()
        }
    }
});

$("#red-btn").click(() => {
    clickButton(RED)

    if (gameStarted) {
        userSequence.push(RED)

        for (let i = 0; i < userSequence.length; i++) {
            if (userSequence[i] !== numbersExtracted[i]) {
                gameOver();
                return;
            }
        }

        // se la lunghezza dell'array della sequenza inserita dall'utente è uguale alla lunghezza dell'array dei numeri estratti (l'utente ha fatto tutto giusto), si passa al livello successivo
        if (userSequence.length == numbersExtracted.length) {
            currentLevel ++
            userSequence = [] //resetto la sequenza utente

            changeLevelInTitle()
            generateNewSound()
            startSequence()
        }
    }
});

$("#yellow-btn").click(() => {
    clickButton(YELLOW)

    if (gameStarted) {
        userSequence.push(YELLOW)

        for (let i = 0; i < userSequence.length; i++) {
            if (userSequence[i] !== numbersExtracted[i]) {
                gameOver();
                return;
            }
        }

        // se la lunghezza dell'array della sequenza inserita dall'utente è uguale alla lunghezza dell'array dei numeri estratti (l'utente ha fatto tutto giusto), si passa al livello successivo
        if (userSequence.length == numbersExtracted.length) {
            currentLevel ++
            userSequence = [] //resetto la sequenza utente

            changeLevelInTitle()
            generateNewSound()
            startSequence()
        }
    }
});

$("#blue-btn").click(() => {
    clickButton(BLUE)

    if (gameStarted) {
        userSequence.push(BLUE)

        for (let i = 0; i < userSequence.length; i++) {
            if (userSequence[i] !== numbersExtracted[i]) {
                gameOver();
                return;
            }
        }

        // se la lunghezza dell'array della sequenza inserita dall'utente è uguale alla lunghezza dell'array dei numeri estratti (l'utente ha fatto tutto giusto), si passa al livello successivo
        if (userSequence.length == numbersExtracted.length) {
            currentLevel ++
            userSequence = [] //resetto la sequenza utente

            changeLevelInTitle()
            generateNewSound()
            startSequence()
        }
    }
});

// quando premo a starto il gioco
$(document).keypress((event) => {
    key = event.key

    if ((key == 'a' || key == 'A') && !gameStarted) {
        gameStarted = true
        
        changeLevelInTitle()
        generateNewSound()
        startSequence()
    }
})

const generateNewSound = () => {
    randomNumber = Math.trunc(Math.random() * (5 - 1) + 1) // numero randomico da 1 a 4
    numbersExtracted.push(randomNumber) //inserisco il numero randomico nell'array
}

// starto la sequenza di generazione automatica dei suoni (in base all'array dei numeri generati casualmente)
const startSequence = () => {
    //disattivo i bottoni
    deactivateAllButtons()

    // attendo 0.8 secondi prima di startare
    setTimeout(() => {
        for (let i = 0; i<numbersExtracted.length; i++) {
            setTimeout(()=>{
                clickButton(numbersExtracted[i])
            }, 600 * i)
        }

        // riattivo i bottoni
        activateAllButtons()
    }, 500)
    
    
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

const changeLevelInTitle = () => {
    $("h1").text("Livello " + currentLevel)
}

const deactivateAllButtons = () => {
    $("#green-btn").addClass("disabled")
    $("#red-btn").addClass("disabled")
    $("#yellow-btn").addClass("disabled")
    $("#blue-btn").addClass("disabled")
}

const activateAllButtons = () => {
    $("#green-btn").removeClass("disabled")
    $("#red-btn").removeClass("disabled")
    $("#yellow-btn").removeClass("disabled")
    $("#blue-btn").removeClass("disabled")
}

const gameOver = () => {
    gameStarted = false;
    $("body").css("background-color", "red") 
    $("h1").text("Game over :(")
    deactivateAllButtons()
}