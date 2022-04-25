// function definition for playing one game of rps 

function computerplay() {    
    return Math.floor((Math.random() * 3) )
}

// rock= 0, paper = 1, scissors = 2
// 0 > 2, 0 < 1, 1 < 2
// result function: 0 if player looses, 1, if player wins, 2 if draw

function rpsround(playersel, compsel) {
    if ( playersel === compsel) {
        return 0;
    }
    if ((playersel === 0 && compsel === 1) || (playersel == 1 && compsel === 2) 
    || (playersel === 2 && compsel === 0)) {
        return -1;
    } 
    else {
        return 1; 
    }
}

function play(playersel) {
        
        switch(playersel) {
            case 'rock':
                playersel = 0;
                break;
            case 'paper':
                playersel = 1;
                break;
            case 'scissors':
                playersel = 2;
                break;
            default: 
            console.log("invalid input")
        }        
        return result = rpsround(playersel, computerplay());
}
    
score_player = 0;
score_computer = 0;
console.log('debug');

const result_window = document.getElementById('score_output_window');
const b_rock = document.getElementById('rock');
const b_paper = document.querySelector('#paper');
const b_scissors = document.querySelector('#scissors');
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => button.addEventListener('click', e => {
    
    result_window.innerHTML = `<p> Score: You ${score_player} : ${score_computer} Computer </p>`
    let button_id = e.target.id;
    const temp = document.getElementById(e.target.id);
    temp.style.backgroundColor = 'yellow';
    setTimeout(() => { temp.style.backgroundColor = 'white'; }, 20);

    console.log(button_id);

    if (score_player === 5) {
        score_player = 0;
        score_computer = 0;
    };
    if (score_computer === 5) {
        score_player = 0;
        score_computer = 0;
    }

    switch(play(button_id)) {
        case -1:
            score_computer++;
            break;
        case 0:
            // add something here for outputting a draw somehow
            break;
        case 1:
            score_player++;
            break;
    }
    //debug
    console.log(`score: ${score_player} : ${score_computer}`)
    if (score_player === 5) {
        result_window.innerHTML = `<p> Final score: You ${score_player} : ${score_computer} Computer </p>
                                    <p>you won! press any button to restart the game. </p>`;
        
    } else if (score_computer === 5) {
        result_window.innerHTML = `<p> Final score: You ${score_player} : ${score_computer} Computer </p>
                                    <p> you lost! press any button to restart the game. </p>`;

    } else {
    }


}))
