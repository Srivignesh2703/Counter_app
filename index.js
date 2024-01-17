
let countEl = document.getElementById('count-el')

let count = 0
function increment() {
    console.log("The button was clicked")
    count = count + 1
    countEl.innerText = count
}

let saveEl = document.getElementById('save-el')

function save() {
    saveEl.textContent += count + " - "
    count = 0
    countEl.textContent = count
}

function reset() {
    saveEl.textContent = "Previous Entries:"
}