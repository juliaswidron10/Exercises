startgame();
const buttons = document.querySelector("#buttons");
const comment = document.querySelector('#communicate');
const gamefield = document.querySelector("#gamefield");
const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');
let computermove = '';
let playermove = '';
let usermove = '';
let winner = '';

function startgame(){
    setTimeout(getComputerMove , 3000);
         let counter = 0;
         let load = setInterval(e =>{
             switch(counter){
                case 0:
                     comment.textContent = "Loading .";
                     counter = 1;
                     console.log('0')
                     break;
                case 1:
                    comment.textContent = "Loading . .";
                    counter = 3;
                    console.log('1')
                    break;
                default:
                    comment.textContent = "Loading . . .";
                    counter = 0;
                    console.log('2')
             }
             if(computermove !== ''){
                 clearInterval(load)
                 comment.textContent = "Choose your move";
             }
         }, 500);
};

function getComputerMove(){
    buttons.classList.remove('disabled');
    let randomNumber = Math.floor(Math.random()*3);
    if(randomNumber === 0){
        computermove = 'rock';
    }else if(randomNumber === 1){
        computermove = 'paper';
    }else{
        computermove = 'scissors';
    }
    console.log(computermove);

    getUserMove()
}

function getUserMove() {
    
    buttons.querySelectorAll('button').forEach(e=>{
        e.addEventListener("click", e=>{
            if(e.target.classAttribute === 'rock'){
                playermove = 'rock';
            }else if(e.target.classAttribute === 'paper'){
                playermove = 'paper';
            }else{
                playermove = 'scissors';
            }
            console.log(playermove);
            compareMoves();
        })
    })
}
const compareMoves = () =>{
    comment.textContent = "";
    buttons.classList.add('hidden');
    gamefield.classList.remove('hidden');
    document.querySelector('.player').addEventListener("animationend", pickWinner);
    // gamefield.classList.add('.player.shake');
}
const pickWinner = () =>{
    document.querySelector('.player').removeEventListener("animationend", pickWinner);
    player1.classList.remove(`shake`);
    player2.classList.remove(`shake`);
    player1.classList.add(`${playermove}`);
    player2.classList.add(`${computermove}`);

    if(playermove === 'rock'){
        if(computermove === 'paper'){
            winner = 'Computer'
        }else if(computermove === 'scissors'){
            winner = 'You'
        }else{
            winner = 'Tie'
        }
    }else if(playermove === 'paper'){
        if(computermove === 'rock'){
            winner = 'You'
        }else if(computermove === 'scissors'){
            winner = 'Computer'
        }else{
            winner = 'Tie'
        }
    }else{
        if(computermove === 'rock'){
            winner = 'Computer'
        }else if(computermove === 'paper'){
            winner = 'You'
        }else{
            winner = 'Tie'
        }
    }
    console.log('winner is');
    announceWinner();
}
function announceWinner(){
    if(winner === "Computer"){
        document.querySelector('#lose').classList.remove('hidden');
    }else if( winner === "You"){
        document.querySelector('#win').classList.remove('hidden');
    }else{
        document.querySelector('#draw').classList.remove('hidden');
    }
    comment.textContent = "Press anywhere to play again";
    document.addEventListener('click', resetGame);
}
function resetGame(){
    document.removeEventListener('click', resetGame);
    console.log('again?');
    computermove = '';
    playermove = '';
    usermove = '';
    winner = '';
    comment.textContent = "Loading .";
    player1.classList.add('shake');
    player2.classList.add('shake');
    gamefield.classList.add('hidden');

    buttons.classList.remove('hidden');
    buttons.classList.add('disabled');
    document.querySelector('#win').classList.add('hidden');
    document.querySelector('#lose').classList.add('hidden');
    document.querySelector('#draw').classList.add('hidden');
    
    startgame();
}