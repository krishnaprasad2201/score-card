let score = 0 

let home = document.getElementById("homescore")
let guest = document.getElementById("guestscore")

function onebutton() {
    //console.log('button is clicked')
    score = score + 1 
    home.textContent = score
    
}

function twobutton() {
    score = score + 2
    home.textContent = score
}

function threebutton() {
    score = score + 3
    home.textContent = score
}

let scoreg = 0



function onebuttonone() {
    //console.log('button is clicked')
    scoreg = scoreg + 1 
    guest.textContent = scoreg
    
}

function twobuttontwo() {
    scoreg = scoreg + 2
    guest.textContent = scoreg
}

function threebuttonthree() {
    scoreg = scoreg + 3
    guest.textContent = scoreg
}

function newgame() {
    home.textContent = 0
    guest.textContent = 0
    score = 0
    scoreg= 0
}

