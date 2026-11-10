let score = 0

function disableButtons(question) {
    let buttons = document.getElementById(question).children
    for (i=0; i<buttons.length; i++) {
        buttons[i].disabled = true
    }
}

function correct(question) {
    disableButtons(question)
    score++
    document.getElementById("score").innerText = score
}

function incorrect(question) {
    disableButtons(question)
}