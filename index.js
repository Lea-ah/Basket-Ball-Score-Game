let countHome = document.getElementById("count-home")
let countGuest = document.getElementById("count-guest")

let count = 0

function add1Home() {
    count += 1
    countHome.textContent = count
}

function add2Home() {
    count += 2
    countHome.textContent = count
}

function add3Home() {
    count += 3
    countHome.textContent = count
}


function add1Guest() {
    count += 1
    countGuest.textContent = count
}

function add2Guest() {
    count += 2
    countGuest.textContent = count
}

function add3Guest() {
    count += 3
    countGuest.textContent = count
}

function resetHome() {
    countHome.textContent = 0
    count = 0
}

function resetGuest() {
    countGuest.textContent = 0
    count = 0
}
