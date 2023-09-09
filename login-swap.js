var selected = document.getElementById("selected");
var choice = false

function left() {
    if (choice !== false) {
        selected.style="transform: translateX(0%);"
        choice = false
    }
}

function right() {
    if (choice !== true) {
        selected.style="transform: translateX(100%);"
        choice = true
    }
}