createBoard(16);   

function createBoard(size){
    let board = document.querySelector('.board')

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for(let i = 0; i < numDivs; i++) {
        let div = document.createElement("div");
        board.insertAdjacentElement('beforeend', div);
    }
}

function getSize(){
    let input = prompt('Choose your size');
    let message = document.querySelector(".message");

    if(input == ""){
        message.innerHTML = "Please provide a number";
    }
    else if(input < 0 || input > 100){
        message.innerHTML = "Provide a number between 1 and 100";
    }
    else{
        message.innerHTML = "Now you can play! Have fun!";
    }  
}
 