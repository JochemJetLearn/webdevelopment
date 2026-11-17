const width = 5
const height = 5

const correctx = Math.floor(Math.random()*width)
const correcty = Math.floor(Math.random()*height)

function correct() {
    document.getElementById("chest").src = "assets/open-chest.png"
}

function incorrect() {
    document.getElementById("chest").src = "assets/closed-chest.png"
}

for (let x = 0; x < width; x++) {
    let division = document.createElement("div")
    document.getElementById("Treasure-Buttons").appendChild(division)
    for (let y = 0; y < height; y++) {
        let button = document.createElement("Button")
        button.className = "treasureButton"
        button.id = "Button-" + x + "-" + y
        if (x == correctx && y == correcty) {
            button.onclick = correct
        } else {
            button.onclick = incorrect
        }
        division.appendChild(button)
    }
}