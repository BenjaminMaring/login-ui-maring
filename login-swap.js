var selected = document.getElementById("selected");
var choice = 1

function left() {
    if (choice !== 1) {
        selected.style="transform: translateX(0%);"
        choice = 1
    }
}

function right() {
    if (choice !== 2) {
        selected.style="transform: translateX(100%);"
        choice = 2
    }
}