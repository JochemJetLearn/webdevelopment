let attempts = 1

function sad() {
    document.getElementById("face").src = "assets/sad.png"

    attempts += 1
    document.getElementById("attempts").innerText = "Attempt " + attempts
}

function smile() {
    document.getElementById("face").src = "assets/happy.png"
}