// Functionality for the Etch-a-Sketch //
let color = 'black'
document.addEventListener('DOMContentLoaded', function () {
    createBoard(16);
    
    let btn_size_selector = document.querySelector("#popup");
    btn_size_selector.addEventListener('click', function () {
        let size = getSize();
        createBoard(size);
    })
    console.log('Page loaded');
})

// Making the board into a grid //
function createBoard(size) {
    let board = document.querySelector('.board');

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for (let i = 0; i < numDivs; i++) {
        let div = document.createElement('div');
        div.addEventListener('mouseover', colorDiv);
        board.insertAdjacentElement('beforeend', div);
    }
}

//Prompting user to change the size of the board//
function getSize() {
    let input = prompt('What will be the size of the board?');
    let message = document.querySelector('#message');
    if (input == "") {
        message.innerHTML = 'Please provide a number';
    }
    else if (input < 0 || input > 100) {
        message.innerHTML = 'Provide a number between 1 and 100';
    }
    else {
        message.innerHTML = 'Now you play!';
        return input;
    }
}

//Changing the color of the divs to either random or black//
function colorDiv() {
    if (color == 'random') {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }
    else {
        this.style.backgroundColor = 'black';
    }
}

function setColor(colorChoice) {
    color = colorChoice;
}

//Resetting the board//
function resetBoard() {
    let divs = document.querySelectorAll('div');
    divs.forEach((div) => div.style.backgroundColor = 'white');
}