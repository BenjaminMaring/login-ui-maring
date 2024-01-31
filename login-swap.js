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

const btn = document.getElementById('submit');
btn.addEventListener('click', e => {
    changeColor(e)
})

function changeColor(e) {
    const color=`rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
    e.target.style.backgroundColor = color;
}